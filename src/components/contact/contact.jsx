import { useRef } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5pihye8', 'template_pob15qf', form.current, {
        publicKey: 'yNmU3Lh_CvYOKTlEQ',
      })
      .then(
        () => {
          alert('SUCCESS!');
          e.target = ''
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };
  
  return (
    <section id="contact">
      <div className="container contact">
      <h5>Let &#39;s Talk!</h5>
      <p>
        A question? proposal? idea? want to say hello? &nbsp; You are welcome.
      </p>
      <form onSubmit={sendEmail} target="_blank" ref={form} id="form">
          <div className="details">
            <div className="name">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your name"
                required
              />
            </div>
            <div className="email">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your email"
                required
              />
            </div>
          </div>
          <div className="message">
            <label>Your Message</label>
            <textarea
              placeholder="Hi, we need a design system for our products at Company X. How soon can you hop on to discuss this?"
              name="message"
              id="message"
              cols="30"
              rows="7"
            ></textarea>
          </div>
          <button type="submit" className="submitBtn">Send</button>
      </form>
      </div>
    </section>
  );
};

export default Contact;
