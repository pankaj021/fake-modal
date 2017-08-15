import React, { Component } from 'react';
import './App.css'
import Award from './Award'
import FakeModal from './FakeModal'
import './FakeModal.css'

class AwardList extends Component {
  constructor(){
    super()
    this.state = {awardsList : ["Award1","Award2","Award3"],action : "normal",modalContent:"",modalHeading:""}
    this.awardsListContent = this.awardsListContent.bind(this)
    this.controlAwardListRender = this.controlAwardListRender.bind(this)
    this.resetToNormal = this.resetToNormal.bind(this)
  }

  awardsListContent(){
      return <div className="AwardListWrap">{this.state.awardsList.map((val,i) => <Award value={val} key={i} controlAwardListRender={this.controlAwardListRender}/>)}</div>
  }

  controlAwardListRender(modalHeading,modalContent){
      this.setState({action : "modal",modalHeading,modalContent})
  }

  resetToNormal(){
      this.setState({action : "normal"})
  }

  render() {
      switch(this.state.action){
          case "normal" : 
            return(
                    <div className="">
                        {this.awardsListContent()}
                    </div>
                  )
          case "modal" :
            return(
                    <div className="">
                        <FakeModal modalHeading={this.state.modalHeading} modalContent={this.state.modalContent} resetToNormal={this.resetToNormal}/>
                        {this.awardsListContent()}
                    </div>
                  )
          default :
            return(
                    <div className="">
                        Something wrong happened !!!!
                    </div>
            )
      }
  }
}

export default AwardList;
