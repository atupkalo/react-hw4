import React from "react";
import "./ListItem.css";

class ListItem extends React.Component {
  render() {
    return (
      <div className="list-item" onClick={this.props.clickHandle} >
        <div className="hero-wrap">
          <div className="hero-img-wrap">
            <img src={this.props.src} alt="" className="hero-img" />
          </div>
          <div className="hero-name">{this.props.itemName}</div>
          <button id={this.props.id} className="view-btn">VIEW</button>
        </div>
      </div>
    );
  }
}
export default ListItem;
