import React from 'react';
import './App.css';
import covid19ImpactEstimator from './estimator';

function App() {
  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
        region: {
          name: "Africa",
          avgAge: 19.7,
          avgDailyIncomeInUSD: 5,
          avgDailyIncomePopulation: 0.71
        },
        periodType: e.target[4].value,
        timeToElapse: e.target[1].value,
        reportedCases: e.target[2].value,
        population: e.target[0].value,
        totalHospitalBeds: e.target[3].value
    };
    console.log(covid19ImpactEstimator(data));
  };
  return (
    <div className="container">
      <h1>Covid-<span>19</span> Estimator</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="ui form">
        <div className="field">
          <label> Population : </label>
          <input
            type="number"
            name="population"
            title="Population"
            placeholder="Enter population number"
            data-population
            required
          />
        </div>
        <div className="field">
          <label>Time to elapse : </label>
          <input
            type="number"
            name="timeToElapse"
            title="Time to elapse"
            placeholder="Enter time to elapse"
            data-time-to-elapse
            required
          />
        </div>
        <div className="field">
          <label>Reported cases : </label>
          <input
            type="number"
            name="reported Cases"
            title="Reported cases"
            placeholder="Enter Repoted cases"
            data-reported-cases
            required
          />
        </div>
        <div className="field">
          <label>Total hospital beds : </label>
          <input
            type="number"
            name="totalHospitalBeds"
            title="
            Total hospital beds"
            placeholder="Enter total hospital beds"
            data-total-hospital-beds
            required
          />
        </div>
        <div className="field">
          <label>Choise period type : </label>
          <select name="periodType" data-period-type title="Period type" >
            <option value="days">days</option>
            <option value="weeks">weeks</option>
            <option value="months">months</option>
          </select>
        </div>
        <br />
        <div>
          <button
            type="submit"
            className="ui button positive"
            data-go-estimate
          >
            Estimate
          </button>
        </div>
      </form>
      <br/>
      <div>
        <h5>Build by Jordan Kagmeni</h5> 
        <h5>Inspired by facebook DevC & Andela</h5>
      </div>
    </div>
  );
}

export default App;
