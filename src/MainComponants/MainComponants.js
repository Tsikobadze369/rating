import "./MainComponants.css";
import Logo from "../icon/Path.png";

export default function MainComponants() {
  return (
    <div className="Container">
      <div className="LogoDiv">
        <img src={Logo} className="Logo" />
      </div>
      <h1 className="headerText">How Did we do?</h1>
      <h3 className="secondText">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </h3>
      <div className="containerForRateNumbers">
        <div className="rate1 oval">1</div>
        <div className="rate2 oval">2</div>
        <div className="rate3 oval">3</div>
        <div className="rate4 oval">4</div>
        <div className="rate5 oval">5</div>
      </div>
      <button className="submit">SUBMIT</button>
    </div>
  );
}
