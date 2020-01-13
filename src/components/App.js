import React from 'react';
import '../stylesheets/App.css';
import { fetchToApi } from '../services/api.js';
import CharacterList from './CharacterList.js';
import Filters from './Filters.js';
import { Switch, Route } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allCharacters: [],
      value: ''
    }
    this.lifting = this.lifting.bind(this)
  }

  componentDidMount() {
    fetchToApi()
      .then(data => {
        this.setState({
          allCharacters: data.results
        })
      })
  }

  lifting(patata) {
    this.setState({
      value: patata
    })
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
          <Route path="/character/:id" component={CharacterDetail} />
        </Switch >
      </div >
    );
  }
}

export default App;
