import "./Home.css";
import Product from "../Product/Product";
import Book from "../Book/Book";
import Deal from "../Deal/Deal";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Home = () => {
  return (
    <div className="home">
      <img
        src="https://m.media-amazon.com/images/I/712py4WAJtL._SX750_.jpg"
        alt="banner"
        className="home__img"
      />
      
      {/* Deals row */}
      <div className="deals__row">
        <div className="deal__card">
          <h3>Keep shopping for</h3>
          <div className="deals">
            <Deal
              title="Harry Potter and the Philosopher's stone"
              image="https://m.media-amazon.com/images/I/81m1s4wIPML._AC_SY135_.jpg"
            />
            <Deal
              title="Harry Potter and the chamber of secrets"
              image="https://m.media-amazon.com/images/I/91HHqVTAJQL._AC_SY135_.jpg"
            />
            <Deal
              title="harry potter and the philosopher's stone"
              image="https://m.media-amazon.com/images/I/51BhT7Ey+hL._AC_SY135_.jpg"
            />
            <Deal
              title="Harry Potter Box Set: The Complete Collection (Set of 7 Volumes)"
              image="https://m.media-amazon.com/images/I/81zqe4fNdlL._AC_SY135_.jpg"
            />
          </div>
        </div>
        <div className="deal__card">
          <h3>Pick up where you left off</h3>
          <div className="deals">
            <Deal
              title="Honor 2 BT Watch 2 with Battery- Charcoal Black"
              image="https://m.media-amazon.com/images/I/61W4meSdVQL._SL1000_.jpg"
            />
            <Deal
              title="Philips Wiz Smart WI-Fi LED Bulb E27 10-Watt, 16 Million Colors"
              image="https://m.media-amazon.com/images/I/51VE-QMao9L._SL1166_.jpg"
            />
            <Deal
              title="Man's Search For Meaning: The classic tribute to hope from the Holocaust"
              image="https://m.media-amazon.com/images/P/1844132390.01._SCLZZZZZZZ_SX500_.jpg"
            />
            <Deal
              title="Bhumika Overseas Height-Adjustable Faux-Leather Office Study Desk Chair for Salon, Spa, Bar, Medical, Kitchen, Doctor in White Color"
              image="https://m.media-amazon.com/images/I/716EqyNfxiL._AC_SY110_.jpg"
            />
          </div>
        </div>
        <div className="deal__card">
        <h3>Upgrade your home | Amazon Brands & more</h3>
          <div className="deals">
            <Deal
              title="Smart LED TVs"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/TV_1x._SY116_CB627443840_.jpg"
            />
            <Deal
              title="Appliances"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_QC_Appliances_1X_V2_3._SY116_CB636581536_.jpg"
            />
            <Deal
              title="Furniture"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Furn_1x._SY116_CB627275939_.jpg"
            />
            <Deal
              title="Kitchen products"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Kitchen_1x._SY116_CB627276315_.jpg"
            />
          </div>
          <a href="#">Shop now</a>
        </div>
        <div className="deal__card">
        <h3>Up to 70% off | Styles for Men</h3>
          <div className="deals">
            <Deal
              title="Clothing"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"
            />
            <Deal
              title="Footwear"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"
            />
            <Deal
              title="Watches"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg"
            />
            <Deal
              title="Bags & Luggae"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg"
            />
          </div>
          <a href="#">End of season sale</a>
        </div>
      </div>


      {/* Prime Row */}
      <div className="prime__row">
        <div className="prime__card">
          <h3>Prime Video: Recommended for you</h3>
          <span>The Boys - Season 1</span>
          <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/88a0f6bf4f033bc2fe2e35d0b08b022abf3da66766580dcbc863bb4ca725a740._RI_V_TTW_.jpg" alt="" />
          <a href="#">Start watching on Prime Video</a>
        </div>
        <div className="deal__card">
        <h3>Upgrade your home | Amazon Brands & more</h3>
          <div className="deals">
            <Deal
              title="Smart LED TVs"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/TV_1x._SY116_CB627443840_.jpg"
            />
            <Deal
              title="Appliances"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_QC_Appliances_1X_V2_3._SY116_CB636581536_.jpg"
            />
            <Deal
              title="Furniture"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Furn_1x._SY116_CB627275939_.jpg"
            />
            <Deal
              title="Kitchen products"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Kitchen_1x._SY116_CB627276315_.jpg"
            />
          </div>
          <a href="#">Shop now</a>
        </div>
        <div className="deal__card">
        <h3>Upgrade your home | Amazon Brands & more</h3>
          <div className="deals">
            <Deal
              title="Smart LED TVs"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/TV_1x._SY116_CB627443840_.jpg"
            />
            <Deal
              title="Appliances"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_QC_Appliances_1X_V2_3._SY116_CB636581536_.jpg"
            />
            <Deal
              title="Furniture"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Furn_1x._SY116_CB627275939_.jpg"
            />
            <Deal
              title="Kitchen products"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Kitchen_1x._SY116_CB627276315_.jpg"
            />
          </div>
          <a href="#">Shop now</a>
        </div>
      </div>



      {/* Products Row */}
      <div className="products__row">
        <Product
          id="1"
          title="Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Space Gray"
          image="https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_SX522_.jpg"
          price={1999}
          rating={4}
        />
        <Product
          id="2"
          title="Apple Watch Series 7 [GPS 41mm] Smart Watch w/ Starlight Aluminum Case with Starlight Sport Band. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant"
          price={329}
          rating={5}
          image="https://m.media-amazon.com/images/I/71MQd0o+uHL._AC_SX522_.jpg"
        />
      </div>

      <div className="products__row">
        <Product
          id="3"
          title="Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless Setup. Bluetooth Headphones for iPhone"
          price={99}
          rating={5}
          image="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SX522_.jpg"
        />
        <Product
          id="4"
          title="Apple MagSafe Battery Pack"
          price={79.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/418SjFMB1wL._AC_SX522_.jpg"
        />
        <Product
          id="5"
          title="Apple AirPods Max Wireless Over-Ear Headphones. Active Noise Cancelling, Transparency Mode, Spatial Audio, Digital Crown for Volume Control. Bluetooth Headphones for iPhone - Silver"
          image="https://images-na.ssl-images-amazon.com/images/I/81thV7SoLZL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
          price={449}
          rating={5}
        />
      </div>


      {/* Books row */}
      <div className="books__row">
        <button className="arrow backArrow">
          <ArrowBackIosIcon />
        </button>

        <Book image="https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_SY200_.jpg" />
        <Book image="https://m.media-amazon.com/images/I/81gepf1eMqL._AC_SY200_.jpg" />
        <Book image="https://m.media-amazon.com/images/I/81DFcrQgjrL._AC_SY200_.jpg" />
        <Book image="https://m.media-amazon.com/images/I/81q1AybR-ZL._AC_UY327_FMwebp_QL65_.jpg" />
        <Book image="https://images-eu.ssl-images-amazon.com/images/I/51SkIDTd9rL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" />
        <Book image="https://m.media-amazon.com/images/P/0857197681.01._SCLZZZZZZZ_SX500_.jpg" />
        <Book image="https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._AC_SX184_.jpg" />
        <Book image="https://images-eu.ssl-images-amazon.com/images/I/51T8OXMiB5L._AC_SX184_.jpg" />
        <Book image="https://images-eu.ssl-images-amazon.com/images/I/51oHUvYzbsL._AC_SX184_.jpg,200_QL40_FMwebp_.jpg" />
        <Book image="https://m.media-amazon.com/images/I/81W0XBYU2kL._AC_UY327_FMwebp_QL65_.jpg" />
        <button className="arrow forwardArrow">
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export default Home;
