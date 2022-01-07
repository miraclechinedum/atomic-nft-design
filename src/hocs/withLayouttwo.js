import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const withLayouttwo = WrappedComponent => {
  const WithLayouttwo = props => {
    return (
      <div className="container-fluid p-0">
        <Navbar />
        <WrappedComponent {...props} />
      </div>
    );
  };
  return WithLayouttwo;
};

export default withLayouttwo;
