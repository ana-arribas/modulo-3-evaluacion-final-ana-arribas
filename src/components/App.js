import React from 'react';
import '../stylesheets/App.css';
import { fetchToApi } from '../services/api.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allCharacters: []
    }
    console.log(this.state.allCharacters)
  }

  componentDidMount() {
    fetchToApi()
      .then(data => {
        this.setState({
          allCharacters: data.results
        })
      })
  }



  render() {
    console.log(this.state.allCharacters)
    return (
      <div className="App" >

      </div>
    );
  }
}

export default App;
