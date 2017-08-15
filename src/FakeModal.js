import React, { Component } from 'react';
import './App.css'

class FakeModal extends Component {
  constructor(props){
    super(props)
    this.closeFakeModal = this.closeFakeModal.bind(this)
  }

  closeFakeModal(event){
      if(event.target.id === "fakeModal")
    this.props.resetToNormal()
  }

  render() {
    return(
      <div className="FakeModal" id="fakeModal" onClick={this.closeFakeModal}>
        <div className="FakeModalContent">
            <div className="FakeModalHeading">
                {this.props.modalHeading}
            </div>
            <div className="FakeModalBody">
                {this.props.modalContent}
            </div>
        </div>
      </div>
    )
  }
}

export default FakeModal;
