import React from 'react';
import Navbar from './Navbar';

export class Login extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      username: '',
      password: '',
      userNiceName: '',
      userEmail: '',
      loggedIn: false,
      loading: false,
      error: ''
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  };

  handleOnChange = (event) => {
      this.setState( { [event.target.name]: event.target.value } );
  };

  render() {

    const { username } = this.state;

    return (
      <div>
        <Navbar />
        <form onSubmit={ this.onFormSubmit } style={{ marginTop: '20px', marginLeft: '20px' }}>
          <label htmlFor="#" className="form-group">
            Username:
            <input 
              type="text" 
              className="form-control" 
              name="username" 
              value={ username } 
              onChange={ this.handleOnChange }
            />
          </label>
          <br/>
          <label htmlFor="#" className="form-group">
            Passsword:
            <input 
              type="password" 
              className="form-control" 
              name="password" 
              value={ username } 
              onChange={ this.handleOnChange }
            />
          </label>
          <br/>
          <button className="btn btn-primary mb3" type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login
