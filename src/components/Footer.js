import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="inner">
        <div>© {new Date().getFullYear()} Elyy — Built with React</div>
      </div>
    </footer>
  );
}
