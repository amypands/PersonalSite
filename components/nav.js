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
                href="https://github.com/"
              >
                GitHub{' '}
                <i className="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
