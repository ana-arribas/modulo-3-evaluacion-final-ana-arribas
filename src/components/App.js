import React from 'react';
import '../stylesheets/App.css';
import { fetchToApi, fetch2 } from '../services/api.js';
import CharacterList from './CharacterList.js';
import Filters from './Filters.js';
import { Switch, Route } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allCharacters: [],
      value: '',
      singleCharacter: {}
    }
    this.lifting = this.lifting.bind(this)
    this.renderCharacter = this.renderCharacter.bind(this)
    this.fetch2 = this.fetch2.bind(this)

  }

  componentDidMount() {
    fetchToApi()
      .then(data => {
        this.setState({
          allCharacters: data.results
        })
      })
  }

  fetch2(id) {
    if (id !== this.state.singleCharacter.id) {
      fetch2(id)
        .then(data => {
          this.setState({
            singleCharacter: data
          })
          console.log(this.state.singleCharacter)
        })
    }
  }

  lifting(patata) {
    this.setState({
      value: patata
    })
  }

  renderCharacter(props) {
    // console.log(props)
    this.fetch2(props.match.params.id);
    return <CharacterDetail oneCharacter={this.state.singleCharacter}
    // pathid={props.match.params.id}
    />
  }

  render() {
    return (
      <div className="App" >
        <Switch>
          <Route exact path="/">
            <Filters
              lifting={this.lifting} />
            <CharacterList
              allCharacters={this.state.allCharacters}
              value={this.state.value}
            />
          </Route>
          <Route path="/character/:id" render={this.renderCharacter} />
        </Switch >
      </div >
    );
  }
}

export default App;
