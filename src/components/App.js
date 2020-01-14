import React from 'react';
import '../stylesheets/App.scss';
import { fetchToApi } from '../services/api.js';
import CharacterList from './CharacterList.js';
import Filters from './Filters.js';
import { Switch, Route } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import logo2 from '../images/logo2.png';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allCharacters: [],
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.renderCharacter = this.renderCharacter.bind(this)
  }
  componentDidMount() {
    fetchToApi()
      .then(data => {
        this.setState({
          allCharacters: data.results
        })
      })
  }
  handleChange(data) {
    this.setState({
      inputValue: data
    })
  }
  renderCharacter(props) {
    const routeId = parseInt(props.match.params.id);
    return <CharacterDetail
      oneCharacter={this.state.allCharacters.find(item => item.id === routeId)}
    />
  }
  render() {
    return (
      <div className="App" >
        <img className="App-logo" src={logo2} alt="logo" />
        <Switch>
          <Route exact path="/">
            <Filters
              handleChange={this.handleChange} />
            <CharacterList
              allCharacters={this.state.allCharacters}
              inputValue={this.state.inputValue}
            />
          </Route>
          <Route path="/character/:id" render={this.renderCharacter} />
        </Switch >
      </div >
    );
  }
}
export default App;
