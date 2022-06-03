import React,{useState, useRef, useEffect} from 'react';
import { IonRow, IonLabel, IonInput, IonGrid, IonButton, IonText, IonItem, IonAvatar, IonBadge, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, useIonToast, IonLoading } from '@ionic/react';
import logo from '../assets/logo.png';
import "./LoginCustomer.css";
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router';
import {collection, addDoc, getDocs, doc} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { async } from '@firebase/util';
import { getDownloadURL, ref, uploadBytes, getStorage } from "firebase/storage";



const LoginCustomer: React.FC = () => {

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [present, dismiss] = useIonToast();
    const { login, signInWithGoogle } = useAuth();
    const history = useHistory();

    const mounted = useRef(false);

    const db = getFirestore();
    const [selectedFile, setSelectedFile] = useState<File>();
    const [fileName, setFileName] = useState('');
    const storage = getStorage();
    const storageRef = ref(storage, 'some-child');
    const [students, setStudents] = useState<Array<any>>([]);

    const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(event.target!.files![0]);
        setFileName(event.target!.files![0].name);
      };
      
      const insertHandler = async() => {
        const storageRef = ref(storage, fileName);
        uploadBytes(storageRef, selectedFile as Blob).then((snapshot) => {
          console.log('upload file succes');
          getDownloadURL(ref(storage, fileName)).then((url)=>{
            addData(url);
          })
        })
      };

      const addData = async(url: string) =>{
        try{
            const docRef = await addDoc(collection(db, "students"),{
                username: username,
                email: email,
                password: password,
                foto: fileName,
                fotoUrl: url
            });
            console.log("Document written with ID : ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    // useEffect(() => {
    //    const addData = async () => {
    //        try{
    //            const docRef = await addDoc(collection(db, "students"),{
    //                first: "Rahman",
    //                last: "dhika",
    //                born: 2001
    //            });
    //            console.log("Document written with ID: ", docRef.id);
    //        } catch (e) {
    //            console.error("Error adding document: ", e);
    //        }
    //    }
    //    addData();
    // }, [])

    useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        }
    }, [])

    useEffect(() => {
        async function getData() {
          const querySnapshot = await getDocs(collection(db, "students"));
          console.log('querySnapshot:', querySnapshot);
          setStudents(querySnapshot.docs.map((doc => ({...doc.data(), id:doc.id}))));
    
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            console.log('doc', doc);
          });
        }
        getData();
      },[])
    
      
    
  return (
    <IonPage>
      <IonContent className="body" class="ion-padding">
          <img className="logoLogin" src={logo} />
        <IonItem lines="none" className="backgroundItem"> 
            <IonText className='text1'>
                Pandawa Craft Store 
            </IonText>
        </IonItem>
        <IonItem lines="none" className='textItem'> 
            <IonText className='text2'>
               Login
            </IonText>
        </IonItem>
        <IonGrid className="gridinput1">
        <IonRow>
            <IonInput type='text' className="inputEmail" value={username} placeholder="Username" onIonChange={e => setUsername(e.detail.value!)}></IonInput>
        </IonRow>
        </IonGrid>

        <IonGrid className="gridinput2">
        <IonRow>
            <IonInput type='email' className="inputEmail" value={email} placeholder="Email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
        </IonRow>
        </IonGrid>

        <IonGrid className="gridinput2">
    
        <IonRow>
            <IonInput type='password' className="inputEmail" value={password} placeholder="Password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
        </IonRow>

        </IonGrid>
        <IonGrid className="gridinput1">
        <IonRow>
            <IonButton onClick={async e =>{
                e.preventDefault()
                if (!email || !password){
                    present({
                        buttons: [{ text: 'hide', handler: () => dismiss() }],
                        message: 'Credentials not valid',
                        onDidDismiss: () => console.log('dismissed'),
                        onWillDismiss: () => console.log('will dismiss'),
                      })
                } else {
                    setShowLoading(true)
                    setIsSubmitting(true)
                    login(username, email, password)
                    .then((response) => {
                        console.log(response)
                        history.push('/home')
                    })
                    .catch((error) => console.log(error.message)).finally(() => mounted.current && setIsSubmitting(false))
                }
                insertHandler()
            }}
             className="buttonLogin" expand="block" size="default" color="new">
                Login
            </IonButton>
            <IonLoading
                cssClass='my-custom-class'
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={'Login...'}
                duration={500}
            />
        </IonRow>
        </IonGrid>
        
        <IonGrid>
            <p className="textDetail">Or Continue with </p>
        </IonGrid>
          
      <IonButton className="btnGoogle" onClick={()=> signInWithGoogle()
            .then(user => {
                console.log(user)
                history.push('/home')
                })
            .catch(error => console.log(error))}
            color="new"
            >
               Google Sign In
        </IonButton>
            <p className="textSignup"><a href="/registercustomer">New in pandawaCS ? Sign Up Now</a></p>
    </IonContent>   
    </IonPage>
  );
};

export default LoginCustomer;

