import React from "react";

import List from "../../components/List/List";
import Card from "../../components/Card/Card";

import "./Planets.css";

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = { arr: [], flag: true };
    }

    passingDataHandler = (listItemData) => {
        this.setState({ arr: listItemData });
        this.setState({flag: false})
    };
  render() {
      console.log(this.state.flag)
    return (
      <main className="people">
        <h3 className="main-title">Planets</h3>
        <div className="container">
          <List passingData={this.passingDataHandler} section={'planets/'}/>
            {this.state.flag &&  <div className="default-card"> Click on the view button to see  details</div>  }
            {this.state.arr.map((elem, index) => {
                return (
                    <Card
                        classIcon={'planet-icon'}
                        key={index}
                        name={elem.name}
                        descItem_1={'Population'} height={elem.population}
                        descItem_2={'Diameter'} gender={elem.diameter}
                        descItem_3={'Climate'} hair_color={elem.climate}
                        descItem_4={'Terrain type'}eye_color={elem.terrain}
                    />
                );
            })}
        </div>
      </main>
    );
  }
}
export default Planets;
