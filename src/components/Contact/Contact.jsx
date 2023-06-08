import { useForm } from "@formspree/react";

import Heading from "../UI/Heading";
import P from "../UI/P";

import "./Contact.scss";

const Contact = () => {
  const [state, handleSubmit] = useForm("xzbyaeyk");

  return (
    <div className="contact-section" id="contact">
      <Heading>Contact</Heading>
      <div className="contact-content">
        <div className="contact-text">
          <P>
            Looking for a creative and passionate candidate to join your team?
            Contact me
          </P>
          <br />
          <P>
            and I'll respond within 24 hours. I'm excited to work with a
            creative and enthusiastic team!
            <br />
            <br />
            <em>
              ( if contact forms aren't your thing... ) send me an email at
            </em>
            <br />
            <a
              href="mailto: dipakkumartomar758@gmail.com"
              className="underline"
            >
              dipakkumartomar758@gmail.com
            </a>
          </P>
        </div>
        <div className="contact-form">
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Karim Benzema"
              />
            </div>
            <div>
              <label htmlFor="email">Email *</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can I help you?"
              ></textarea>
              {state.succeeded && (
                <p className="thank-you">Thanks for your message!</p>
              )}
            </div>

            <button
              className="button"
              type="submit"
              name="Hover"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
