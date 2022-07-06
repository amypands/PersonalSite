import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav";
import Line from "../components/line";

export default function Home() {
  const certs = [
    {
      certName: "Modern React with Redux",
      description:
        "Became fluent in the toolchain supporting React, including NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax.",
      link: "https://ude.my/UC-4886258e-54c6-4b4a-afe9-ee4e1d4b6a23",
      screenshot:
        "https://img-c.udemycdn.com/course/240x135/705264_caa9_11.jpg",
    },
    {
      certName: "Node with React Fullstack Web Development",
      description:
        "Combined the ultra-popular React, Redux, Express, and MongoDB technologies to build a fullstack web application.",
      link: "https://ude.my/UC-4886258e-54c6-4b4a-afe9-ee4e1d4b6a23",
      screenshot:
        "https://img-c.udemycdn.com/course/240x135/705264_caa9_11.jpg",
    },
    {
      certName: "Node.js: The Complete Guide to Build RESTful APIs (2018)",
      description:
        "Learned to build fast, scalable and secure RESTful services with Node, Express and MongoDB, from setup to production.",
      link: "https://www.udemy.com/certificate/UC-8b541b1b-6a1a-4e13-beca-e9d1c4ed74e2/",
      screenshot: "https://img-c.udemycdn.com/course/480x270/1638522_fbdf.jpg",
    },
    {
      certName: "Javascript Basics for Beginners",
      description:
        "Used JavaScript to build web and mobile apps, real-time networking apps, command-line tools, and games.",
      link: "https://www.udemy.com/certificate/UC-68fe9f5d-6017-4e06-b1ac-dd1ac58179e9/",
      screenshot: "https://img-c.udemycdn.com/course/480x270/1743420_0062.jpg",
    },
    {
      certName: "The Complete 2022 Web Development Bootcamp",
      description:
        "HTML5, CSS3, Bootstrap4, Javascript ES6, DOM Manipulation,jQuery,Bash Command Line, Git, GitHub and Version Control, Backend Web Development, Node.js, NPM, Express.js, EJS, REST, APIs, Databases, SQL, MongoDB, Mongoose, Authentication, Firebase, React.js, React Hooks, Web DesignDeployment with GitHub Pages, Heroku and MongoDB Atlas",
      link: "https://ude.my/UC-4886258e-54c6-4b4a-afe9-ee4e1d4b6a23",
      screenshot:
        "https://img-c.udemycdn.com/course/240x135/705264_caa9_11.jpg",
    },
  ];

  const projects = [
    {
      Name: "Pitch-Bot",
      Description:
        " Enter some key words or a sentence below about your desired plot and Pitch Bot will create a movie pitch just for you.",
      Highlights: "HTML CSS Javascript Open AI",
      Link: "https://github.com/amypands/Shopify-Movie-Site",
      Site: "https://shopify-movie-site.vercel.app"
    },
    {
      Name: "Video Player",
      Description:
        "Video player using APIs to search and play videos. Developed using React and Redux.",
      Highlights: "React Redux APIs",
      Link: "https://github.com/amypands/react-videos",
      Site: "https://react-videos-flax.vercel.app"
    },
    {
      Name: "Picture Search Application",
      Description:
        "A simple search application using APIs to access and select photos. Utilizes React and Unsplash API.",
      Highlights: "React Unsplash API",
      Link: "https://github.com/amypands/React-pics",
      Site: "https://react-pics-cyan.vercel.app"
    },
    {
      Name: "Widgets",
      Description:
        "This is a compilation of single page applications using ReactJS and Redux with fundamental features including JSX, state, hooks, and props.",
      Highlights: "React Redux ",
      Link: "https://github.com/amypands/widgets",
      Site: "https://widgets-one-steel.vercel.app"
    },
    {
      Name: "Season Display",
      Description:
        "This is an application that identifies the users current climate using geolocation and displays a relevant message. It demonstrates the use of state, props, async operations, and lifecycle methods.",
      Highlights: "React Redux",
      Link: "https://github.com/amypands/season-display",
      Site: "https://season-display-rouge.vercel.app"
    },
    {
      Name: "Robbie's World",
      Description:
        "Gallery site demonstrating photo carousels and Semantic UI widgets",
      Highlights: "Javascript, React, Next.js, HMTL, CSS, Semantic UI",
      Link: "https://github.com/amypands/robbie-site",
      Site: "https://robbie-site.vercel.app"
    },
  ];
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
                I am a design-oriented <strong>front-end</strong> developer. I
                build web <br /> applications through carefully crafted code and
                human design.
              </p>
              <a className="contact-button" href="mailto:amykpandya@gmail.com">
                <i className="bi bi-mailbox"></i> Get In Touch
              </a>
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
              <div className='photo2'>
                <img src="robandamy.JPG"></img>
              </div>
            </div>
            <div className="col-md-6  col-sm-12">
              <h2>
                <Line />
                About Me
              </h2>
              <p>
                I&apos;m Amy Pandya, a web developer based in Toronto. <br />
                I am looking to work with other teams to build high quality
                websites.
                <br />
                I have completed a Bachelors of Science in Nutrition and Food at
                Ryerson <br />
                University, along with a minor in general marketing. I am highly
                interested <br />
                in developing human centric design with a focus on accessibility
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
            <div className="col-md-12  col-sm-12">
              <h2>
                <Line />
                Skills
              </h2>
              <br />

              <div className="row">
                <div className="col-md-3 col-sm-12">
                  <h3>Languages</h3>
                  <ul>
                    <li> CSS </li>
                    <li> SASS </li>
                    <li> JavaScript(ES6+) </li>
                    <li> HMTL5 </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-12">
                  <h3>
                    Libraries &amp; <br /> Frameworks
                  </h3>
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
                <div className="col-md-3 col-sm-12">
                  <h3>Tools</h3>
                  <ul>
                    <li> Git </li>
                    <li> Vercel </li>
                    <li> MongoDB </li>
                    <li> Mongoose </li>
                    <li> Passport</li>
                    <li> Visual Studio Code </li>
                    <li> Atom </li>
                    <li> RESTful APIs</li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-12">
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
      <div className="section-3">
        <div className="container">
          <h2>
            <Line />
            Certifications
          </h2>
          <br />
          <div className="row">
            {certs.map((cert) => {
              return (
                <div key={cert.certName} className="col-md-6 col-sm-12 cert">
                  <div className="row">
                    <div className="col-6">
                      <h3>{cert.certName}</h3>
                      <p>{cert.description}</p>
                      <a href={cert.link}>
                        <i className="bi bi-arrow-right-circle"></i>
                        View Certificate
                      </a>
                    </div>
                    <div className="col-6">
                      {" "}
                      <img src={cert.screenshot}></img>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="section-4">
        <div className="container">
          <h2>
            <Line />
            Projects
          </h2>
          <br />
          <div className="row">
            {projects.map((project) => {
              return (
                <div className="col-md-4 col-sm-12" key={project.Name}>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-header">
                        <h3>{project.Name}
                        </h3>
                        <a
                          href={project.Site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-link"></i>
                        </a>
                      </div>
                      <p className="card-text">{project.Description}</p>
                    </div>
                    <div className="card-footer">{project.Highlights}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="section-5">
        <p>Created by Amy Pandya 2022</p>
        <div>
          <a href="https://github.com/amypands/PersonalSite">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/amy-pandya-03282211b/">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
}
