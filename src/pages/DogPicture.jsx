import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DogPicture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogPictureURL: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fetchRandomDogPicture();
  }

  async fetchRandomDogPicture() {
    this.setState({
      isLoading: true,
    });

    const endPoint = 'https://dog.ceo/api/breeds/image/random';
    const request = await fetch(endPoint);
    const response = await request.json();
    const dogPictureURL = response.message;

    this.setState({
      dogPictureURL,
      isLoading: false,
    });
  }

  render() {
    const divStyle = {
      width: '500px',
      height: '500px',
      border: '1px solid black',
      padding: '5px',
    };

    return (
      <div>
        <h1>Login feito com Sucesso!!!</h1>
        <div style={divStyle}>
          {this.state.isLoading === true ? (
            <img
              width="500px"
              height="500px"
              src="https://img.cloudygif.com/small/754f4958462ec465.gif"
              alt="dog"
            />
          ) : (
            <img
              width="500px"
              height="500px"
              src={this.state.dogPictureURL}
              alt="dog"
            />
          )}
        </div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/login">Entrar com outra conta</Link>
      </div>
    );
  }
}

export default DogPicture;
