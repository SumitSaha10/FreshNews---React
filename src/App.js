
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API
  constructor(){
    super();
    this.state = {
      progress: 0
    }

  }

  setProgress = (progress)=>{
    this.setState({progress: progress});
  }

  render() {
    return (
      <>
      <Router>

        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Switch>
          <Route exact path="/">
          <News setProgress = {this.setProgress} apikey = {this.apikey}
 key="general" country="in" category="general"/>
          </Route>
          <Route exact path="/sports">
          <News setProgress = {this.setProgress} apikey = {this.apikey}
 key="sports" country="in" category="sports"/>
          </Route>
          <Route exact path="/entertainment">
          <News setProgress = {this.setProgress} apikey = {this.apikey}
 key="entertainment" country="in" category="entertainment"/>
          </Route>
          <Route exact path="/science">
          <News setProgress = {this.setProgress} apikey = {this.apikey}
 key="science" country="in" category="science"/>
          </Route>
          <Route exact path="/technology">
          <News setProgress = {this.setProgress} apikey = {this.apikey}
 key="technology" country="in" category="technology"/>
          </Route>
          <Route exact path="/business">
          <News setProgress = {this.setProgress} apikey = {this.apikey}
 key="business" country="in" category="business"/>
          </Route>
          <Route exact path="/health">
          <News setProgress = {this.setProgress} apikey = {this.apikey}
 key="health" country="in" category="health"/>
          </Route>
        
        </Switch>
      </Router>
      </>
    )
  }
}



