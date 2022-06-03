import { IonAvatar, IonButton, IonCard, IonCardContent, IonCol, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRow, IonText } from '@ionic/react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import './Card.css';
import StoreContext from './data/store-context';
import React, {useState} from 'react'


// export const CARD_DATA = [
//   {photo: 'https://padiumkm.id/public/products/47619/599812/img_20220329_11.1648526512.jpg', desc: 'Tas Anyaman Sedotan'},
//   {photo: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//91/MTA-10338192/no_brand_kapal_otok_otok_mainan_perahu_jadul_90an_full05_n6i5rfbr.jpg', desc: 'Kapal TokTok Minyak'},
//   {photo: 'http://sc04.alicdn.com/kf/H4b5eb15bbca64f3e838a7471246936f8n.jpg', desc: 'Kursi Rotan Single'},
//   {photo: 'http://3.bp.blogspot.com/-XqUAtFoPzQc/VhNBcQYw6NI/AAAAAAAAABU/1OVi9gCTugA/s1600/anyam%2Bbambu.JPG', desc: 'Tas Anyaman Kupu-Kupu'},
//   {photo: 'https://padiumkm.id/public/products/47619/599812/img_20220329_11.1648526512.jpg', desc: 'Produk 5'},
//   {photo: 'https://padiumkm.id/public/products/47619/599812/img_20220329_11.1648526512.jpg', desc: 'Produk 6'},
//   {photo: 'https://padiumkm.id/public/products/47619/599812/img_20220329_11.1648526512.jpg', desc: 'Produk 7'},
//   {photo: 'https://padiumkm.id/public/products/47619/599812/img_20220329_11.1648526512.jpg', desc: 'Produk 8'},
// ];

interface ContainerProps { }
const Card: React.FC<ContainerProps> = () => {
  const storeCtx = useContext(StoreContext);
  const [students, setStudents] = useState<Array<any>>([]);

  const history = useHistory();

        const selectProductHandler = async(id: string) => {
            storeCtx.selectProduct(id);
            await history.push(`/product`);
        }
  return (
    
    <IonRow>
      {storeCtx.products.map(data => (
      <IonCol size-xs="6">
        <IonCard className='cards'>
            <IonCardContent>
              <IonImg src={data.photo} className="categoryImage"/>
              <IonText className='deskH'>{data.name}</IonText>
              <IonButton id={data.id} fill='clear' className='btnSel' onClick={selectProductHandler.bind(null,data.id)}>Selengkapnya</IonButton>
          </IonCardContent>
        </IonCard>
      </IonCol>
      ))}
        {students.map(student => {
                    <IonItem key={student.namaproduk}>
                        <IonAvatar>
                            <img src={student.fotoUrl} />
                        </IonAvatar>
                        <IonLabel>
                            {student.namaproduk}
                            {student.harga}
                            {student.stok}
                        </IonLabel>
                    </IonItem>
                    console.log(student.namaproduk)
                })}
  </IonRow>
  
  );
};

export default Card;
