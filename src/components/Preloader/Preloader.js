import React from "react";

import "./Preloader.css";

class Preloader extends React.Component {
  render() {
    return (
      <div className="preloader-wrap">
        <div className="preloader">
          <div className="spiner"></div>
        </div>
      </div>
    );
  }
}

export default Preloader;
