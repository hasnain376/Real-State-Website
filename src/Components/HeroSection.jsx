import HouseImage from ".././assets/hero.jpg";
import "boxicons";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={HouseImage} alt="image"  />
      <div className="hero-section-content" >
        <h1 className="heading-1">The Simplest</h1>
        <h1 className="heading-2">
          Way to Find Property
        </h1>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts
        </p>
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search location"
            
          />
          <div id="search-icon">
            <box-icon name="search-alt-2" color="#ffffff"></box-icon>
          </div>
        </div>
      </div>
      <div className="hero-arrow-animation"><box-icon name='down-arrow-alt' color='#ffffff' id='arrow'></box-icon></div>
    </div>
  );
};

export default HeroSection;
