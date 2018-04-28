import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebaseApp } from '../../config/firebase'
import { AppContext } from '../../context/AppContext'
// Ideas for frontend auth
// https://github.com/tylermcginnis/react-router-firebase-auth/blob/master/src/components/index.js

const LoginView = (props) => {
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      props.firebaseApp.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  }

  let view = (<div>Loading...</div>)
  if (props.isSignedIn !== undefined && !props.isSignedIn) {
    view = (
      <div>
        <StyledFirebaseAuth uiConfig={uiConfig}
                            firebaseAuth={props.firebaseApp.auth()}/>
      </div>
    )
  } else if (props.isSignedIn) {
    view = (
      <div>
        Hello {props.firebaseApp.auth().currentUser.displayName}. You are now signed In!
        <a onClick={() => props.firebaseApp.auth().signOut()}>Sign-out</a>
      </div>
    )
  }

  return view;
}

class Login extends React.Component {

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <LoginView context={context} isSignedIn={context.isSignedIn} firebaseApp={firebaseApp}/>
        )}
      </AppContext.Consumer>
    )
  }
}

export default Login;
