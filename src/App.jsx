import { useState } from "react";
import "./App.css";

function App() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState(0);
  const [error, setError] = useState("");

  const handleOnConvertClick = () => {
    if (binary.match(/^[0-1]+$/g) === null) {
      setError("Enter either 0 or 1");
      return;
    }

    setError("");

    const reversedBinary = binary.split("").map(Number).reverse();

    const result = reversedBinary.reduce(
      (accumulator, currentValue, i) =>
        accumulator + currentValue * Math.pow(2, i)
    );

    setDecimal(result);
  };

  const handleOnChange = (e) => {
    setBinary(e.target.value);
  };

  return (
    <div className="wrapper">
      <h1 className="title">Binary to decimal converter</h1>
      <div className="user-enter-wrapper">
        {error && <span className="error">{error}</span>}
        <div className="users-enter">
          <input
            type="text"
            className="binary-number"
            placeholder="Enter a binary number"
            value={binary}
            onChange={handleOnChange}
            min={0}
            max={1}
            maxLength={8}
          />
          <button
            className="button"
            onClick={() => handleOnConvertClick()}
            disabled={!binary.length}
          >
            Convert
          </button>
        </div>
      </div>
      <span className="decimal-number">{decimal}</span>
    </div>
  );
}

export default App;
