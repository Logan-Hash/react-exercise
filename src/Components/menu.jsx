import React, { Component } from 'react'

class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			Contact : "Contact",
			Home : "Home",
			About : "About",
			CompanyName: "JJX"
		}
	}
	changeMenu = () => {
		this.setState({
			Home: "Hello",
			Contact: "Call me",
			About: "porfolio",
			CompanyName: "FuckOff"
		})
	}
	render() {
		return(
			<div className="container">
				<div className="company-name">
					<h3>{ this.state.CompanyName }</h3>
				</div>
				<ul>
					<li> { this.state.Home } </li>
					<li> { this.state.About } </li>
					<li> { this.state.Contact } </li>

				</ul>
				<button onClick={this.changeMenu} >Click me</button>
			</div>
		)
	}

}


export default Menu