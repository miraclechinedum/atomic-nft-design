import React, { Fragment } from "react";
import Market from "../components/Market/Market";
import withLayout from "../hocs/withLayout";

const market = props => {
  return (
   <Fragment>
      <Market/>
     </Fragment>
  );
};

export default withLayout(market);
