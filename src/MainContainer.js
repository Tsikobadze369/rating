import "./MainContainer.css";
import Card from "./Card";
import star from "./icon/Path.png";
import SecondCard from "./SecondCard";
import img from "./icon/Online payment_Two Color(1) 2.png";

export default function MainContainer() {
  return (
    <div className="MainContainer">
      <Card />
      <SecondCard />
    </div>
  );
}
