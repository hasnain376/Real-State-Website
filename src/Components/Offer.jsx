import firstImage from "../assets/work-1.jpg.webp";
import secondImage from "../assets/work-2.jpg.webp";
import thirdImage from "../assets/work-3.jpg.webp";
import "./Offer.css";
import linkIcon from "../assets/link-alt-regular-24.png";

const Offer = () => {
  return (
    <>
      <center>
        <h6 className="tag-heading">what we offer</h6>
      </center>
      <center>
        <h1>Exclusive offer for you</h1>
      </center>
      <div className="offer-container">
        <div className="first-container">
          <img src={firstImage} />
          <div className="first-container-text">
            <div className="price-tag">
              <strike>800,000</strike>
              <span>
                $3,050/<span>mo</span>{" "}
              </span>
            </div>
            <div className="properties-tag">
              <div className="details">
                <span>
                  <box-icon name="bed"></box-icon>
                  <span>3</span>
                </span>
                <span>
                  <box-icon name="bath"></box-icon>
                  <span>2</span>
                </span>
                <span>
                  <box-icon name="buildings"></box-icon>
                  <span>1,878 sqft</span>
                </span>
              </div>
              <p>the blue sky home</p>
              <span className="sub-tag">oakland</span>
            </div>
            <span className="link-icon">
              <img src={linkIcon}/>
            </span>
          </div>
        </div>
        <div className="second-container">
          <img src={secondImage} />
          <div className="second-container-text">
            <div className="price-tag">
              <strike>800,000</strike>
              <span>
                $3,050/<span>mo</span>{" "}
              </span>
            </div>
            <div className="properties-tag">
              <div className="details">
                <span>
                  <box-icon name="bed"></box-icon>
                  <span>3</span>
                </span>
                <span>
                  <box-icon name="bath"></box-icon>
                  <span>2</span>
                </span>
                <span>
                  <box-icon name="buildings"></box-icon>
                  <span>1,878 sqft</span>
                </span>
              </div>
              <p>the blue sky home</p>
              <span className="sub-tag">oakland</span>
            </div>
            <span className="link-icon">
            <img src={linkIcon}/>
            </span>
          </div>
        </div>
        <div className="third-container">
          <img src={thirdImage} />
          <div className="third-container-text">
            <div className="price-tag">
              <strike>800,000</strike>
              <span>
                $3,050/<span>mo</span>{" "}
              </span>
            </div>
            <div className="properties-tag">
              <div className="details">
                <span>
                  <box-icon name="bed"></box-icon>
                  <span>3</span>
                </span>
                <span>
                  <box-icon name="bath"></box-icon>
                  <span>2</span>
                </span>
                <span>
                  <box-icon name="buildings"></box-icon>
                  <span>1,878 sqft</span>
                </span>
              </div>

              <p>the blue sky home</p>
              <span className="sub-tag">oakland</span>
            </div>
            <span className="link-icon">
            <img src={linkIcon}/>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Offer;
