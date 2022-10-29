import React, { Component } from 'react'
import './style-Message.scss'

export class ClassMessageComp extends Component {
  render() {
    return (
      <div className='firstBlock'>
        <h2 className='myName'>
            My dog`s name is {this.props.dogName}
        </h2>
      </div>
    )
  }
}

ClassMessageComp.defaultProps = { dogName: 'Shelly'};
