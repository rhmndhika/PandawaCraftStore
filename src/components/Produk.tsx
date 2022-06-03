import React, {useState, useRef, useEffect} from 'react';
import { IonButton, IonIcon, IonCol, IonInput, IonGrid, IonRow, IonItem, IonText, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonCard, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonList, IonAvatar, IonLabel } from '@ionic/react';
import addImage from '../assets/addImage.png';
import "./Produk.css";
import { chevronDownSharp } from 'ionicons/icons';
import {collection, addDoc, getDocs, doc} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { async } from '@firebase/util';
import { getDownloadURL, ref, uploadBytes, getStorage } from "firebase/storage";

const Produk: React.FC = () => {
  

    const [namaproduk, setNamaProduk] = useState<string>('');
    const [deskripsi, setDeskripsi] = useState<string>('');
    const [stok, setStok] = useState<string>('');
    const [harga, setHarga] = useState<string>('');
    const [kategori, setKategori] = useState<string>('');

    const db = getFirestore();
    const [selectedFile, setSelectedFile] = useState<File>();
    const [fileName, setFileName] = useState('');
    const storage = getStorage();
    const storageRef = ref(storage, 'some-child');
    const [students, setStudents] = useState<Array<any>>([]);

    const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(event.target!.files![0]);
        setFileName(event.target!.files![0].name);
      };

      const insertHandler = async() => {
        const storageRef = ref(storage, fileName);
        uploadBytes(storageRef, selectedFile as Blob).then((snapshot) => {
          console.log('upload file succes');
          getDownloadURL(ref(storage, fileName)).then((url)=>{
            addData(url);
          })
        })
      };

      const addData = async(url: string) =>{
        try{
            const docRef = await addDoc(collection(db, "students"),{
                namaproduk: namaproduk,
                deskripsi: deskripsi,
                stok: stok,
                harga: harga,
                kategori,
                foto: fileName,
                fotoUrl: url
            });
            console.log("Document written with ID : ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    useEffect(() => {
        async function getData() {
          const querySnapshot = await getDocs(collection(db, "students"));
          console.log('querySnapshot:', querySnapshot);
          setStudents(querySnapshot.docs.map((doc => ({...doc.data(), id:doc.id}))));
    
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            console.log('doc', doc);
          });
        }
        getData();
      },[])

  return (
      <IonContent>
          <IonCard className="wrapper">
            <IonCardContent>
                <IonCard className="cardImage">
                    <img src={addImage} />
                    <input type="file" onChange={fileChangeHandler} />
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
                    <IonInput className="inputProduk" value={namaproduk} onIonChange={e => setNamaProduk(e.detail.value!)}></IonInput>
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
                    <IonInput className="inputProduk" value={deskripsi} onIonChange={e => setDeskripsi(e.detail.value!)}></IonInput>
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
                    <IonInput className="inputProduk" value={stok} onIonChange={e => setStok(e.detail.value!)}></IonInput>
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
                    <IonInput className="inputProduk" value={harga} onIonChange={e => setHarga(e.detail.value!)}></IonInput>
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
                    <IonInput className="inputProduk" value={kategori} onIonChange={e => setKategori(e.detail.value!)}>
                    <IonIcon  className="iconDown" icon={chevronDownSharp} />
                    </IonInput>
                    </IonCol>
                </IonRow>
            </IonGrid>
            </IonItem>
            <IonButton onClick={insertHandler} className="buttonUpdate" expand="block" color="new">
                Update Produk
            </IonButton>
            <IonList>
            </IonList>
            </IonCardContent>
            </IonCard>
    </IonContent>
  );
};

export default Produk;

