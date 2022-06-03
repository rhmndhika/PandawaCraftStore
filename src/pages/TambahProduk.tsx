import React, {useState, useRef} from 'react';
import { IonIcon, IonCard, IonButton, IonCardContent, IonRow, IonCol, IonInput, IonBackButton, IonTitle, IonHeader, IonToolbar, IonButtons, IonAvatar, IonPage, IonContent, IonItem, IonText, IonGrid } from '@ionic/react';
import logo from '../assets/logo.png';
import addImage from '../assets/addImage.png';
import "../components/Produk.css";
import { chevronDownSharp } from 'ionicons/icons';


const TambahProduk: React.FC = () => {
    const [text, setText] = useState<string>();
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
    <IonContent>
          <IonCard className="wrapper">
            <IonCardContent>
                <IonCard className="cardImage">
                    <img src={addImage} />
                    <IonText className="textImage">
                    Change Product Image
                    </IonText>
                </IonCard>

            <IonItem lines="none" className="itemProduk">
            <IonGrid>
                <IonRow>
                   <IonCol>
                        <IonText>
                            Nama Produk
                        </IonText>
                    </IonCol>
                    <IonCol>
                    <IonInput className="inputProduk" value={text} onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonCol>
                </IonRow>
            </IonGrid>
            </IonItem>

            <IonItem lines="none" className="itemProduk">
            <IonGrid>
                <IonRow>
                   <IonCol>
                        <IonText>
                            Deskripsi
                        </IonText>
                    </IonCol>
                    <IonCol>
                    <IonInput className="inputProduk" value={text} onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonCol>
                </IonRow>
            </IonGrid>
            </IonItem>

            <IonItem lines="none" className="itemProduk">
            <IonGrid>
                <IonRow>
                   <IonCol>
                        <IonText>
                           Stok
                        </IonText>
                    </IonCol>
                    <IonCol>
                    <IonInput className="inputProduk" value={text} onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonCol>
                </IonRow>
            </IonGrid>
            </IonItem>

            <IonItem lines="none" className="itemProduk">
            <IonGrid>
                <IonRow>
                   <IonCol>
                        <IonText>
                           Harga
                        </IonText>
                    </IonCol>
                    <IonCol>
                    <IonInput className="inputProduk" value={text} onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonCol>
                </IonRow>
            </IonGrid>
            </IonItem>

            <IonItem lines="none" className="itemProduk">
            <IonGrid>
                <IonRow>
                   <IonCol>
                        <IonText>
                            Kategori
                        </IonText>
                    </IonCol>
                    <IonCol>
                    <IonInput className="inputProduk" value={text} onIonChange={e => setText(e.detail.value!)}>
                    <IonIcon  className="iconDown" icon={chevronDownSharp} />
                    </IonInput>
                    </IonCol>
                </IonRow>
            </IonGrid>
            </IonItem>
            <IonButton className="buttonUpdate" expand="block" color="new">
                Tambahkan Produk
            </IonButton>
            </IonCardContent>
            </IonCard>
    </IonContent>
</IonPage>
  );
};

export default TambahProduk;