import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <form className="formPanel" onSubmit={this.registerUser}>
        <h2>Register User</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <div>
        <TextField
          required
          id="standard-name"
          label="Username"
          className={classes.textField}
          value={this.state.username}
          onChange={this.handleInputChangeFor('username')}
          margin="normal"
        />
          {/* <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              required
              onChange={this.handleInputChangeFor('username')}
            />
          </label> */}
        </div>
        <div>
        <TextField
          required
          id="standard-name"
          label="Password"
          className={classes.textField}
          value={this.state.password}
          onChange={this.handleInputChangeFor('password')}
          margin="normal"
        />
          {/* <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </label> */}
        </div>
        <div>
        <Button 
          variant="contained" 
          type="submit" 
          className={classes.button}>
          Register
      </Button>
          {/* <input className="btn" type="submit" name="submit" value="Register" /> */}
        </div>
      </form>
    );
  }
}
export default withStyles(styles)(connect(mapStoreToProps)(RegisterForm));
//export default connect(mapStoreToProps)(RegisterForm);
