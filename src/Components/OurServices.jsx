import "./OurServices.css";
import money from ".././assets/money.png";
import wallet from ".././assets/wallet.png";
import file from ".././assets/file.png";
import locked from ".././assets/locked.png";

const OurServices = () => {
  let ourServices = {
    noDownpayment: " No Downpayment",
    allCashOffer: "All Cash Offer",
    expertInYourCorner: " Expert In Your Corner",
    lockedInPricing: "Locked In Pricing",
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  };

  return (
    <>
      <center>
        <h6>OUR SERVICES</h6>
      </center>
      <center>
        <h1>The smartest way to buy a home</h1>
      </center>
      <div className="ourServices-container">
        <div>
          <center><img src={money} /></center>
          <h2>{ourServices.noDownpayment}</h2>
          <p>{ourServices.text}</p>
        </div>
        <div>
          <center><img src={wallet} /></center>
          <h2>{ourServices.allCashOffer}</h2>
          <p>{ourServices.text}</p>
        </div>
        <div>
          <center><img src={file} /></center>
          <h2>{ourServices.expertInYourCorner}</h2>
          <p>{ourServices.text}</p>
        </div>
        <div>
          <center><img src={locked} /></center>
          <h2>{ourServices.lockedInPricing}</h2>
          <p>{ourServices.text}</p>
        </div>
      </div>
    </>
  );
};

export default OurServices;
