import React, { useState } from "react";
import "./App.css";
import image from "./assets/OIP (2).jpg";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [result, setResult] = useState(false);
  const [bmiStatus, setBmiStatus] = useState("");

  const calculateBMI = () => {
    if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      setResult(true);
      switch (true) {
        case bmiValue < 18.5:
          setBmiStatus("underweight");
          break;
        case bmiValue >= 18.5 && bmiValue < 25:
          setBmiStatus("normal");
          break;
        case bmiValue >= 25 && bmiValue < 30:
          setBmiStatus("overweight");
          break;
        default:
          setBmiStatus("obese");
      }
    } else {
      setBmi(null);
      setResult(false);
      setBmiStatus("");
    }
  };

  const clearForm = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setResult(false);
    setBmiStatus("");
  };

  return (
    <div className="container">
      <div className="first">
        <img src={image} width={250} height={250} alt="image" className="logo" />
      </div>
      <div className="content">
        <h1 className="topic">BMI CALCULATOR</h1>
        <div className="inputclass">
          <input
            type="number"
            value={weight}
            placeholder="Enter weight here"
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="number"
            value={height}
            placeholder="Enter height here"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button className="btn green" onClick={calculateBMI}>Submit</button>
        <button className="btn red" onClick={clearForm}>Clear</button>
      </div>
      {result && (
        <div className="result">
          <div className="cut">
            <div className="bmipoints">
              <h1>{bmi}</h1>
              <h4>{bmiStatus} BMI</h4>
            </div>
            <div className="bmiscale">
              <div className={`underweight ${bmiStatus === "underweight" ? "selected" : ""}`}>
                <p>underweight</p>
                <p>Below 18.5 BMI</p>
              </div>
              <div className={`normal ${bmiStatus === "normal" ? "selected" : ""}`}>
                <p>normal</p>
                <p>18.5-24.9 BMI</p>
              </div>
              <div className={`overweight ${bmiStatus === "overweight" ? "selected" : ""}`}>
                <p>overweight</p>
                <p>25-29.9 BMI</p>
              </div>
              <div className={`obese ${bmiStatus === "obese" ? "selected" : ""}`}>
                <p>obese</p>
                <p>Above 30 BMI</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <hr />
      <p className="footnote">
        The body mass index (BMI) calculator estimates the amount of body fat a
        person has in relation to height and weight.
      </p>
    </div>
  );
}

export default App;
