import React, {useRef} from "react";
import { IonButton, IonContent, IonItem, IonText } from '@ionic/react';
import logo from '../assets/logo.png';
import check from '../assets/check.png';
import success from '../assets/success.png';
import "./RegisterSucces.css";


const RegisterSuccess: React.FC = () => {
    return (
      <IonContent class="ion-padding" className="signupCont">
        <img className="logoLogin" src={logo} />
          <IonItem lines="none" className="f1"> 
            <IonText className="textTitle">
                Welcome to the club
            </IonText>
          </IonItem>
          <img className="logoSucces" src={success} />
          <IonButton className="buttonStarted" expand="block" color="new" shape="round">
          Get Started
          </IonButton>
        </IonContent>
    );
};

export default RegisterSuccess;