import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Employees: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3500/getEmployees')
      .then(Employees => Employees.json())
      .then(_employees => {
        console.log(_employees)
        this.setState({
          Employees: _employees
        })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Sogeti Employee Directory</h1>
        <div className="container">
          <div className="row">
            {this.state.Employees.map((employee, index) => {
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
}

export default App;
