import React, { Component } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { constant, customStyles } from "../utils/consts";

export default class SignIn extends Component {
  state = {
    logInPage: true,
    signUpPage: false,
    forgotPassword: false,
    email: "",
    password: "",
    secret: "",
  };

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  onSecretChange = (e) => {
    this.setState({
      secret: e.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      secret: data.get("secret"),
    });
    setTimeout(()=>this.setState({
        email: '',password:'',secret:''
    }),100)
  };
  render() {
    const theme = createTheme();
    let superCardStyle = customStyles.superCardStyle;
    let header = customStyles.header;
    let button = customStyles.homePageButton;

    return (
      <div>
        <Card sx={{ maxWidth: 560 }} style={superCardStyle}>
          <Card sx={{ maxWidth: 550, maxHeight: "auto" }}>
            <CardContent>
              <>
                <ThemeProvider theme={theme}>
                  <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                      sx={{
                        marginTop: "4px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography component="h1" variant="h5">
                        {this.state.logInPage ? (
                          <p style={header}>Sign in</p>
                        ) : this.state.signUpPage ? (
                          <p style={header}>Sign Up</p>
                        ) : (
                          this.state.forgotPassword && (
                            <p style={header}>Forgot Password</p>
                          )
                        )}
                      </Typography>

                      <Grid
                        container
                        spacing={2}
                        style={{ marginTop: "5px", marginBottom: "10px" }}
                      >
                        <Grid item xs={3} />
                        <Grid item>
                          {this.state.logInPage ? (
                            <p style={{ color: "grey" }}>
                              {"Don't have an account?"}
                              <Button
                                style={button}
                                onClick={() =>
                                  this.setState({
                                    signUpPage: true,
                                    logInPage: false,
                                    forgotPassword: false,
                                    email: "",
                                    password: "",
                                    secret: "",
                                  })
                                }
                              >
                                Sign Up
                              </Button>
                            </p>
                          ) : (
                            (this.state.signUpPage ||
                              this.state.forgotPassword) && (
                              <p style={{ color: "grey" }}>
                                {"Already have an account?"}
                                <Button
                                  style={button}
                                  onClick={() =>
                                    this.setState({
                                      signUpPage: false,
                                      logInPage: true,
                                      forgotPassword: false,
                                      email: "",
                                      password: "",
                                      secret: "",
                                    })
                                  }
                                >
                                  Sign In
                                </Button>
                              </p>
                            )
                          )}
                        </Grid>
                      </Grid>
                      <Box
                        component="form"
                        onSubmit={this.handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                      >
                        <TextField
                          margin="normal"
                          title="Email"
                          required={
                            this.state.email.trim().length < 3 &&
                            !this.state.email.includes("@")
                          }
                          value={this.state.email}
                          onChange={this.onEmailChange}
                          id="email"
                          label="Email"
                          name="email"
                          autoComplete="email"
                          autoFocus
                          style={{ width: "80%" }}
                        />
                        {this.state.logInPage ? (
                          <>
                            <TextField
                              margin="normal"
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              value={this.state.password}
                              onChange={this.onPasswordChange}
                              required={this.state.password.trim().length < 6}
                              style={{ width: "80%" }}
                            />
                          </>
                        ) : this.state.signUpPage ? (
                          <>
                            <TextField
                              margin="normal"
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              value={this.state.password}
                              onChange={this.onPasswordChange}
                              required={this.state.password.trim().length < 6}
                              style={{ width: "80%" }}
                            />
                            <TextField
                              margin="normal"
                              name="secret"
                              label="Secret"
                              type="password"
                              id="secret"
                              value={this.state.secret}
                              onChange={this.onSecretChange}
                              required={this.state.secret.trim().length < 6}
                              style={{ width: "80%" }}
                            />
                          </>
                        ) : (
                          <>
                            <TextField
                              margin="normal"
                              name="secret"
                              label="Secret"
                              type="password"
                              id="secret"
                              value={this.state.secret}
                              onChange={this.onSecretChange}
                              required={this.state.secret.trim().length < 6}
                              style={{ width: "80%" }}
                            />
                          </>
                        )}
                        {this.state.logInPage && (
                          <Grid container>
                            <Grid item xs={4} />
                            <Grid item xs>
                              <Button
                                style={button}
                                onClick={() =>
                                  this.setState({
                                    signUpPage: false,
                                    logInPage: false,
                                    forgotPassword: true,
                                    email: "",
                                    password: "",
                                    secret: "",
                                  })
                                }
                              >
                                Forgot Password?
                              </Button>
                            </Grid>
                          </Grid>
                        )}
                        <Button
                          type="submit"
                          style={{ width: "80%" }}
                          variant="contained"
                          startIcon={<LockOutlinedIcon />}
                          sx={{ mt: 3, mb: 2 }}
                        >
                          {this.state.logInPage || this.state.forgotPassword
                            ? "Sign In"
                            : "Sign Up"}
                        </Button>
                      </Box>
                    </Box>
                  </Container>
                </ThemeProvider>
              </>
            </CardContent>
          </Card>
        </Card>
      </div>
    );
  }
}
