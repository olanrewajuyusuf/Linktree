import { Fragment } from "react";

const Button = () => {
  return (
    <Fragment>
      <a href="https://twitter.com/WaliyyullahY">
        <button id="btn_zuri">Twitter Link</button>
      </a>
      <a href="https://training.zuri.team/">
        <button id="btn_zuri">Zuri Training</button>
      </a>
      <a href="http://books.zuri.team">
        <button id="books">Zuri Bookshop</button>
      </a>
      <a href="https://books.zuri.team/python-for-beginners?ref_id=<olanrewajuyusuf">
        <button id="book_python">Python Books</button>
      </a>
      <a href="https://background.zuri.team">
        <button id="pitch">Backgound Check for Coders</button>
      </a>
      <a href="https://books.zuri.team/design-rules">
        <button id="book_design">Design Books</button>
      </a>
    </Fragment>
  );
};

export default Button;
