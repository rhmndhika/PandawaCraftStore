import { IonGrid, IonButton, IonText, IonItem, IonAvatar, IonBadge, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import "./HalamanLogin.css";
import logo from '../assets/logo.png';


const HalamanLogin: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="body" class="ion-padding">
          <img className="gambarLogo" src={logo} />
        <IonItem lines="none" className="itemTitle"> 
            <IonText className="titleToko">
                Pandawa Craft Store
            </IonText>
        </IonItem>
        <IonGrid className="gridbutton1">
            <IonButton className="buttonLoginCos" expand="block" size="default" color="new" href="/logincustomer">
                Login as Customer   
            </IonButton>
        </IonGrid>
        <IonGrid className="gridbutton2">
            <IonButton className="buttonLoginSel" expand="block" size="default" color="new" href="/loginseller">
                Login as Seller   
            </IonButton>
        </IonGrid>
    </IonContent>
    </IonPage>
  );
};

export default HalamanLogin;