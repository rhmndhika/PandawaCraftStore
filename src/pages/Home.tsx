import { IonAvatar, IonBadge, IonButton, IonButtons, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/Card';
import Slide from '../components/Slide';
import './Home.css';
import logo from "../assets/logo.png";

const Home: React.FC = () => {
  return (
    <IonPage>
      
      <IonHeader>
        <IonToolbar color='E3E3E3' className='new-bg-color toolbarHome'>
          <IonButtons slot="start">
            <IonAvatar className="logo" >
              <img src={logo}/>
            </IonAvatar>
          </IonButtons>
          <IonTitle size="large" className='title'>Home</IonTitle>
          <IonButtons slot="end">
                        <IonButton href="/halamanlogin">
                        <IonAvatar className="avatar">
                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f01db52-f675-48dc-9c91-f245d99f1486/d2nqynw-af694fd2-e1ba-4e9c-badb-630a48474599.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmMDFkYjUyLWY2NzUtNDhkYy05YzkxLWYyNDVkOTlmMTQ4NlwvZDJucXludy1hZjY5NGZkMi1lMWJhLTRlOWMtYmFkYi02MzBhNDg0NzQ1OTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.59_LN0TnrsDrVLS266jLpfZZfte_OZeNGkNQFJzgQCM" />
                        </IonAvatar>
                        </IonButton>
                    </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='homeContent'>
        <Slide />
        <Card />
    
      </IonContent>
    </IonPage>
  );
};

export default Home;
