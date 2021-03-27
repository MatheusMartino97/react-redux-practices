import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Entities extends React.Component {
  render() {
    const { entitiesList } = this.props

    return(
      <div>
        <h1>Entidades</h1>
        <ul>
          {
            entitiesList.map(({ NomeFantasia, RazaoSocial }) => {
              return(
                <li key={NomeFantasia}>
                  {`${RazaoSocial} (${NomeFantasia})`}
                </li>
              )
            })
          }
        </ul>
          <Link to="/">Home</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    entitiesList: state.listEntitiesReducer.entitiesList
  }
}

export default connect(mapStateToProps)(Entities)
