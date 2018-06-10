import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { AppContext } from "../../context/AppContext";

import { GoogleLogin } from "react-google-login";
import axios from "axios";

const LoginView = props => {
  let view = <div>Loading...</div>;
  if (props.isSignedIn === undefined) {
    view = (
      <GoogleLogin
        clientId="25338911788-8bjhrqpj2gci67p7qqof1rbk5lakvk2r.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={response => responseGoogle(response, props.context)}
        onFailure={responseGoogle}
      />
    );
  } else if (props.isSignedIn) {
    view = (
      <div>
        Hello {props.context.customer.firstName}. You are now signed In!
        <a onClick={() => props.context.logout()}>Sign-out</a>
      </div>
    );
  }

  return view;
};

const responseGoogle = async (googleResponse, ctx) => {
  const user = googleResponse;

  try {
    const url = `http://localhost:5000/api/customers`;
    const response = await axios.post(url, user);
    ctx.login(response.data);
  } catch (e) {
    console.log("Error with Google auth:", e);
  }
};

class Login extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <LoginView context={context} isSignedIn={context.isSignedIn} />
        )}
      </AppContext.Consumer>
    );
  }
}

export default Login;
