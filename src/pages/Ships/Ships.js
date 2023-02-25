import React from "react";

import List from "../../components/List/List";
import Card from "../../components/Card/Card";

import "./Ships.css";

class Ships extends React.Component {
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
        <h3 className="main-title">Ships</h3>
        <div className="container">
          <List passingData={this.passingDataHandler} section={'starships/'}/>
            {this.state.flag &&  <div className="default-card"> Click on the view button to see  details</div>  }
            {this.state.arr.map((elem, index) => {
                return (

                    <Card
                        classIcon={'ship-icon'}
                        key={index}
                        name={elem.name}
                        descItem_1={'Passengers capacity'} height={elem.passengers}
                        descItem_2={'Cargo capacity\''} gender={elem.cargo_capacity}
                        descItem_3={'Starship class'} hair_color={elem.starship_class}
                        descItem_4={'Model'} eye_color={elem.model}
                    />
                );
            })}
        </div>
      </main>
    );
  }
}
export default Ships;
