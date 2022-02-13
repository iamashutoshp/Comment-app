import React, { Component } from "react";

export const AppContext = React.createContext({ isAuthenticated: false });

const prevVal = JSON.parse(localStorage.getItem("state"));
export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: prevVal ? prevVal.isAuthenticated : false,
      user: prevVal ? prevVal.user : {},
      enteredPath:prevVal ? prevVal.enteredPath : '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      localStorage.setItem("state", JSON.stringify(this.state));
    }
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          demo: (name, calllback) => {
            this.setState({ abc: name + 1 }, () => {
              calllback(true);
            });
          },

          setLogIn: (email, password, flag, calllback) => {
            this.setState(
              {
                user: {
                  ...this.state.user,
                  email: email,
                  password: password,
                },
                isAuthenticated: true,
              },
              () => {
                calllback(true);
              }
            );
          },

          setLogOut: (flag,calllback) => {
            console.log("in context")
            this.setState(
              {
                user: {},
                isAuthenticated: flag,
              },
              () => {
                calllback(true);
              }
            );
          },

          setSignUp: (email, password, secret, calllback) => {
            this.setState(
              {
                user: {
                  ...this.state.user,
                  email: email,
                  password: password,
                  secret: secret,
                },
                isAuthenticated: true,
              },
              () => {
                calllback(true);
              }
            );
          },

          forgotPass: (email, secret, flag, calllback) => {
            this.setState(
              {
                user: {
                  ...this.state.user,
                  email: email,
                  secret: secret,
                },
                isAuthenticated: true,
              },
              () => {
                calllback(true);
              }
            );
          },

          isAuthenticated: this.state.isAuthenticated,
          user: this.state.user,
          enteredPath: this.state.enteredPath
        }}
      >
        {console.log("context : ", this.state)}
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
