import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [BMI, setBMI] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(height, weight);
    if (height !== "" && weight !== "") {
      const heightNew = Number(height) / 100;
      const weightNew = Number(weight);
      const totalBMI = calcBMI(heightNew, weightNew);
      setBMI(totalBMI);
    }
  }
  function calcBMI(height, weight) {
    return (weight / height ** 2).toFixed(1);
  }

  return (
    <div className="App">
      <h1>BMI CALCULATOR</h1>

      <div className="bmi-calculator-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="height">Height</label>
          <input
            type="number"
            placeholder="height in cm"
            onChange={(event) => setHeight(event.target.value)}
            value={height}
            required
          />
          <label htmlFor="Weight">Weight</label>
          <input
            type="number"
            placeholder="weight in kilogram
            "
            onChange={(event) => setWeight(event.target.value)}
            value={weight}
            required
          />
          <button type="submit">check</button>
          <div className="display-container">
            <span>BMI: {BMI}</span>
          </div>
        </form>

        <div className="BMI-information-container">
          <h2>BMI Chart</h2>
          <p>
            * BMI does not distinguish between men and women. It’s a simple
            formula that uses height and weight to calculate a number meant to
            represent a person’s body fat levels.
          </p>
          <div className="main-BMI-chart-container">
            <div className="bmi-row BMI-range-classification-container ">
              <div className="bmi-column">BMI Range</div>
              <div className="bmi-column">classification</div>
            </div>
            <div className="bmi-row severe-underweight-container">
              <div>less than 16.5</div>
              <div>severe underweight</div>
            </div>
            <div className="bmi-row underweight-container">
              <div>less than 18.5</div>
              <div>underweight</div>
            </div>
            <div className="bmi-row normal-weight-container">
              <div>18.5-24.9</div>
              <div>normal weight</div>
            </div>
            <div className="bmi-row overweight-container">
              <div>25.0–29.9</div>
              <div>overweight</div>
            </div>
            <div className="bmi-row obesity-class-1-container">
              <div>30.0–34.9</div> <div>obesity class I</div>
            </div>
            <div className="bmi-row obesity-class-2-container">
              <div>35.0-39.9</div> <div>obesity class II</div>
            </div>
            <div className="bmi-row obesity-class-3-container">
              <div>40 or greater</div>
              <div>obesity class III</div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        **This BMI calculator is for informational purposes only. Consult a
        healthcare provider before making health decisions. BMI is an indirect
        assessment of health risk and may not be accurate because it cannot
        determine the proportion or distribution of body fat.**
      </footer>
    </div>
  );
}

export default App;
