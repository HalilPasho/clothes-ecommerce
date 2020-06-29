import React from "react";
import "./App.css";
import Homepage from './pages/homepage/homepage';
import {Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/signinandup/SigninandSignup';
import {auth } from './firebase/firebase.utils'
import {createUserProfileDocument} from './firebase/firebase.utils'
 
class App extends React.Component {
  constructor(){
    super()
    this.state= {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render (){
    return <div>
    <Header currentuser = {this.state.currentUser}/>
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/signin' component={SignInAndSignUp}/>
    </Switch>
  </div>
  }
  
}

export default App;
