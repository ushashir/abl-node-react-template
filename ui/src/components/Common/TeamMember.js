import React from 'react';
import { Link } from "react-router-dom";

function TeamMember(props) {
  return (
    <div className="col-sm-12 col-md-12 col-lg-4">
    <div className="team-member">
      <img className="mx-auto rounded-circle" src={props.image} alt="" />
      <h4>{props.name}</h4>
      <p className="text-muted">{props.title}</p>
      <ul className="list-inline social-buttons">
        <li className="list-inline-item">
          <Link target="_blank" rel="noopener" to={props.github}>
            <i className="fab fa-github"></i>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link target="_blank" rel="noopener" to={props.linkedin}>
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link target="_blank" rel="noopener" to={props.twitter}>
            <i className="fab fa-twitter"></i>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link target="_blank" rel="noopener" to={props.facebook}>
            <i className="fab fa-facebook"></i>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link target="_blank" rel="noopener" to={props.stackflow}>
            <i className="fab fa-stack-overflow"></i>
          </Link>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default TeamMember
