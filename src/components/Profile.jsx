import { Fragment } from "react";
import Button from "./Button";
import Footer from "./footer";
import { FaGithub, FaEllipsisH } from "react-icons/fa";

const LinkTree = () => {
  return (
    <Fragment>
      <div id="container">
        <div className="profile">
          <div className="avatar">
            <FaEllipsisH className="ellipsis" />
            <img src="Icon.png" alt="#" className="share" />
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
      <Footer />
    </Fragment>
  );
};

export default LinkTree;
