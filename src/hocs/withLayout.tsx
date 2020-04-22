import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const withLayout = (Child) => {
  const WithLayout: React.FunctionComponent = (props) => {
    return (
      <div className="container-fluid p-0">
        <Navbar />
        <Child {...props} />
        <Footer />
      </div>
    );
  };
  return WithLayout;
};

export default withLayout;
