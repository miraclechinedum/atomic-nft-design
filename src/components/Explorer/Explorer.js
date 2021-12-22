import react, {Fragment} from "react";
import "../Index/Home.scss";
import "./Explorer.scss";

const Explorer = () => {
    return (
        <Fragment>
<div class="container-fluid race-section">
  <div class="container">

    <div class="section-content">
      <div class="next-to-run">

        <div class="up-and-coming">
          <div class="title" style={{display: "flex", flexDirection: "column", alignItems: "start", color: "#fff",}}>
            <h3>Explorer</h3>
            <p style={{fontSize: "20px",}}> Search all NFTs created across the standard.</p>
          </div>

          <div class="races">
            <div class="race-card">

              <div class="div-flex">
                <div><i class="fab fa-react"></i></div>
                <div class="text"><h3>78,283,000<br/>NFTs Created</h3></div>
              </div>

              
            </div>

            <div class="race-card">

              <div class="div-flex">
                <div><i class="fas fa-tags"></i></div>
                <div class="text"><h3>44,000 Sales<br/>Today</h3></div>
              </div>
            </div>

            <div class="race-card">

              <div class="div-flex">
                <div><i class="fab fa-react"></i></div>
                <div class="text"><h3>78,283,000<br/>NFTs Created</h3></div>
              </div>
            </div>

            <div class="race-card">

              <div class="div-flex">
                <div><i class="fas fa-tags"></i></div>
                <div class="text"><h3>44,000 Sales<br/>Today</h3></div>
              </div>
            </div>
          </div>
        </div>

        <div class="container" style={{marginTop: "3%",}}>
            <div class="row d-flex align-items-center">
                <div class="col-md-12" style={{padding: "0",}}>
                    <div class="search"> <i class="fa fa-search"></i> 
                    <input type="text" class="form-control" placeholder="Search.........." /> <button class="btn btn-primary">Search</button> </div>
                </div>
            </div>
        </div>

        <div class="new-listing">
          <div class="title" style={{paddingBottom: "15px",}}>
            <h3 style={{color: "#fff",}}>Collections</h3>
          </div>

          <div class="next-run-list">
            <div class="new-listing-tile">
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

            <div class="new-listing-tile">
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

                <div class="new-listing-tile">
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
            
                    <div class="new-listing-tile">
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
  </div>
</div>
        </Fragment>
    );
};

export default Explorer;