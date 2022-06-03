import React,{useState, useRef, useEffect} from 'react';
import { IonRow, IonLabel, IonInput, IonGrid, IonButton, IonText, IonItem, IonAvatar, IonBadge, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, useIonToast, IonLoading } from '@ionic/react';
import logo from '../assets/logo.png';
import "./LoginSeller.css";
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router';


const LoginSeller: React.FC = () => {

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [present, dismiss] = useIonToast();
    const { login, signInWithGoogle } = useAuth();
    const history = useHistory();

    const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        }
    }, [])

 

    
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
                        history.push('/homeseller')
                    })
                    .catch((error) => console.log(error.message)).finally(() => mounted.current && setIsSubmitting(false))
                }
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
                history.push('/homeseller')
                })
            .catch(error => console.log(error))}
            color="new"
            >
                Google Sign In
        </IonButton>
            <p className="textSignup"><a href="/registerseller">New in pandawaCS ? Sign Up Now</a></p>
    </IonContent>   
    </IonPage>
  );
};

export default LoginSeller;