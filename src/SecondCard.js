import "./SecondCard.css";
import img from "./icon/Online payment_Two Color(1) 2.png";
import SelectedText from "./SelectedText";

export default function SecondCard(props) {
  return (
    <div className="SecondCard">
      {props.thank}
      <div className="imgDiv">
        <img src={img} alt="" />
      </div>
      <SelectedText />
    </div>
  );
}
