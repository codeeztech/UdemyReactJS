import React from 'react'
import axios from 'axios'
import DisplayHemisphere from './components/hemisphereDisplay';
import UserInput from './components/user-input';
import ImageList from './components/image-list';
import {BrowserRouter,Route,Switch  } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Card from './components/card'
import AppContext from './contexts/AppContext';

function App() {
  return (
    <BrowserRouter>
      <div >
      <Navbar />
    
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/card/:user' component={Card}></Route>
          <Route exact path='/context' component={AppContext} ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}


/*
class App extends React.Component{

 state = {images : []}

 onSearchSubmit  = async (entry) =>{
  
   const response = await axios.get(`https://pixabay.com/api/?key=26302012-aba3482249e23ab8f6e302ab1&q=${entry}&image_type=photo&pretty=true`)
   console.log(response)
   this.setState({images:response.data.hits})
}

  render(){
    return(
      <div className='ui container' style={{marginTop : '30px'}}>
      <UserInput onSearchSubmit ={this.onSearchSubmit}></UserInput>
      <ImageList images={this.state.images}></ImageList>
      </div>
      
    )
  }
}*/


/*
class App extends React.Component {
  state = {
    latitude: null,
    errorMessage: ''
  }
 
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState(function (state, props) {
        return {
          latitude: console.log(position.coords.latitude),
          latitude: position.coords.latitude
        };
      }),
      (error) => this.setState(function (state, props) {
        return {
          errorMessage: console.log(error.message),
          errorMessage: error.message
        };
      })
    )
  }

  render() {
    if (!this.state.errorMessage && this.state.latitude) {
      return <div>
        <DisplayHemisphere latitude={this.state.latitude}></DisplayHemisphere>
      </div>
    }
    else  if (this.state.errorMessage && !this.state.latitude) {
      return <div>
        {this.state.errorMessage}
      </div>
    }
    else{
      return <div>Loading...</div>
    }

  }
}
*/
export default App;
