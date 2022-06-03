import React,{useEffect, useRef, useState} from 'react';
import { useIonLoading, IonRow, IonInput, IonHeader, IonToolbar, IonButton, IonAvatar, IonTitle, IonPage, IonContent, IonItem, IonText, IonGrid, useIonToast, IonLoading } from '@ionic/react';
import Register from '../components/Register';
import logo from "../assets/logo.png";
import "./RegisterCustomer.css";
import { useAuth } from "../context/AuthContext";
import { auth } from '../utils/init-firebase';
import { useHistory } from 'react-router';



interface LoadingProps {}

const RegisterCustomer: React.FC = () => {
    const [text, setText] = useState<string>('');

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [present, dismiss] = useIonToast();
    const { register } = useAuth();

    const history = useHistory();

    const mounted = useRef(false);
    
    setTimeout(() => {
        setShowLoading(false);
      }, 2000);
     
      useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        }
    }, [])

    

  return (
   <IonPage>
        <Register />
        <IonContent className="body">
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
                }else{
                    setShowLoading(true)
                    setIsSubmitting(true)
                    register(username,email, password)
                    .then((response) => {
                        console.log(response)
                        history.push('/logincustomer')
                    })
                    .catch((error) => console.log(error.message)).finally(() => mounted.current && setIsSubmitting(false))
                }
            }}
            className="buttonLogin" expand="block" size="default" color="new">
                Register Now
            </IonButton>
            <IonLoading
                cssClass='my-custom-class'
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={'Registering your account...'}
                duration={40000}
            />
        </IonRow>
        </IonGrid>   
            <p className="loginSeller"><a href="https://www.w3schools.com/">Are you a seller? Login as Seller</a></p>
    </IonContent>
    </IonPage>
  );
};

export default RegisterCustomer;