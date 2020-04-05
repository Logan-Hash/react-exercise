import React from "react";
import Validation from "./validation/Validation";


class App extends React.Component {

	state = {
		userInput: ''
	}

 	inputEventHandler = (event) => {
		this.setState({userInput: event.target.value})
	}

	render() {
		return (
			<div>
				<input type="text" 
					onChange={this.inputEventHandler} 
					value={this.state.userInput} />
				<p>{this.state.userInput}</p>
				<Validation inputLength={this.state.userInput.length} />
			</div>
		)

	}
}
export default App;