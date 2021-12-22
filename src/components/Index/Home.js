import react, {Fragment} from "react";
import "./Home.scss";


const Home = () => {
    return (
        <Fragment>

            <div className="container-fluid race-section">
  <div className="container">

    <div className="section-content">
      <div className="next-to-run">
        <div className="title">
          <div className="title-left">
            <h3>Next to Run</h3>
          </div>

          <div className="title-right">
            <a href="" className="see-all">See All</a>
          </div>
        </div>

        <div className="races">
          <div className="next-run-list">
            <div className="col-12 col-sm-5 mb-3 race-tile">
            <a href="">
              <div>
                <div className="race-name">
                  {/* <!-- <span>Alibaba World Cup</span> --> */}
                </div>
              </div>

              <div className="info">
                {/* <!-- <div className="price">$0.00 USD</div> --> */}
                <div className="time">
                  {/* <!-- <span className="countdown">Live</span> --> */}
                </div>
              </div>
            </a>
            </div>

            <div className="col-12 col-sm-5 mb-3 race-tile">
              <a href="">
                <div>
                  <div className="race-name">
                    <span>Odessa National</span>
                  </div>
                </div>
  
                <div className="info">
                  <div className="price">$0.00 USD</div>
                  <div className="time">
                    <span className="countdown">Live</span>
                  </div>
                </div>
              </a>
              </div>

          </div>
        </div>

        <div className="up-and-coming">
          <div className="title">
            <h3>Up and Coming</h3>
          </div>

          <div className="races">
            <div className="race-card">

              <div className="div-flex">
                <div><i className="fa fa-react"></i></div>
                <div className="text"><h3>78,283,000<br/>NFTs Created</h3></div>
              </div>

              
            </div>

            <div className="race-card">

              <div className="div-flex">
                <div><i class="fa fa-tags"></i></div>
                <div className="text"><h3>44,000 Sales<br/>Today</h3></div>
              </div>
            </div>

            <div className="race-card">

              <div className="div-flex">
                <div><i className="fab fa-react"></i></div>
                <div className="text"><h3>78,283,000<br/>NFTs Created</h3></div>
              </div>
            </div>

            <div className="race-card">

              <div className="div-flex">
                <div><i className="fas fa-tags"></i></div>
                <div className="text"><h3>44,000 Sales<br/>Today</h3></div>
              </div>
            </div>
          </div>
        </div>

        <div className="new-listing">
          <div clasName="title">
            <h3 style={{color: "#ffffff", opacity: "0.6",}}>New Listing</h3>
          </div>

          <div className="next-run-list" style={{marginTop: "2rem"}}>
            <div className="new-listing-tile">
          <div className="img">
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

            <div className="new-listing-tile">
              <div className="img">
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

                <div className="new-listing-tile">
                  <div className="img">
                    <img src="/static/images/nftpotrait.jpeg" alt="" />
                  </div>
        
                  <div className="details">
                    <div className="title">
                      <h3>Standard Capacitor</h3>
                      <h5>2.5 WAX <span>($1.33)</span></h5>
                  </div>
        
                  <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                  </div>
                  </div>
        
                    {/* </div> */}
            
                    <div className="new-listing-tile">
                      <div className="img">
                        <img src="/static/images/nftpotrait.jpeg" alt="" />
                      </div>
            
                      <div className="details">
                        <div className="title">
                          <h3>Standard Capacitor</h3>
                          <h5>2.5 WAX <span>($1.33)</span></h5>
                      </div>
            
                      <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
                      </div>
                      </div>
            
                        </div>
          </div>
        </div>

        <div className="races" style={{marginTop: "9%",}}>
          <div className="next-run-list">
            <div className="col-12 col-sm-6 mb-3 race-tile" style={{padding: "30px", background: "none",}}>
            <a href="" style={{textDecoration: "none", color: "#fff", fontWeight: "bold",}}>
              <div>
                <div className="race-name">
                  <span><h3>Trade<br/> Assets</h3></span>
                </div>
              </div>

              <div className="info">
                {/* <!-- <div className="price">$0.00 USD</div> --> */}
                <div className="time">
                  {/* <!-- <span className="countdown">Live</span> --> */}
                </div>
              </div>
            </a>
            </div>

            <div className="col-12 col-sm-5 mb-3 race-tile" style={{padding: "30px", background: "none",}}>
              <a href="" style={{textDecoration: "none", color: "#fff", fontWeight: "bold",}}>
                <div>
                  <div className="race-name">
                    <span><h3>Trade<br/> Assets</h3></span>
                  </div>
                </div>
  
                <div className="info">
                  {/* <!-- <div className="price">$0.00 USD</div> --> */}
                  <div className="time">
                    {/* <!-- <span className="countdown">Live</span> --> */}
                  </div>
                </div>
              </a>
              </div> 

          </div>
        </div>

        <div className="new-listing">
          <div className="title" style={{paddingBottom: "15px",}}>
            <h3 style={{color: "#ffffff", opacity: "0.6",}}>Newly Created Assets</h3>
          </div>

          <div className="next-run-list">
            <div className="new-listing-tile">
          <div className="img">
            <img src="/static/images/nftpotrait.jpeg" alt=""/>
          </div>

          <div className="details">
            <div className="title">
              <h3>Standard Capacitor</h3>
              <h5>2.5 WAX <span>($1.33)</span></h5>
          </div>

          <button type="button" className="btn btn-success" style={{background: "transparent", border: "3px solid #ff0000", outline: "none", color: "#fff", marginRight: "4% !important", padding: "8px 20px",
    borderRadius: "20px",}}>Details</button>

<button type="button" className="btn btn-gradient-red btn-success" style={{border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
borderRadius: "20px",}}>Buy</button>
          </div>
          </div>

            {/* </div> */}

            <div className="new-listing-tile">
              <div className="img">
                <img src="/static/images/nftpotrait.jpeg" alt=""/>
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

                <div className="new-listing-tile">
                  <div className="img">
                    <img src="/static/images/nftpotrait.jpeg" alt=""/>
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
            
                    <div className="new-listing-tile">
                      <div className="img">
                        <img src="/static/images/nftpotrait.jpeg" alt=""/>
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
{/* </div> */}
        </Fragment>
    );
};

export default Home;

