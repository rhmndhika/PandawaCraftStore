import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonRow, IonText } from "@ionic/react";
import { cart } from "ionicons/icons";
import React, { useContext } from "react";
import './ProdukKategori.css';
import StoreContext from './data/store-context';
import { useHistory } from "react-router";

export const PRODUCT_BY_CATEGORY = [
    {photo: 'https://cf.shopee.co.id/file/b6500b0004c52158b187d5cdeef8a731', name: 'Tas 1', desc: 'Deskripsi 1', stock : 10, price: "120.000"},
    {photo: 'https://aquariusboyz.files.wordpress.com/2010/11/anyaman.jpg', name: 'Tas 2', desc: 'Deskripsi 2', stock : 4, price: "230.000"},
    {photo: 'http://3.bp.blogspot.com/-XqUAtFoPzQc/VhNBcQYw6NI/AAAAAAAAABU/1OVi9gCTugA/s1600/anyam%2Bbambu.JPG', name: 'Tas 3', desc: 'Deskripsi 3', stock : 27, price: "185.000"},
    {photo: 'https://i.ytimg.com/vi/JsO9UG9AvXs/maxresdefault.jpg', name: 'Tas 4', desc: 'Deskripsi 4', stock : 8, price: "75.000"},
    {photo: 'https://imagerouter.tokopedia.com/img/700/product-1/2016/11/19/10987228/10987228_2a47dcef-df33-4bad-b3a8-cccaf8819dd2.jpg', name: 'Tas 5', desc: 'Deskripsi 5', stock : 1, price: "147.000"},
    {photo: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/5/31/16274ff3-26f2-43bd-bf10-601e838820da.jpg', name: 'Tas 6', desc: 'Deskripsi 6', stock : 14, price: "125.000"}
  ];

const ProdukKategori: React.FC = () => {
    const storeCtx = useContext(StoreContext);

    const addCartHandler = (id: string) => {
        storeCtx.addCart(id);
      }

      const history = useHistory();

    const selectProductHandler = async(id: string) => {
        storeCtx.selectProduct(id);
        await history.push(`/product`);
    }

    //   console.log(storeCtx);
    return (
        <IonGrid>
            {storeCtx.categories.map(data => (
            <IonCard className="pbcCard" onClick={selectProductHandler.bind(null,data.id)}>
                        <IonRow>
                        <IonCol size="6">
                        <IonCardContent>
                            <IonImg src={data.photo} className="pbcPhoto"></IonImg>                          
                        </IonCardContent>
                        </IonCol>
                        <IonCol size="6"> 
                            <div className="midV">
                            <IonLabel>
                            <IonText color="dark" className="itemName">
                            {data.name}
                            </IonText>
                            <p className="itemDesc">{data.name} </p>  
                            <p className="itemStock">Stock : {data.stock}</p>
                            <IonText color="dark" className="hargaProduk">
                            Rp {data.price}
                            </IonText> 
                            </IonLabel>
                            </div>                     
                        </IonCol>
                        </IonRow>
        </IonCard>
        ))}
    </IonGrid>
    )
}

export default ProdukKategori;