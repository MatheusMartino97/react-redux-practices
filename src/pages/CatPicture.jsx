import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CatPicture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catPictureURL: '',
      isLoading: false,
    };

    this.fetchRandomDogPicture = this.fetchRandomDogPicture.bind(this)
  }

  componentDidMount() {
    this.fetchRandomDogPicture();
  }

  async fetchRandomDogPicture() {
    this.setState({
      isLoading: true,
    });

    const endPoint = 'https://aws.random.cat/meow';
    const request = await fetch(endPoint);
    const response = await request.json();
    const catPictureURL = response.file;

    this.setState({
      catPictureURL,
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
              src="https://i.pinimg.com/originals/97/e9/42/97e942ce7fc4e9d4ea6d844a382f251f.gif"
              alt="cat"
            />
          ) : (
            <img
              width="500px"
              height="500px"
              src={this.state.catPictureURL}
              alt="cat"
            />
          )}
        </div>
        <button onClick={this.fetchRandomDogPicture}>Buscar outra foto</button>
        <br/>
        <Link to="/">Home</Link>
        <br />
        <Link to="/login">Entrar com outra conta</Link>
      </div>
    );
  }
}

export default CatPicture;
