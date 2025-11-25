import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="page page-contact">
      <div className="container">
        <h2>Contact</h2>
        <p>If you'd like to work together — email me at <a href="mailto:rajjeremiah.ocampo.28@gmail.com">youremail@example.com</a></p>

        <form className="contact-form" onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          const subject = encodeURIComponent(fd.get('subject') || '');
          const body = encodeURIComponent(`Name: ${fd.get('name')}\n\n${fd.get('message')}`);
          window.location.href = `mailto:rajjeremiah.ocampo.28@gmail.com?subject=${subject}&body=${body}`;
        }}>
          <div className="row">
            <input name="name" placeholder="Your name" required />
            <input name="email" placeholder="Your email" type="email" required />
          </div>
          <input name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Message" required />
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
