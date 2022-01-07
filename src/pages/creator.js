import React, { Fragment } from "react";
import Creator from "../components/Creator/Creator";
import withLayout from "../hocs/withLayout";

const creator = props => {
  return (
   <Fragment>
      <Creator/>
     </Fragment>
  );
};

export default withLayout(creator);
