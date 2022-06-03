import { IonContent, IonImg, IonSlide, IonSlides } from '@ionic/react';
import './ExploreContainer.css';

const slideOpts = {
  initialSlide: 0,
  speed: 200,
  effect: 'slide',
  autoplay: true
};

const item = [
  'https://cdn.pixabay.com/photo/2015/07/31/15/02/knit-869221_960_720.jpg',
  'https://cdn.pixabay.com/photo/2019/10/20/16/57/loom-4564223_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/08/23/13/12/knitting-1614283_960_720.jpg',
  'https://cdn.pixabay.com/photo/2020/08/14/14/49/women-5488183_960_720.jpg'
];

interface ContainerProps { }
const Slide: React.FC<ContainerProps> = () => {
  return (
      <IonSlides pager={true} options={slideOpts}>
        {item.map((img => (
          <IonSlide>
            <IonImg src={img} className='img2' /> 
          </IonSlide>
        )))}
        
      </IonSlides>
  );
};

export default Slide;
