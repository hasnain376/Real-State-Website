import "./HowItWork.css";

const HowItWrok = () => {
  const paraText = {
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  };
  return (
    <>
      <div className="How-it-work-container">
        <div className="text-container">
          <div className="heading-container">
            <h6>work flow</h6>
            <h1>how it work</h1>
          </div>
          <div className="points-container">
            <div>
              <div>
                <h1 className="number">01</h1>
                <h1 className="subHeading">evaluate property</h1>
                <p>{paraText.text}</p>
              </div>
              <div>
                <h1 className="number">02</h1>
                <h1 className="subHeading">meet your agent</h1>
                <p>{paraText.text}</p>
              </div>
            </div>
            <div>
              <div>
                <h1 className="number">03</h1>
                <h1 className="subHeading">close the deal</h1>
                <p>{paraText.text}</p>
              </div>
              <div>
                <h1 className="number">04</h1>
                <h1 className="subHeading">have your property</h1>
                <p>{paraText.text}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="image-container"></div>
      </div>
    </>
  );
};

export default HowItWrok;
