import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Entities extends React.Component {
  render() {
    const { entitiesList, workerInfo } = this.props;

    return (
      <div>
        <h1>Entidades</h1>
        <div id="entities-container" onClick={this.searchEntity}>
          {entitiesList.map(({ NomeFantasia, RazaoSocial }) => {
            return (
              
              <a
                href={`https://www.google.com/search?q=${RazaoSocial}%20${workerInfo.city.toUpperCase()}`}
                target="_blank"
                rel="noreferrer"
              >
                <div class="entity" key={NomeFantasia}>
                  {`${RazaoSocial} (${NomeFantasia})`}
                </div>
              </a>
            );
          })}
        </div>
        <footer>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    entitiesList: state.listEntitiesReducer.entitiesList,
    workerInfo: state.workerInfoReducer,
  };
};

export default connect(mapStateToProps)(Entities);
