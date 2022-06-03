import { IonAvatar, IonBadge, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import RegisterSucces from "../components/RegisterSucces";

const SuccessPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
    <RegisterSucces />
    </IonContent>
    
    </IonPage>
  );
};

export default SuccessPage;
