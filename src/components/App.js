import React from 'react';
import '../stylesheets/App.css';
import { fetchToApi } from '../services/api.js';
import CharacterList from './CharacterList.js';
import Filters from './Filters.js';
import { Switch, Route } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import logo2 from '../images/logo2.jpg';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allCharacters: [],
      inputValue: '',
      // singleCharacter: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.renderCharacter = this.renderCharacter.bind(this)
    // this.singleFetch = this.singleFetch.bind(this)

  }

  componentDidMount() {
    fetchToApi()
      .then(data => {
        this.setState({
          allCharacters: data.results
        })
      })
  }

  // singleFetch(id) {
  //   // if (id !== this.state.singleCharacter.id) {
  //   singleFetch(id)
  //     .then(data => {
  //       this.setState({
  //         singleCharacter: data
  //       })
  //       console.log(this.state.singleCharacter)
  //     })
  //   // }
  // }

  handleChange(data) {
    this.setState({
      inputValue: data
    })
  }

  // renderCharacter(props) {
  //   // console.log(props)
  //   this.singleFetch(props.match.params.id);
  //   return <CharacterDetail oneCharacter={this.state.singleCharacter}
  //   // pathid={props.match.params.id}
  //   />
  // }

  renderCharacter(props) {
    const routeId = parseInt(props.match.params.id);
    // const detail = this.state.allCharacters.find(item => item.id === routeId);
    return <CharacterDetail
      oneCharacter={this.state.allCharacters.find(item => item.id === routeId)}

    />
  }

  render() {
    return (
      <div className="App" >
        <img className="logo" src={logo2} alt="logo" />
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
