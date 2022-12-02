import "./Buttons.css";

export default function Buttons() {
  const arr = [1, 2, 3, 4, 5];
  return arr.map((number) => {
    return (
      <button className="buttons" key={number}>
        {number}
      </button>
    );
  });
}
