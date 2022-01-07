import React, { Fragment } from "react";
import Connectwallet from "../components/Connectwallet/Connectwallet";
import withLayouttwo from "../hocs/withLayouttwo";

const connectwallet = props => {
  return (
   <Fragment>
      <Connectwallet/>
     </Fragment>
  );
};

export default withLayouttwo(connectwallet);
