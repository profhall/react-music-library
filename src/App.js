import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: []
    };
  }

  async componentDidMount() {
    const res = await axios.get('/artists.json');
    this.setState({
      artists: res.data
    });
  }

  render() {
    return (
      <Router>
        <section style={ {width: '100%'} }>
          <NavBar />
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </section>
      </Router>
    );
  }
}

export default App;
