import React from "react";
import { Button } from "react-bootstrap";
import Validator from "validator";
import Header from "./components/Header.jsx";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";

class LoginScreen extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div className="container">
        <Header title="Welcome" />
        <div className="form-container">
          <form
            className="login-form"
            onSubmit={this.handleSubmit}
            error={!!errors.email}
          >
            <div className="screen-name">Login</div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={this.handleChange}
            />
            {errors.email && <div>{errors.email}</div>}
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={this.handleChange}
            />
            {errors.password && <div>{errors.password}</div>}
            <br />
            <Button variant="primary">Login</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginScreen;
