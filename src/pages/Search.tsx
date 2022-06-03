import { IonContent, IonSearchbar, IonAvatar, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from "@ionic/react";
import React, {useState} from "react";
import logo from "../assets/logo.png";

const Search: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="toolbar">
                    <IonButtons slot="start">
                        <IonAvatar className="logo" >
                            <img src={logo}/>
                        </IonAvatar>
                    </IonButtons>
                    <IonTitle className="title">Search</IonTitle>
                    <IonButtons slot="end">
                        <IonButton href="/halamanlogin">
                        <IonAvatar className="avatar">
                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f01db52-f675-48dc-9c91-f245d99f1486/d2nqynw-af694fd2-e1ba-4e9c-badb-630a48474599.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmMDFkYjUyLWY2NzUtNDhkYy05YzkxLWYyNDVkOTlmMTQ4NlwvZDJucXludy1hZjY5NGZkMi1lMWJhLTRlOWMtYmFkYi02MzBhNDg0NzQ1OTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.59_LN0TnrsDrVLS266jLpfZZfte_OZeNGkNQFJzgQCM" />
                        </IonAvatar>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
                    <IonContent>
                    <IonToolbar>
                        <br></br>
                    <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} placeholder="Cari Kerajinan Tangan..."></IonSearchbar>
                    </IonToolbar>
                    </IonContent>
        </IonPage>
    );
};

export default Search;