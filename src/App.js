import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props){
	super(props);
	this.state = {
		location:'',
		data: {}
	};
};

changeLocation = (event) => {
	this.setState({
		location: event.target.value
	});
};

fetchData = (event) => {
	event.preventDefault();
	const api_key = '6367a560306995782fc78510509f0373';
	var location = this.state.location;
	const url = 'http:' + '/' + '/api.openweathermap.org/data/2.5/forecast?q='+ location + '&APPID=' + api_key +'&units=metric';
	fetch(url)
	.then(response => response.json())
	.then(data => this.setState({data: data  }))
	.catch(e => console.log('error', e));

};
  render() {
	var temperature = "temperature in celsius";
	if(this.state.data.list) {
		temperature = this.state.data.list[0].main.temp + " deg celsius";
	//data returned is list array. check response examples on website
	}
    return (
      <div>
	<h1> Weather report </h1>
	<form onSubmit={this.fetchData}>
		<input type="text" placeholder={"Enter city"}
		value={this.state.Location}
		onChange={this.changeLocation}
		/>
	</form>
	<p className="wrapper">
		<span className="temp"> {temperature} </span>
	</p>
     </div>
    );
  }
}

export default App;
