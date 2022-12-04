import "./SecondContainer.css";
import ThankYouIcon from "../icon/ThankYou.png";

export default function SecondContainer() {
  return (
    <div className="secondContainer">
      <img src={ThankYouIcon} className="thankYou" />
      <div className="showSelectedBox">
        <p className="showSelectedText">You selected 4 out of 5</p>
      </div>
      <h1 className="ThankYouText">Thank you!</h1>
      <h3 className="thankYouLongText">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </h3>
    </div>
  );
}
