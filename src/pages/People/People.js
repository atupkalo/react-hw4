import React from "react";

import List from "../../components/List/List";
import Card from "../../components/Card/Card";

import "./People.css";

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arr: [], flag: true  };
  }

  passingDataHandler = (listItemData) => {
    this.setState({ arr: listItemData });
    this.setState({flag: false})
  };

  render() {
    return (
      <main className="people">
        <h3 className="main-title">People</h3>
        <div className="container">
          <List passingData={this.passingDataHandler} section={'people/'}/>
          {this.state.flag &&  <div className="default-card"> Click on the view button to see  details</div>  }
          {this.state.arr.map((elem, index) => {
            return (
              <Card
                  classIcon={'person-icon'}
                key={index}
                name={elem.name}
                descItem_1={'Height'} height={elem.height}
                descItem_2={'Gender'} gender={elem.gender}
                descItem_3={'Heir color'} hair_color={elem.hair_color}
                descItem_4={'Eyes color'}eye_color={elem.eye_color}
              />
            );
          })}
        </div>
      </main>
    );
  }
}
export default People;
