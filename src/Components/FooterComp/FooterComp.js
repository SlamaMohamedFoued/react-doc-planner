import React from "react";
import "./FooterComp.css";

const FooterComp = () => {
  return (
    <div>
      <hr />
      <p className="footer-line-1">
        We are leaders in 10 countries:
        <a href="#">Poland</a>,<a href="#">Turkey</a>,<a href="#">Spain</a>,
        <a href="#">Italy</a>,<a href="#">Czech Republic</a>,
        <a href="#">Mexico</a>,<a href="#">Colombia</a>,<a href="#">Brazil</a>,
        <a href="#">Argentina</a> and
        <a href="#"> Chile</a>
      </p>
      <p className="footer-line-2">
        This site uses cookies to deliver services in accordance with this
        Privacy Policy. You can specify the conditions for storing or accessing
        cookies on your browser.
      </p>
      <p className="footer-line-2">www.docplanner.com © 2019</p>
    </div>
  );
};

export default FooterComp;
