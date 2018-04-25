import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ManageShows from './Pages/ManageShows'
import ViewShows from './Pages/ViewShows'

class App extends Component {
  state = {
    shows: [
      {
        name: 'Breaking Bad',
        rating: 5,
        previewImg: 'https://ia.media-imdb.com/images/M/MV5BZDNhNzhkNDctOTlmOS00NWNmLWEyODQtNWMxM2UzYmJiNGMyXkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UY268_CR4,0,182,268_AL_.jpg'
      },
      {
        name: 'My Name is Earl',
        rating: 3,
        previewImg: 'https://ia.media-imdb.com/images/M/MV5BMTc2MzQxNDIxMl5BMl5BanBnXkFtZTcwOTk1MDU1MQ@@._V1_UY268_CR4,0,182,268_AL_.jpg'
      },
      {
        name: 'Stranger Things',
        rating: 2,
        previewImg: 'https://ia.media-imdb.com/images/M/MV5BMjUwMDgzOTg3Nl5BMl5BanBnXkFtZTgwNTI4MDk5MzI@._V1_UX182_CR0,0,182,268_AL_.jpg'
      }
    ]
  }
  createShow = (show) => {
    this.setState((prev) => {
      const existingShows = prev.shows
      existingShows.push(show)
      return {
        shows: existingShows
      }
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={() => <ViewShows allShows={this.state.shows} />} />
            <Route path="/ManageShows" component={() => <ManageShows allShows={this.state.shows} createShow={this.createShow} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
