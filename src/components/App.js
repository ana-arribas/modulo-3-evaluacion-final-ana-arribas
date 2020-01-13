import React from 'react';
import '../stylesheets/App.css';
import { fetchToApi } from '../services/api.js';
import CharacterList from './CharacterList.js';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allCharacters: []
    }
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
    return (
      <div className="App" >
        <CharacterList
          allCharacters={this.state.allCharacters}
        />
      </div>
    );
  }
}

export default App;
