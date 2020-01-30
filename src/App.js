import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [employees, setEmployees] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:3500/getEmployees')
      .then(Employees => Employees.json())
      .then(_employees => {
        console.log(_employees)
        setEmployees(_employees)
      })
      .catch(err => console.err(err))
  });

  return (
    <div className="App">
      <h1>Sogeti Employee Directory</h1>
      <div className="container">
        <div className="row">
          {employees.map((employee, index) => {
            return (
              <div class="card" style={{ width: '18rem' }} key={index}>
                <img src={employee.imageUrl} style={{ padding: '10px' }} class="card-img-top"></img>
                <div className="card-body">
                  <h3 className="card-body">{employee.name}</h3>
                  <p className="card-text">{employee.location}</p>
                  <p className="card-text">{employee.cellNumber}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App;
