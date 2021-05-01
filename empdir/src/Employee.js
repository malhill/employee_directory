import React, {Component} from 'react';
import './App.css';
import getEmp from './getemp.js';

class Employee extends Component {

  state = {employees: []}

  componentDidMount(){
    getEmp()
      .then( (data) => {
        console.log(data);
        this.setState({
          employees: data.data.results
        })
      })
    // const t = getEmp()
    // console.log(t);
  };

  render(){
    return (
      <>
      <div className="App">
        <h1>Hello World</h1>
        {this.state.employees.map( (data) => (
          <div>
            {data.name.first}
          </div>
        ))}
      </div> 
      </>
    );
  };
};

export default Employee;
