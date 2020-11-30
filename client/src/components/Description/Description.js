import React, { Component } from 'react';
import "./Description.css"
import NatParksButton from "./NatParksButton"
import SaveTrailButtons from "../SaveTrailButtons/SaveTrailButtons";
import Image from "./DescriptionImage"
import DescriptionTitle from './DescriptionTitle';

//this is the description of the trail/park
class Description extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    
  }

  componentDidMount() {
    console.log(this.props)
  }

  render () {
    return (
      <div  className={`keen-slider__slide number-slide${this.props.index}`}>
        <DescriptionTitle parksTitle={this.props.parksDescription} />
        <p><Image className="descriptionImage" image={this.props.images}></Image>
          {this.props.description}
        </p>
        <p>{this.props.state}</p>
        <SaveTrailButtons 
          name={this.props.parksTitle}
          location={this.props.state}
          image={this.props.image}
        />
        <NatParksButton parksDescription={this.props}/>

      </div>
    )
  }
}

export default Description;
