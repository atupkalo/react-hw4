import React from "react";

import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-left">
          <div className="card-left-wrap">
            <div className={"card-left-pic-wrap"  + " " + this.props.classIcon}>
            </div>
            <div className="card-left-name">{this.props.name}</div>
          </div>
        </div>
        <div className="card-right">
          <ul className="desc-list">
            <li className="dec-item">
              <span className="decs-item-span">{this.props.descItem_1}</span>
              {this.props.height}
            </li>
            <li className="dec-item">
              <span className="decs-item-span">{this.props.descItem_2}</span>
              {this.props.gender}
            </li>
            <li className="dec-item">
              <span className="decs-item-span">{this.props.descItem_3}</span>
              {this.props.hair_color}
            </li>
            <li className="dec-item">
              <span className="decs-item-span">{this.props.descItem_4}</span>
              {this.props.eye_color}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Card;
