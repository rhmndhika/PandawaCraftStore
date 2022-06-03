import { IonBackButton, IonTitle, IonHeader, IonToolbar, IonButtons, IonAvatar, IonPage, IonContent, IonItem, IonText, IonGrid, IonButton } from '@ionic/react';
import Login from '../components/Login';
import Produk from '../components/Produk';
import logo from '../assets/logo.png';

const EditProduk: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
        <IonToolbar className="toolbar">
            <IonButtons slot="start">
                <IonBackButton defaultHref="home"/>
            </IonButtons>
            <IonButtons slot="end">
                        <IonButton href="/halamanlogin">
                        <IonAvatar className="avatar">
                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f01db52-f675-48dc-9c91-f245d99f1486/d2nqynw-af694fd2-e1ba-4e9c-badb-630a48474599.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmMDFkYjUyLWY2NzUtNDhkYy05YzkxLWYyNDVkOTlmMTQ4NlwvZDJucXludy1hZjY5NGZkMi1lMWJhLTRlOWMtYmFkYi02MzBhNDg0NzQ1OTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.59_LN0TnrsDrVLS266jLpfZZfte_OZeNGkNQFJzgQCM" />
                        </IonAvatar>
                        </IonButton>
                    </IonButtons>
            <IonTitle className="title">PandawaCS</IonTitle>
        </IonToolbar>
    </IonHeader>
    <Produk />
</IonPage>
  );
};

export default EditProduk;