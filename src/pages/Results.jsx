import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import listEntitiesAction from '../actions/listEntitiesAction';

class Results extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedJob: '',
      shoulRedirect: false
    }
    this.fetchEntities = this.fetchEntities.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  async fetchEntities(selectedJob) {
    const { city, stateShort } = this.props.workerInfo
    const { listEntities } = this.props

    const apiKey = '4b94dba2-5524-4632-939b-92df1c50a645'
    const endpoint = `http://lb-aws-1105894158.sa-east-1.elb.amazonaws.com/entidade/${selectedJob}/${stateShort}/${city}?api-key=${apiKey}`
  
    const request = await fetch(endpoint)
    const entitiesList = await request.json()

    listEntities(entitiesList)
  }

  handleClick(event) {
    this.setState({
      selectedJob: event.target.value,
      shoulRedirect: true
    })

    this.fetchEntities(event.target.value)
  }
  render() {
    const { professionsList, workerInfo } = this.props;

    return (
      <div>
        {workerInfo.city ? (
          <h1>{`Resultados para ${
            workerInfo.stateShort
          }, ${workerInfo.city.toUpperCase()}`}</h1>
        ) : (
          <h1>Cidade não informada</h1>
        )}

        {workerInfo.city ? (
          <em>
            Clique um uma profissão para ver as entidades que oferecem os cargos
          </em>
        ) : null}

        <ul>
          {workerInfo.city
            ? professionsList.map(({ profissao }) => {
                return (
                  <li key={profissao}>
                    <button value={profissao} onClick={this.handleClick}>{profissao}</button>
                  </li>
                );
              })
            : null}
        </ul>
        <Link to="/register">Registro</Link>
        <br/>
        {this.state.shoulRedirect ? <Redirect to={`/entities/${this.state.selectedJob}`} /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    professionsList: state.listProfessionsReducer.professionsList,
    workerInfo: state.workerInfoReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listEntities: (entitiesList) => dispatch(listEntitiesAction(entitiesList))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
