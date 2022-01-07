import React, {Fragment} from "react";
import "./Creator.scss";

const Creator = () => {
    return (
        <Fragment>
<div className="container-fluid trading">
<div className="container">
<div className="text-center">
<h3>You need to login to view this page</h3>
<button type="button" className="btn gra-btn btn-success" style={{ border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
    borderRadius: "20px",}}><a href="/connectwallet" style={{color: "white", textDecoration: "none", fontWeight: "bold"}}>Login</a></button>
</div>
</div>
</div>
        </Fragment>
    )
};

export default Creator;