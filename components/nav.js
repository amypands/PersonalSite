import React from "react";
export default () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="title">Amy Pandya</div>
        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/amy-pandya-03282211b/"
              >
                LinkedIn{' '}
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/amypands"
              >
                GitHub{' '}
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:amykpandya@gmail.com"
              >
                Email{' '}
                <i className="bi bi-envelope-open-heart"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                href="/AmyPandyaResume.pdf"
              >
                Resumé{' '}
                <i className="bi bi-file-earmark-pdf"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
