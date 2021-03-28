import React, { Component } from 'react'

class ProfessionsList extends Component {
  render() {
    return(
      <div id="job-container">
      {this.props.workerInfo.city
        ? this.props.professionsList.map(({ profissao }) => {
            return (
              <div key={profissao}>
                <button value={profissao} onClick={this.props.handleClick}>{profissao}</button>
              </div>
            );
          })
        : null}
    </div>
    )
  }
}

export default ProfessionsList