import React from "react";
import "./../styles/Card.css";

export default function Card({ title, subtitle, children }) {
  return (
    <div className="card">
      <div className="card-head">
        <h3>{title}</h3>
        {subtitle && <small>{subtitle}</small>}
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}
