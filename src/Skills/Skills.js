import React, { Component } from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { TiSocialGithub } from "react-icons/ti";
import { FaSass } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaEnvira } from "react-icons/fa";

export default class Skills extends Component {
  render() {
    return (
      <section className="section-feature">
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              {/* this who chunk is a box */}
              <i className="feature-box_icon icon-basic-world">
                <FaReact />
              </i>
              <h3 className="heading-tertiary u-margin-bottom-small">REACT</h3>
              <p className="feature-box_text">
                I really enjoy using React! The ability to componentize pieces
                of my wepapps helps make solving large projects simpler. How do
                you eat a whale; one bite at a time!
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box_icon icon-basic-world">
                <FaHtml5 />
              </i>
              <h3 className="heading-tertiary u-margin-bottom-small">HTML5</h3>
              <p className="feature-box_text">
                Before React/JSX, HTML5 was what I used. I still use the basic
                principles of HTML5 in React to describe what the UI should look
                like.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box_icon icon-basic-world">
                <TiSocialGithub />
              </i>
              <h3 className="heading-tertiary u-margin-bottom-small">GitHub</h3>
              <p className="feature-box_text">
                I always am using GitHub to save points in my projects. I also
                enjoy using it when collaborating with others.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box_icon icon-basic-world">
                <FaSass />
              </i>
              <h3 className="heading-tertiary u-margin-bottom-small">Sass</h3>
              <p className="feature-box_text">
                Learning Sass has been a game changer for me when it comes to
                implementing designs. I feel like a kid in a sand box when using
                Sass!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box_icon icon-basic-world">
                <FaNodeJs />
              </i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Node.js
              </h3>
              <p className="feature-box_text">
                NodeJS allows me to get and manipulate data without using a typical backend language.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box_icon icon-basic-world">
                <FaCss3Alt />
              </i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                CSS3
              </h3>
              <p className="feature-box_text">
                While I prefer styling in Sass, CSS is still widely used in the developer world. I can read and write CSS.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box_icon icon-basic-world">
                <i class="fab fa-npm" />
              </i>
              <h3 className="heading-tertiary u-margin-bottom-small">NPM</h3>
              <p className="feature-box_text">
                NPM is my go to software registry. I can search for
                packages/tools to get jobs done faster and more efficiently. I
                LOVE NPM!
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box_icon icon-basic-world">
                <FaEnvira />
              </i>
              <h3 className="heading-tertiary u-margin-bottom-small">GUI</h3>
              <p className="feature-box_text">
                I am most familiar with MongoDB Compass. I enjoy being able to view my data in an interface.  Compass also speeds things up when I want to add, delete or modify data.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
