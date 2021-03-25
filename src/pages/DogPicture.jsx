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
    return (
      <div>
        <h1>Login feito com Sucesso!!!</h1>
        {this.state.isLoading === true ? (
          <h2>Carregando...</h2>
        ) : (
          <img src={this.state.dogPictureURL} alt="" />
        )}
        <br />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default DogPicture;
