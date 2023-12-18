import React from "react";

export default function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div className="row m-auto">
          <div className="text-light h2" data-testid="title">{props.title}</div>
        </div>
      </div>
    </nav>
  );
}
