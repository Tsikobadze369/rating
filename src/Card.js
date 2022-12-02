import "./Card.css";
import Title from "./Title";
import IconDiv from "./IconDiv";
import Lorem from "./Lorem";
import Buttons from "./Buttons";
import Submit from "./Submit";

export default function Card() {
  return (
    <div className="Card">
      <IconDiv />
      <Title title="How did we do?" />
      <Lorem text="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!" />
      <Buttons />
      <Submit />
    </div>
  );
}
