import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { home, search, list, cart, map, calendar, personCircle, informationCircle} from 'ionicons/icons';
import Search from './pages/Search';
import Category from './pages/Category';
import Cart from './pages/Cart';
import ProductDesc from './pages/ProductDesc';
import SuccessPage from './pages/SuccessPage';
import ProductByCategory from './pages/ProductByCategory';
import HomeSeller from './pages/HomeSeller';
import ReviewPage from './pages/ReviewPage';
import Review from './components/Review';
import ProductSeller from './pages/ProductSeller';
import HalLogin from './pages/HalLogin';
import LoginCustomer from './pages/LoginCustomer';
import LoginSeller from './pages/LoginSeller';
import RegisterCustomer from './pages/RegisterCustomer';
import RegisterSeller from './pages/RegisterSeller';
import EditProduk from './pages/EditProduk';
import TambahProduk from './pages/TambahProduk';
import AuthContextProvider from './context/AuthContext';
import StoreContextProvider from './components/data/StoreContextProvider';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <StoreContextProvider>
        <AuthContextProvider>

        <IonTabs className='tab'>
            <IonRouterOutlet>
              <Route exact path="/home" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/category" component={Category} />
              <Route path="/cart" component={Cart} />
              <Route path="/product" component={ProductDesc} />
              <Route path="/successpage" component={SuccessPage} />
              <Route path="/productbycategory" component={ProductByCategory} />
              <Route path="/review" component={ReviewPage} />
              <Redirect exact from='/' to="/halamanlogin" />
            </IonRouterOutlet>
            <IonTabBar slot='bottom'>
              <IonTabButton tab='home' href='/home'>
                <IonIcon icon={home} />
              </IonTabButton>
              <IonTabButton tab='search' href='/search'>
                <IonIcon icon={search} />
              </IonTabButton>
              <IonTabButton tab='category' href='/category'>
                <IonIcon icon={list} />
              </IonTabButton>
              <IonTabButton tab='cart' href='/cart'>
                <IonIcon icon={cart} />
              </IonTabButton>
            </IonTabBar>
        </IonTabs>
        <Route path="/halamanlogin" component={HalLogin} />
        <Route path="/logincustomer" component={LoginCustomer} />
        <Route path="/loginseller" component={LoginSeller} />
        <Route path="/registercustomer" component={RegisterCustomer} />
        <Route path="/registerseller" component={RegisterSeller} />
        <Route path="/editproduk" component={EditProduk} />
        <Route path="/tambahproduk" component={TambahProduk} />
        <Route path="/homeseller" component={HomeSeller} />
        <Route path="/productseller" component={ProductSeller} />
        </AuthContextProvider>
      </StoreContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
