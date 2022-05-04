import React from "react"
import logo from './logo.svg';
import './App.css';
import Books from './Components/Books/Books';
import Themer from './Components/Themer/Themer';

class App extends React.Component{

  constructor(){
    super()

    this.state = {
      backgroundColor: '#272C33'
    }




  }

  changeTheme = (theme) => {
    if(theme == "dark"){
      this.setState({
        backgroundColor: 'black'
      })
    }

    if(theme == "danger"){
      this.setState({
        backgroundColor: 'red'
      })
    }
  }
  // changeTheme(theme){
  
    

  //   // if(theme == "danger"){
  //   //   this.setState({
  //   //     backgroundColor: 'red'
  //   //   })
  //   // }

  // }

  render(){
    return (
      <div className="App" style={{backgroundColor: this.state.backgroundColor, color: 'white'}}>
  
        <header className="App-header">
            <Themer changeTheme={this.changeTheme}/>
            <Books />
        </header>
      
      </div>
    );
  }


}

export default App
