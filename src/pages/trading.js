import React, { Fragment } from "react";
import Trading from "../components/Trading/Trading";
import withLayout from "../hocs/withLayout";

const trading = props => {
  return (
   <Fragment>
      <Trading/>
     </Fragment>
  );
};

export default withLayout(trading);
