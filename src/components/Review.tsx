import React, {useState} from 'react';
import { IonButtons, IonGrid, IonText, IonItemDivider, IonRange, IonInput, IonRow, IonCol, IonAvatar, IonList, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { checkmarkDoneSharp} from 'ionicons/icons';
import { star } from 'ionicons/icons';
import { RangeValue } from '@ionic/core';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import logo from "../assets/logo.png";
import './Review.css'

const foto = "https://cdn.pixabay.com/photo/2014/04/03/11/50/shopping-312311_960_720.png";

const Review: React.FC = () => {

 
  const [value, setValue] = useState(null);
  const [rangeValue, setRangeValue] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });
  
  const customFormatter = (value: number) => `${value}%`;
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
                <IonAvatar className="avatar">
                    <img className='avatarImg' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f01db52-f675-48dc-9c91-f245d99f1486/d2nqynw-af694fd2-e1ba-4e9c-badb-630a48474599.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmMDFkYjUyLWY2NzUtNDhkYy05YzkxLWYyNDVkOTlmMTQ4NlwvZDJucXludy1hZjY5NGZkMi1lMWJhLTRlOWMtYmFkYi02MzBhNDg0NzQ1OTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.59_LN0TnrsDrVLS266jLpfZZfte_OZeNGkNQFJzgQCM" />
                </IonAvatar>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="wrapperPesanan">
          <IonCardHeader>
            <IonCardTitle>Detail Pesanan</IonCardTitle>
            <IonCardSubtitle>Track Orders</IonCardSubtitle>
            <IonCardSubtitle>ID Pesanan : #A021221045</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonCard className="cardPesanan">
              <IonList>
                <IonItem lines="none">
                  <IonRow>
                    <IonCol>
                      <IonAvatar>
                        <img src={foto} />
                      </IonAvatar>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonLabel>
                        <h2>Tas 1</h2>
                        <IonIcon icon={checkmarkDoneSharp} />  
                        <p>Done !</p>
                      </IonLabel>
                    </IonCol>
                  </IonRow>
                </IonItem>
              </IonList>
            </IonCard>
        </IonCardContent>
        </IonCard>

        <br></br>
        <br></br>
      
        <IonCard className="cardReview">
              <IonList>
                <IonItem lines="none">
                  <IonRow>
                    <IonCol>
                      <IonAvatar>
                        <img src={foto} />
                      </IonAvatar>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <form>
                      <IonItem>
                          <IonLabel>
                            Beritahu pengguna lain <br></br>mengapa anda sangat <br></br> menyukai produk ini
                          </IonLabel>
                          <IonInput  />
                      </IonItem>
                      </form>
                    </IonCol>
                  </IonRow>
                </IonItem>
              </IonList>
            </IonCard>

            <br></br>
            <br></br>
            <br></br>

           <IonText className="textReview">
             <h2>Berikan Penelianmu</h2>
           </IonText>

           <Stack className="Test" spacing={1}>
            <Rating name="size-large" defaultValue={2} size="large" />
          </Stack>
          

          <IonLabel className="buttonReview">
            <IonButton expand="block" size="default" className="btnSubmit" href='/home'>Submit</IonButton>
            <IonButton expand="block" size="default" className="btnSkip" href='/home'>Skip</IonButton>
          </IonLabel>


      </IonContent>
    </IonPage>
  );
};

export default Review;