import React from "react";
import "./Works.css";
import Upwork from "../../img/react.png";
import Fiverr from "../../img/node.jpg";
import Ammazon from "../../img/js.png";
import Shopify from "../../img/express.png";
import Facebook from "../../img/mongodb.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Skills</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          I have practical knowledge in   <br />
          c,c++,java,php, and android language          <br />
          and also know SQL database.          <br />
          l can do HTML and CSS responsive websites for
          you.<br/>Also iam doing these...        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="m-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="m-mainCircle"
        >
          <div className="m-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="m-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="m-secCircle">
            <img src={Ammazon} alt="" />
          </div>
          <div className="m-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="m-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/*background circles */}
        <div className="m-backCircle blueCircle"></div>
        <div className="m-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
