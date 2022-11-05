import Footer from "./footer";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }
  return (
    <>
      <div className="contact-us">
        <h1>Contact Me</h1>
        <p className="detail">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="first_name">
              First name
              <input
                id="first_name"
                name="first_name"
                type="text"
                placeholder="Enter your first name"
                required
              />
            </label>
            <label htmlFor="last_name">
              Last name
              <input
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Enter your last name"
                required
              />
            </label>
          </div>
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              placeholder="yourname@email.com"
              required
            />
          </label>
          <label htmlFor="message" className="message">
            Message
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Send me a message and i'll reply you as soon as possible..."
            ></textarea>
          </label>
          <label htmlFor="checkbox">
            <input
              id="checkbox"
              name="checkbox"
              type="checkbox"
              required
              className="inline"
            />
            You agree to providing your data to Olanrewaju Yusuf who may contact
            you.
          </label>
          <button id="btn__submit" type="submit">
            Send message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
