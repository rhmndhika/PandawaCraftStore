import {IonText, IonItem, IonIcon, IonRow, IonLabel, IonCol, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonAvatar } from "@ionic/react";
import React, { useContext } from "react";
import { star,home, search, list, cart, map, calendar, personCircle, informationCircle} from 'ionicons/icons';
import "./ProductDeskripsi.css";
import StoreContext from './data/store-context';

export const LIST_GAMBAR = [
    {photo: 'https://padiumkm.id/public/products/47619/599812/img_20220329_11.1648526512.jpg', desc: 'Tas'},
  ];

const ProductDesc: React.FC = () => {
    const storeCtx = useContext(StoreContext);

    const addCartHandler = (id: string) => {
        storeCtx.addCart(id);
      }
    return (
        <IonPage>
            <IonHeader>
            <IonToolbar className="toolbar">
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/productbycategory" />
                </IonButtons>
                <IonTitle className="title">PandawaCS</IonTitle>
                <IonButtons slot="end">
                    <IonAvatar className="avatar">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f01db52-f675-48dc-9c91-f245d99f1486/d2nqynw-af694fd2-e1ba-4e9c-badb-630a48474599.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmMDFkYjUyLWY2NzUtNDhkYy05YzkxLWYyNDVkOTlmMTQ4NlwvZDJucXludy1hZjY5NGZkMi1lMWJhLTRlOWMtYmFkYi02MzBhNDg0NzQ1OTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.59_LN0TnrsDrVLS266jLpfZZfte_OZeNGkNQFJzgQCM" />
                    </IonAvatar>
                </IonButtons>
            </IonToolbar>
            </IonHeader>
      <IonContent>
      {storeCtx.descriptions.map(data => (
          <IonRow>
                <IonCol size="12">
                    <IonCard className="productDescCard">
                        <IonRow>
                        <IonCol size="6">
                        <IonCardContent>
                            <IonImg src={data.photo}></IonImg>                          
                        </IonCardContent>
                        </IonCol>
                        <IonCol size="6"> 
                            <div className="midV">
                            <IonLabel>
                            <IonText color="dark" className="itemName">
                            {data.name}
                            </IonText> 
                            <p className="itemStock">Stock : {data.stock}</p>
                            <IonText color="dark">
                            <IonText className="hargaProduk">Rp {data.price} </IonText> 
                            </IonText> 
                            </IonLabel>
                            <IonItem  lines="none" className="pbcItem">            
                            <IonButton color="dark" href="/review" className="btnBeli">Beli</IonButton>
                            <IonButtons onClick={addCartHandler.bind(null,data.id)}>
                                <IonIcon size="large" icon={cart} />     
                            </IonButtons> 
                            </IonItem> 
                            </div>                     
                        </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonLabel>
                                    <IonText className="deskripsiProduk">Deskripsi</IonText>
                                    <IonText color="dark">
                                    <h5 className="detailProduk">
                                    {data.description}
                                    </h5>
                                    </IonText>
                                </IonLabel>

                    
                            </IonCol>
                        </IonRow>
                    </IonCard>
                </IonCol>
                
          </IonRow>
                ))}
        </IonContent>
        </IonPage>
    );
};

export default ProductDesc;