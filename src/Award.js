import React, { Component } from 'react';
import './App.css'

class Award extends Component {
  constructor(props){
    super(props)
    this.knowMore = this.knowMore.bind(this)
  }

  knowMore(){
      var modalHeading = "Modal-Title"
      var modalContent = "Fsafk sdjk kjbaks kbk jk bkbaksfj, usfbas sckl afbsk. Assdd sjbf ui ,eish ue efju eu ewi weug weugiuf"
      this.props.controlAwardListRender(modalHeading,modalContent)
  }

  render() {
    return(
      <span className="AwardWrap">
          <div>{this.props.value}</div>
          <div>description</div>
          <a id="knowMore" onClick={this.knowMore}>know more !!</a>
      </span>
    )
  }
}

export default Award;
