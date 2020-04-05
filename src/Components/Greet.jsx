import React, {Component} from 'react'

class Greet extends Component {
     constructor(props) {
          super(props)
          this.state = {
               name: 'tony',
               heroName: 'Iron Man'
          }
     }
     render() {
          return(
               <div>
                    <h1>
                         name: {this.state.name} and heroname: {this.state.heroName}
                    </h1>
               </div>
          ) 
     }
}

export default Greet;