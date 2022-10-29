import { Fragment } from "react";
import Button from "./Button";
import { RiShareForwardLine } from "react-icons/ri";
import { FaGithub, FaEllipsisH } from "react-icons/fa";

const LinkTree = () => {
  return (
    <Fragment>
      <div id="container">
        <div className="profile">
          <div className="avatar">
            <FaEllipsisH className="ellipsis" />
            <RiShareForwardLine className="share" />
          </div>
          <img
            className="profile-pics"
            src="my-slack-profile-pics.jpg"
            alt="#"
          />
          <h3 id="twitter">Waliyyullah Olanrewaju Yusuf</h3>
          <h3 id="slack">Olanrewaju Yusuf</h3>
        </div>
        <Button />
        <div className="icon">
          <img className="slack-logo" src="slack-logo.png" alt="#" />
          <FaGithub className="git" />
        </div>
      </div>
      <footer>
        <h2 className="zuri-logo">
          Zuri<span>.</span>Internship
        </h2>
        <p>HNG Intership 9 Frontend Task</p>
        <img className="ingressive" src="I4G-Logo-Color-Cropped.png" alt="#" />
      </footer>
    </Fragment>
  );
};

export default LinkTree;
