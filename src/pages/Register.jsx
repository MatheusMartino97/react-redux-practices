import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import states from '../data';
import listProfessionsAction from '../actions/listProfessionsAction';
import workerInfoAction from '../actions/workerInfoAction';
import { connect } from 'react-redux';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRedirect: '',
      isLoading: '',
      city: '',
      entity: '',
      job: '',
      stateShort: 'AC',
    };

    this.fetchProfessions = this.fetchProfessions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async fetchProfessions(workerInfo) {
    this.setState({
      shouldRedirect: false
    })

    const { city, stateShort } = workerInfo;
    const { searchProfessionList, getWorkerInfo } = this.props;

    const apiKey = 'ddd70c32-fc98-4618-b494-a9698f824353';
    const endpoit = `http://lb-aws-1105894158.sa-east-1.elb.amazonaws.com/profissao/${stateShort}/${city}?api-key=${apiKey}`;

    const request = await fetch(endpoit);
    const professionList = await request.json();

    if (professionList.message) {
      getWorkerInfo([])
    } else {
      getWorkerInfo(workerInfo);
    }
    
    searchProfessionList(professionList);

    this.setState({
      shouldRedirect: true
    })
  }
  render() {
    return (
      <div>
        <h1>Registro</h1>
        <form action="" onChange={this.handleChange}>
          <fieldset>
            <legend>Informações pessoais</legend>
          <label htmlFor="city-input">
            Cidade:
            <br/>
            <input type="text" name="city" id="city-input" />
          </label>
          <br />
          <label htmlFor="states-input">
            Estado:
            <br/>
            <select name="stateShort" id="states-input">
              {states.map(({ value, name }) => {
                return (
                  <option key={value} value={value}>
                    {name}
                  </option>
                );
              })}
            </select>
          </label>
          <br />
          <label htmlFor="job-input">
            Profissão:
            <br/>
            <input type="text" name="job" id="job-input" />
          </label>
          <br />
          <label htmlFor="job-input">
            Entidade:
            <br/>
            <input type="text" name="entity" id="entity-input" />
          </label>
          </fieldset>

          <br />
          <button
            type="button"
            onClick={() => {
              this.fetchProfessions(this.state);
            }}
          >
            Buscar resultados
          </button>
        </form>
        <footer>
          <Link to="/" className="nav-link">Voltar para Home</Link>
        </footer>
        {this.state.shouldRedirect === true ? <Redirect to="/results" /> : null}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchProfessionList: (professionsList) =>
      dispatch(listProfessionsAction(professionsList)),
    getWorkerInfo: (workerInfo) => dispatch(workerInfoAction(workerInfo)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
