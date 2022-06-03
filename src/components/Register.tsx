import React,{useState} from 'react';
import { IonRow, IonLabel, IonInput, IonGrid, IonButton, IonText, IonItem, IonAvatar, IonBadge, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import logo from '../assets/logo.png';
import "./Register.css";



const Register: React.FC = () => {
    const [text, setText] = useState<string>();
    
  return (
   
      <IonContent className="body" class="ion-padding">
          <img className="logoLogin" src={logo} />
        <IonItem lines="none" className="textStore"> 
            <IonText>
                <h5 className="textTitle">
                Pandawa Craft Store
                </h5>
            </IonText>
        </IonItem>
        {/* <IonItem lines="none"> 
            <IonText className="textRegister">
                Register
            </IonText>
        </IonItem> */}
        <IonItem lines="none" className='textItem'> 
            <IonText className='text2'>
               Register
            </IonText>
        </IonItem>
    </IonContent>   
   
  );
};

export default Register;