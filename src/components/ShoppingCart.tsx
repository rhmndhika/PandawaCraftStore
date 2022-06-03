import React, {useContext, useRef, useState} from "react";
import { IonText, IonCol, IonRow, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonImg, IonButtons, IonAvatar, IonGrid } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './ShoppingCart.css';
import logo from "../assets/logo.png";
import StoreContext from './data/store-context';

export const LIST_CART = [
  {photo: 'https://padiumkm.id/public/products/47619/599812/img_20220329_11.1648526512.jpg', desc: 'Tas'}
];

let totalPrice = 0;
let indexLoop = 0;

const ShoppingCart: React.FC = () => {

  const storeCtx = useContext(StoreContext);
  console.log(storeCtx);

  const [count, setCount] = useState(() => {
    return 1
  })

  const [total, setTotal] = useState(0);
  const [newTotal, setNewTotal] = useState(() => {
    return 0;
  });


  function sumPrice (itemPrice : number) {
    // setTotal(total + itemPrice * count)
    const tot = itemPrice * count;
    totalPrice += tot;
    console.log('price');
  }

  function increment (itemPrice : number) {
    // setCount(count + 1)
    setCount(prevCount => prevCount + 1);
    totalPrice += itemPrice * count;
  }

  function decrement (itemPrice : number) {
    // setCount(count + 1)
    setCount(prevCount => prevCount - 1)
    totalPrice -= itemPrice * count;
  }

    return (
        <IonPage>
        <IonHeader>
          <IonToolbar className="toolbar">
            <IonButtons slot="start">
              <IonAvatar className="logo" >
                <img src={logo}/>
              </IonAvatar>
            </IonButtons>
            <IonTitle className="title">Cart</IonTitle>
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
        {storeCtx?.carts?.map((data) => {
          sumPrice(data.price);
          return (
            <IonItem>
                <IonGrid>
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
                    <p className="itemStock">Stok : {data.stock}</p>
                    <IonText color="dark">
                    <IonText className="hargaProduk">Rp {data.price} </IonText> 
                    </IonText> 
                    </IonLabel>
                    </div>                     
                </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offset="0.5">                              
                  <IonLabel className="buttonStok">                            
                        <IonItem lines="none">
                    <IonButton color="dark" className="button1" expand="full" size="small" onClick={() => decrement(data.price)}> - </IonButton>
                        <IonText className="count">
                          {count}
                        </IonText>
                          <IonButton color="dark" className="button2" expand="full" size="small" onClick={() => increment(data.price)}> + </IonButton>
                        </IonItem>
                    </IonLabel>                                                            
                    </IonCol>
                </IonRow>
                </IonGrid>
              </IonItem>   
          )
          
        })}

            <div className="cartFinal">
              <IonText className="hargaTotal">Total : {totalPrice}</IonText>
              <br></br>
              <IonButton className="btnBayar" color="dark">Bayar Sekarang</IonButton>
            </div>

        </IonContent>
      </IonPage>
    );
};

export default ShoppingCart;