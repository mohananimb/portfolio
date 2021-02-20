import React from 'react'
import imageOverlay from '../img/earth.jpg'

class WorkAndEdu extends React.Component {
  render () {
    return (
      <section className='paralax-mf footer-paralax bg-image sect-mt4 route'>
        <div className='overlay-mf'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='contact-mf'>
                <div id='contact' className='box-shadow-full'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='title-box-2'>
                        <h5 className='title-left'>Work</h5>
                      </div>
                      <div>
                        <h5 className='lead'>August 2020 - Present</h5>
                        <div>
                          <h3>Utriva Technologies</h3>
                          <h6>Front End Developer</h6>
                          <p>
                            Responsible for designing, development and creating
                            reusable components for future use.
                          </p>
                        </div>
                        <br />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='title-box-2 pt-4 pt-md-0'>
                        <h5 className='title-left'>Education</h5>
                      </div>
                      <div className='more-info'>
                        <h5 className='lead'> 2014 - 2017</h5>
                        <div>
                          <h3>Sant Gadge Baba Amravati University</h3>
                          <h6>Bachelor's Degree</h6>
                          <p>
                            Completed bachelor's of computer applications from
                            Vidybharti Mahavidyalaya with 1st class grade.
                          </p>
                        </div>
                        <br />
                      </div>
                      <div className='more-info'>
                        <h5 className='lead'>2012 - 2014</h5>
                        <div>
                          <h3>Shri Gurudev Jr. College</h3>
                          <h6>H.S.C.</h6>
                          <p>
                            Completed H.S.C. in science stream with 1st class
                            grade.
                          </p>
                        </div>
                        <br />
                      </div>

                      <div className='more-info'>
                        <h5 className='lead'>2012</h5>
                        <div>
                          <h3>Shri Gurudev Vidya Mandir</h3>
                          <h6>S.S.C.</h6>
                          <p>Completed S.S.C. with 1st class grade.</p>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='copyright-box'></div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    )
  }
}

export default WorkAndEdu
