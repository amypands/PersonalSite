import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav";
import Line from "../components/line";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <div className="section-1">
        <div className="container landing">
          <div className="row">
            <div className="col-md-6 col-sm-12 landing-content">
              <p className="introline">
                {" "}
                <Line /> Hello my name is
              </p>
              <h1 className="name">Amy Pandya</h1>
              <p className="aboutme">
                I am a design-oriented front-end developer. I build web <br />{" "}
                applications through carefully crafted code and human design.
              </p>
            </div>
            <div className="col-md-6  col-sm-12">
              <div className="selfportrait">
                <img src="self portrait.jpeg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6  col-sm-12">
              <h2>
                <Line />
                About Me
              </h2>
              <p>
                I'm Amy Pandya, a web developer based in Toronto. <br />
                I am looking to work with other teams to build high quality
                websites.
                <br />
                I am completed a Bachelors of Science in Nutrition and Food at
                Ryerson <br />
                University, along with a minor in general marketing. I am highly
                interested <br />
                in developing human centric design with a focus on accesibility
                and strong <br />
                brand aesthetics.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6  col-sm-12"></div>
            <div className="col-md-6  col-sm-12">
              <h2>
                <Line />
                Skills
              </h2>

              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <h3>Languages</h3>
                  <ul>
                    <li> CSS </li>
                    <li> SASS </li>
                    <li> JavaScript(ES6+) </li>
                    <li> HMTL5 </li>
                  </ul>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h3>Libraries and Frameworks</h3>
                  <ul>
                    <li> React </li>
                    <li> Redux </li>
                    <li> Bootstrap </li>
                    <li> Semantinc UI </li>
                    <li> Node.js</li>
                    <li> Express </li>
                    <li> Next.js </li>
                    <li> Create-React-App </li>
                  </ul>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h3>Tools</h3>
                  <ul>
                    <li> Git </li>
                    <li> Vercel </li>
                    <li> MongoDB </li>
                    <li> Mongoose </li>
                    <li> Passport</li>
                    <li> Visual Studio Code </li>
                    <li> Atom </li>
                  </ul>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h3>Other</h3>
                  <ul>
                    <li> Marketing </li>
                    <li> Stakeholder Management </li>
                    <li> Public Speaking </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
