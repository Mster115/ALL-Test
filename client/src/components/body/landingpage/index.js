import React from "react";
//import "../../../assets/stylesheets/components/App.scss"
import "../../../assets/stylesheets/pages/LandingPage.scss"
import SiteMap from "../../../components/body/landingpage/sitemap"
import eye from "../../../assets/images/labs/eye.jpg";
import ear from "../../../assets/images/labs/ear.jpg";
import braille from "../../../assets/images/labs/braille.jpg";
import hand from "../../../assets/images/labs/hand_in_dev.jpg";
import nsf from "../../../assets/images/logos/nsf.png";
import rit from "../../../assets/images/logos/RIT.png";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {actions as mainActions} from "../../../reducers/MainReducer";

const mapDispatchToProps = (dispatch) => ({
        actions: bindActionCreators(mainActions, dispatch)
});

const handleLab = (actions, lab) => {
        actions.setLab(lab);
    }

const Home = (props) => {
const {actions} = props;
  return (
  <div class="landingpage">
    {/* Header */}
      <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">
            Welcome To The Accessibility Learning Labs (ALL) project!
          </div>
          <div class="intro-heading text-uppercase">
            Learn about Accessibility
          </div>
          <a
            class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#goals"
          >Tell Me More</a
          >
        </div>
      </div>
    </header>
    {/* Services */}
    <section class="page-section" id="goals">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Lab Goals</h2>
            <h3 class="section-subheading lab-section-subheading">
              Activities that incorporate accessibility education and improve
              understanding of accessible design are available.
            </h3>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <p class="service-heading landingpage__leftalign" >
              Create easily adoptable labs (only a browser is need)
            </p>
          </div>

          <div class="vertical-line col-md-4 ">
            <p class="service-heading landingpage__leftalign" >
              Inform students how to create accessible software
            </p>
          </div>

          <div class="vertical-line col-md-4 ">
            <p class="service-heading landingpage__leftalign">
              Demonstrate the importance of creating accessible software
            </p>
          </div>
        </div>
      </div>
    </section>
    <hr class="horiz" />
    {/* Portfolio Grid */}
    <section class="page-section" id="labs">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Labs</h2>

            <h3 class="section-subheading " >
              Check out the labs below that are available to explore.
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 portfolio-item">
            <a
              class="portfolio-link"
              onClick={() => handleLab(actions, 1)}
              href="#"

            >
              <img
                class="img-fluid landingpage__image"
                src={ear}
                alt="Deaf and Hard of Hearing Activity Thumbnail"
              />
              {/* <!--Image= https://www.pikrepo.com/fiyzt/left-human-ear--> */}
            </a>
            <div class="portfolio-caption">
              <h4>
                <a onClick={() => handleLab(actions, 1)} href="#"
                  >Accessibility to Sound and Speech</a>
              </h4>
              <p class="">
                Learn about designing the web for the Deaf and Hard Of
                Hearing community.
              </p>
            </div>
          </div>
          <div
           class="col-md-4 offset-md-4 portfolio-item">
            <a
              class="portfolio-link"
              onClick={() => handleLab(actions, 2)}
              href="#"
            >

              <img
                class="img-fluid landingpage__image"
                src={eye}
                alt="Color Blindness Activity Thumbnail"
              />
              {/* <!--Image= https://commons.wikimedia.org/wiki/File:Human_eye_iris_5.jpg--> */}
            </a>
            <div class="portfolio-caption">
              <h4>
                <a onClick={() => handleLab(actions, 2)} href="#"
                >Accessibility to Color Blindness
                </a>
              </h4>
              <p class="">
                Learn more about designing the web for color blind individuals.
              </p>
            </div>
          </div>
          </div>

          <div class="row">
            <div class="col-md-4 portfolio-item">
              <a
                class="portfolio-link"
                onClick={() => handleLab(actions, 3)} 
                href="#"
              >
                <img
                  class="img-fluid landingpage__image"
                  src={braille}
                  alt="Screen Reader Activity Thumbnail"
                />
                {/* <!--Image= https://www.flickr.com/photos/quinnanya/4698378320/sizes/l/--> */}
              </a>
              <div class="portfolio-caption">
                <h4>
                  <a onClick={() => handleLab(actions, 3)} href="#"
                  >Accessibility with Screen Readers</a
                  >
                </h4>
                <p class="">
                  Learn more about Screen Readers.
                </p>
              </div>
            </div>
            <div
             class="col-md-4 offset-md-4 portfolio-item">
              <a
                class="portfolio-link"

              >
                <img
                  class="img-fluid landingpage__image"
                  src={hand}
                  alt="Dexterity activity Thumbnail"
                />
                {/* --Image= https://www.needpix.com/photo/1179306/hand-finger-symbol-gesture-characters-note-show-exhort-suggest-- */}
              </a>
              <div class="portfolio-caption">
                <h4>
                  <a
                    >Accessibility to Dexterity</a
                  >
                </h4>
                <p class="">
                  Learn more about designing the web for individuals with motor and dexterity impairments.
                </p>
              </div>
            </div>
            </div>
      </div>
    </section>
    <hr class="horiz" />
    {/* Clients */}
    <section class="py-5">
      <div class="container">
        <div
          class="row landingpage__logos"
        >
          <div class="col-sm-4">
            <a href="https://www.nsf.gov" target="_blank" rel="noopener noreferrer">
              <img
                class="d-block mx-auto"
                src={nsf}
                alt="National Science Foundation"
                height="100"
              />
            </a>
          </div>
          <div class="col-sm-4 landingpage__ritlogo">
            <a href="https://www.rit.edu" target="_blank" rel="noopener noreferrer">
              <img
                class=" d-block mx-auto"
                src={rit}
                alt="Rochester Institute Of Technology"
                height="100"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Contact */}
    <section class="page-section" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Contact Us</h2>
            <h3 class="section-subheading text-primary">
              Connect with us if you have questions. Contact Dr. Daniel Krutz at
              <a class="landingpage__contact" href="mailto:aware@mail.rit.edu "> aware@mail.rit.edu</a>
            </h3>
          </div>
        </div>
      </div>
    </section>
    {/* Footer */}
    <footer class="footer">
      <ul class="list-inline quicklinks">
        <li class="list-inline-item">
          <a
            href="https://www.nsf.gov/pubs/2016/nsf16009/nsf16009.jsp#q37" target="_blank" rel="noopener noreferrer"
            >Available under the Federal Government License</a
          >
        </li>
        <li>
          <a >
            <SiteMap/>
          </a>
        </li>
      </ul>
    </footer>
    </div>
  );
};

export default connect(null,mapDispatchToProps
)(Home);
