import './App.css'
import PreNavbar from './components/PreNavbar'
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Slider from './components/Slider.js'
import Offers from './components/Offers.js'
import data from "./data/data.json"
import Heading from './components/Heading.js'
import StarProduct from './components/StarProduct.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js'
import ProductReviews from './components/ProductReviewse.js'
import Videos from './components/Videos.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
import NavOptions from './components/NavOptions.js'

function App() {
  return (
  <Router>
    <PreNavbar/>
    <Navbar/>
    <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

    <Slider start={data.banner.start}/>
    <Offers offer={data.offer} />
    <Heading text="STAR PRODUCTS"s/>
    <StarProduct starProduct={data.starProduct}/>
    <Heading text="HOT ACCESSORIES"/>
    <HotAccessoriesMenu/>
    <Routes>

<Route path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}/>
<Route path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
<Route path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
<Route path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
<Route path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
  
</Routes>
<Heading text="PRODUCT REVIEW"/>
<ProductReviews productReviews={data.productReviews}/>
<Heading text="VIDEOS"/>
<Videos videos={data.videos}/>
<Heading text="IN THE PRESS"/>
<Banner banner={data.banner}/>
<Footer footer={data.footer} />
  </Router>
  
    
  );
}

export default App;
