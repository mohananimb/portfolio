import React from "react";

//import covid
import covid from "../img/Portfolio-images/covid.jpg";
import beachResort1 from "../img/Portfolio-images/beach-resolt1.jpg";
import beachResort2 from "../img/Portfolio-images/beach-resolt2.png";
import beachResort3 from "../img/Portfolio-images/beach-resolt3.png";
import beachResort4 from "../img/Portfolio-images/beach-resolt4.png";
import netflixClone1 from "../img/Portfolio-images/netflix-clone1.png";
import netflixClone2 from "../img/Portfolio-images/netflix-clone2.png";
import netflixClone3 from "../img/Portfolio-images/netflix-clone3.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">My Work</h3>
                <p className="subtitle-a">
                  Here are some of my projects that I recently worked on.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={covid} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={covid} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Covid-19 Update Tracker</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Javascript Bootstrap ReactJS
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={covid}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={beachResort1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={beachResort1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">
                          Beach Resort with hotel booking
                        </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Javascript Bootstrap ReactJS
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={beachResort2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={beachResort3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={beachResort4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div style={{ minHeight: "305px" }} className="work-box">
                <a href={netflixClone1} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={netflixClone1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Netflix-Clone</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Javascript ReactJS
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={netflixClone2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={netflixClone3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
          <p className="pt-3 text-center">
            <a
              className="btn btn-primary btn js-scroll px-4"
              href="https://github.com/mohananimb"
              target="_blank"
              role="button"
              rel="noopener noreferrer"
            >
              More Projects...
            </a>
          </p>
        </div>
      </section>
    );
  }
}

export default Portfolio;
