import React from "react";

import ListItem from "../ListItem/ListItem";
import Preloader from "../Preloader/Preloader";
// import FetchRequest from "../Functions/FetchRequest";
import "./List.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: [], error: false, preloader: true };
  }
  //--------------------------- request method
  requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  clickHandler = (e) => {
    const id = Number(e.target.id);
    const listItemData = this.state.people.filter((elem, i) => {
      return i === id;
    });
    this.props.passingData(listItemData);
    e.preventDefault();
  };

  getData = () => {
      fetch(`https://swapi.dev/api/${this.props.section}` , this.requestOptions)
        .then((response) => response.json())
        .then((result) => this.setState({ people: result.results}))
        .then(() => this.setState({ preloader: false }))// switch to a diff method
        .catch((error) => this.setState({ error: true }));
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="list">
        {this.state.error && (
          <div className="error">
            Looks LIke some error has occurred, try again later
          </div>
        )}

        {this.state.people.map((elem, index) => {
          return (
            <ListItem
              id={index}
              key={index}
              clickHandle={this.clickHandler}
              itemName={elem.name}
            />
          );
        })}
        {this.state.preloader && <Preloader />}
      </div>
    );
  }
}
export default List;
