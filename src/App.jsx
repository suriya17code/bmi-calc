import { useState } from "react";
import "./App.css";
import image from "./assets/OIP (2).jpg";
function App() {
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [bmi, setbmi] = useState(null);
  const [result, setresult] = useState(false);
  const [bmistatus, setbmistatus] = useState("");
 
const submit =()=>{
  //bmi formula
  if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
    const heightInMeters = height / 100; // Convert height from cm to meters
    const bmiValue = weight / (heightInMeters * heightInMeters);

    setbmi(bmiValue.toFixed(2));
    setresult(true);

    // Improved BMI categorization using switch statement for clarity
    switch (true) {
      case bmiValue < 18.5:
        setbmistatus("underweight");
        break;
      case bmiValue >= 18.5 && bmiValue < 25:
        setbmistatus("normal");
        break;
      case bmiValue >= 25 && bmiValue < 30:
        setbmistatus("overweight");
        break;
      default:
        setbmistatus("obese");
    }
  }else{
  setbmi(null)
  setresult(false)
  setbmistatus("")
  setheight("")
  setweight("")
}
}

const clear = () => {
  setresult(false)
  setbmi(null)
  setbmistatus("")
  setheight("")
   setweight("")
}

const weightinput=(e)=>{
  setweight(e.target.value)
}
const heightinput=(e)=>{
  setheight(e.target.value)
}


  return (
    <>
      <div className="container">
        <div className="first">
          <img
            src={image}
            width={250}
            height={250}
            alt="image"
            className="logo"
          />
        </div>
        <div className="content">
          <h1 className="topic">BMI CALCULATOR</h1>
          <div className="inputclass">
            <input
              type="number"
              alt="weight"
              placeholder="Enter weight here"
              onChange={weightinput}
            />
            <input
              type="number"
              className="height"
              placeholder="Enter height here"
              onChange={heightinput}
            />
          </div>
          <button className="btn green" 
          onClick={submit}
          >
            submit
          </button>
          <button className="btn red" 
          onClick={clear}
          >
            clear
          </button>
        </div>
      </div>
      {/* // result */}
      {result && (
        <div className="result">    
          <div className="cut">
            <div className="bmipoints">
              <h1>{bmi}</h1>
              <h4>{bmistatus} BMI</h4>
            </div>
            <div className="bmiscale">
              <div className={`underweight ${bmistatus === "underweight" ? "selected" : "" } `}>
                <p>underwieght</p>
                <p>Below 18.5 bmi</p>
              </div>
              <div className={`normal ${bmistatus === "normal" ? "selected" : ""}`}>
                <p>normal</p>
                <p>18.5-24.9 bmi</p>
              </div>
              <div className={`overweight ${bmistatus === "overweight" ? "selected" : ""}`}>
                <p>overweight</p>
                 <p>25-29.9 bmi</p>
              </div>
              <div className={`obese ${bmistatus === "obese" ? "selected" : ""}`}>
               <p>obese</p>
               <p>Above 40 bmi</p>
             </div>
            </div>
          </div>
        </div>
      )}
      <hr></hr>
      <p className="footnote">
        The body mass index (BMI) calculator estimates the amount of body fat a
        person has in relation  height, and weight.
      </p>
    </>
  );
}

export default App;
