import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect } from "react";
import ProdukKategori from "../components/ProdukKategori";
import "./HomeSeller.css";
import logo from '../assets/logo.png';
import { useAuth } from "../context/AuthContext";
import {collection, addDoc} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const HomeSeller: React.FC = () => {
    const { currentUser } = useAuth();
    const { logout} = useAuth();

    const db = getFirestore();

    

        const json:any = currentUser;
        // console.log(json.email)

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="toolbar">
                    <IonButtons slot="start">
                        <IonAvatar className="logo" >
                            <img src={logo}/>
                        </IonAvatar>
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
                <h1 className="greeting">Halo,</h1>
                <h1 className="greeting">{json.email}</h1>
                <IonGrid className="containerHS">
                    <IonRow>
                        <IonCol size="12">
                            <IonCard className="sellerHomeCard2" href="productseller">
                                <h1 className="sellerHomeText2">Lihat Produk Saya</h1>
                            </IonCard>
                        </IonCol>
                        <IonCol size="12">
                            <IonCard className="sellerHomeCard1" href="tambahproduk">
                                <h1 className="sellerHomeText1">Tambah Produk</h1>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default HomeSeller;