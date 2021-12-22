import React, { Fragment } from "react";
import Explorer from "../components/Explorer/Explorer";
import withLayout from "../hocs/withLayout";

const explorer = props => {
  return (
   <Fragment>
      <Explorer/>
     </Fragment>
  );
};

export default withLayout(explorer);
