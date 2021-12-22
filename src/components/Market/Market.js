import react, {Fragment} from "react";
import "../Index/Home.scss";
import "./Market.scss";

const Market = () => {
    return (
        <Fragment>
<div class="container-fluid mt-5 mb-5">
        <div class="row g-2">
            <div class="col-md-3">
                <div class="t-products p-2">
                    <h6 class="text-uppercase">Computer & Periferals</h6>
                    <div class="p-lists">
                        <div class="d-flex justify-content-between mt-2"> <span>Laptops</span> <span>23</span> </div>
                        <div class="d-flex justify-content-between mt-2"> <span>Desktops</span> <span>46</span> </div>
                        <div class="d-flex justify-content-between mt-2"> <span>Monitors</span> <span>13</span> </div>
                        <div class="d-flex justify-content-between mt-2"> <span>Mouse</span> <span>33</span> </div>
                        <div class="d-flex justify-content-between mt-2"> <span>Keyboard</span> <span>12</span> </div>
                        <div class="d-flex justify-content-between mt-2"> <span>Printer</span> <span>53</span> </div>
                        <div class="d-flex justify-content-between mt-2"> <span>Mobiles</span> <span>203</span> </div>
                        <div class="d-flex justify-content-between mt-2"> <span>CPU</span> <span>23</span> </div>
                    </div>
                </div>
                <div class="processor p-2">
                    <div class="heading d-flex justify-content-between align-items-center">
                        <h6 class="text-uppercase">Processor</h6> <span>--</span>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> <label class="form-check-label" for="flexCheckDefault"> Intel Core i7 </label> </div> <span>3</span>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> <label class="form-check-label" for="flexCheckChecked"> Intel Core i6 </label> </div> <span>4</span>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> <label class="form-check-label" for="flexCheckChecked"> Intel Core i3 </label> </div> <span>14</span>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> <label class="form-check-label" for="flexCheckChecked"> Intel Centron </label> </div> <span>8</span>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> <label class="form-check-label" for="flexCheckChecked"> Intel Pentinum </label> </div> <span>14</span>
                    </div>
                </div>
                <div class="brand p-2">
                    <div class="heading d-flex justify-content-between align-items-center">
                        <h6 class="text-uppercase">Brand</h6> <span>--</span>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> <label class="form-check-label" for="flexCheckDefault"> Apple </label> </div> <span>13</span>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> <label class="form-check-label" for="flexCheckChecked"> Asus </label> </div> <span>4</span>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> <label class="form-check-label" for="flexCheckChecked"> Dell </label> </div> <span>24</span>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> <label class="form-check-label" for="flexCheckChecked"> Lenovo </label> </div> <span>18</span>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> <label class="form-check-label" for="flexCheckChecked"> Acer </label> </div> <span>44</span>
                    </div>
                </div>
                <div class="type p-2 mb-2">
                    <div class="heading d-flex justify-content-between align-items-center">
                        <h6 class="text-uppercase">Type</h6> <span>--</span>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> <label class="form-check-label" for="flexCheckDefault"> Hybrid </label> </div> <span>23</span>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> <label class="form-check-label" for="flexCheckChecked"> Laptop </label> </div> <span>24</span>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> <label class="form-check-label" for="flexCheckChecked"> Desktop </label> </div> <span>14</span>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> <label class="form-check-label" for="flexCheckChecked"> Touch </label> </div> <span>28</span>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> <label class="form-check-label" for="flexCheckChecked"> Tablets </label> </div> <span>44</span>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="market-products">
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                        <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                        <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                        <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                        <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                        <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                        <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                        <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                        <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                        <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                        <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                         <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                         <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                         <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                         <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                         <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                         <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                         <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                         <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                         <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                         <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                    <div class="col-md-3 new-listing-tile">
                        <div class="img">
                        <img src="/static/images/nftpotrait.jpeg" alt="" />
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <div className="buttons">
            <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                        </div>
                        </div>
              
                          </div>
                   
                </div>
            </div>
        </div>
    </div>
        </Fragment>
    );
};

export default Market;