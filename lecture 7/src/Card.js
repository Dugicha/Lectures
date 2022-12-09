import React from "react";


export default class Forma extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.ageChange = this.ageChange.bind(this);
    this.countryChange = this.countryChange.bind(this);

    this.state = {
      FirstName: "",
      LastName: "",
      Age: "",
      Country: "",
      show: false,
      offShow: true,
      massive: [],
      bow: true,
    };
  }

  // divShow() {
  //   this.setState({
  //     bow: false,
  //   })
  // }

  clearInputs() {
    this.setState({
      FirstName: "",
      LastName: "",
      Age: "",
      Country: "",
    });
  }

  setShow(e) {
    this.setState({
      show: e,
    });
  }

  submitForm(e) {
    this.setShow(true);
    this.clearInputs();

    let { massive, FirstName, LastName, Age, Country, bow } = this.state;
    massive.push({
      FirstName: FirstName,
      LastName: LastName,
      Age: Age,
      Country: Country,
      bow: bow,
    });
  }

   removeCard = card => {
    const newCards = this.state.massive.filter(el => el !== card);
    this.setState( {massive: newCards} )
    
  }


  nameChange(e) {
    this.setState({
      FirstName: e.target.value,
    });
  }

  lastNameChange(e) {
    this.setState({
      LastName: e.target.value,
    });
  }

  ageChange(e) {
    this.setState({
      Age: e.target.value,
    });
  }
  countryChange(e) {
    this.setState({
      Country: e.target.value,
    });
  }
  // deleteValue() {
  //   this.setState({
  //     massive: 
  //   });
  // }

  
 



  render() {
    return (
      <div>
        <div>
          <h2>FirstName: </h2>
          <input
            type="text"
            value={this.state.FirstName}
            onChange={this.nameChange}
          ></input>
          <h2>Lastname:</h2>
          <input
            type="text"
            value={this.state.LastName}
            onChange={this.lastNameChange}
          ></input>
          <h2>Age:</h2>
          <input
            type="text"
            value={this.state.Age}
            onChange={this.ageChange}
          ></input>
          <h2>Country:</h2>
          <input
            type="text"
            value={this.state.Country}
            onChange={this.countryChange}
          ></input>
          <br></br>
          <button onClick={this.submitForm}>submit</button>
        </div>
        {this.state.show &&
          this.state.massive.map((item, index) => {
            return (
              <div key={index}>
                {this.state.bow &&<div>
                <h1>
                  name:{item.FirstName}
                  {item.LastName}
                </h1>
                <h2>Age:{item.Age}</h2>
                <h2>Country:{item.Country}</h2>
                <button
                
                  onClick={() => {
                    this.setState({
                      show: false
                    });
                  }}
                >
                  Delete
                </button>
                </div>}
              </div>
            );
          })}
      </div>
    );
  }
}

// const Test = (props) => {
//     const handleRemove = e => {
//       e.preventDefault();
//       props.removeCard( props.card);
//     }
//     return(
//         <form>
//         <button value="remove" onCLick={handleRemove}>remove</button>
//         </form>
//     )
//   }