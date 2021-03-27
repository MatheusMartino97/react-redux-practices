import React, { Component } from 'react'

class ProfessionsList extends Component {
  render() {
    return(
      <ul>
      {this.props.workerInfo.city
        ? this.props.professionsList.map(({ profissao }) => {
            return (
              <li key={profissao}>
                <button value={profissao} onClick={this.props.handleClick}>{profissao}</button>
              </li>
            );
          })
        : null}
    </ul>
    )
  }
}

export default ProfessionsList