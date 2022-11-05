import { Fragment } from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Fragment>
      <a id="twitter__link" href="https://twitter.com/WaliyyullahY">
        Twitter Link
      </a>
      <a id="btn__zuri" href="https://training.zuri.team/">
        Zuri Training
      </a>
      <a id="books" href="http://books.zuri.team">
        Zuri Bookshop
      </a>
      <a
        id="book__python"
        href="https://books.zuri.team/python-for-beginners?ref_id=<olanrewajuyusuf"
      >
        Python Books
      </a>
      <a id="pitch" href="https://background.zuri.team">
        Backgound Check for Coders
      </a>
      <a id="book__design" href="https://books.zuri.team/design-rules">
        Design Books
      </a>
      <Link id="contact" to="/contact">
        Contact Me
      </Link>
    </Fragment>
  );
};

export default Button;
