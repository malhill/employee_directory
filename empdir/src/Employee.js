import React, { Component } from 'react';
import './Employee.css';
import getEmp from './getemp.js';
import Search from './components/Search.js'
import Category from './components/Category.js'

class Employee extends Component {

  state = { employees: [], search: ''}

  componentDidMount() {
    getEmp()
      .then((data) => {
        // console.log(data);
        this.setState({
          employees: data.data.results
        })
      })
  };

  //part of react library
  componentDidUpdate() {
    // console.log(this.state.search);
  }

  handleInputChange = event => {
    const value = event.target.value;

    this.setState({
      search: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // console.log('button clicked', this.state.search);

    const employees = this.state.employees.filter((data) => {
      //Checking if typed input matches first name from array of obj
      if (this.state.search === data.name.first) {
        return true
      } 

      //Checking if typed input matches last name from array of obj
      if (this.state.search === data.name.last) {
        return true
      }

      //Checking if typed input matches email from array of obj
      if (this.state.search === data.email) {
        return true
      }
    });

    console.log(employees);
    this.setState({employees})
  };

  handleCategoryFilter = event => {
    
    const selected = event.target.innerText
    const employees = this.state.employees.sort((a,b) => {
      // if the user selects Name
      if(selected === 'Name'){
        if(a.name.first > b.name.first){
          return 1;
        }
        return -1;
      // same set up for Email and Age
      } else if(selected === 'Email'){
        if(a.email > b.email){
          return 1;
        }
        return -1;
      } else if(selected === 'Age'){
        if(a.age > b.age){
          return 1;
        }
        return -1;
      }
    })

    // console.log(event.target.innerText);
    // console.log(employees)
    this.setState({employees});

  } 

  render() {
    return (
      <>

        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>


              <h1 className='text-center'>Hello World</h1>
              <div>
              <Search className='col-sm-6 col-md-6' handleinput={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
              <Category className='col-sm-6 col-md-6' handleinput={this.handleCategoryFilter}/>
              </div>
            </div>

            {this.state.employees.map((data) => (

              <div className='col-sm-12 col-md-4'>
                <div className='card'>
                  <ul>
                    <p>{data.picture.small}</p>

                    <p><strong>Name:</strong>&nbsp;&nbsp;{data.name.title}.{data.name.first}&nbsp;&nbsp;{data.name.last}</p>

                    <p><strong>Email:</strong>&nbsp;&nbsp;{data.email}</p>

                    <p><strong>Age:</strong>&nbsp;&nbsp;{data.dob.age}</p>

                    <p><strong>Nationality:</strong>&nbsp;&nbsp;{data.nat}</p>

                  </ul>
                </div>
              </div>

            ))}

          </div>
        </div>

      </>
    );
  };
};

export default Employee;
