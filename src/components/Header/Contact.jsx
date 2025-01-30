import { Component } from "react";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <a href="mailto:humbhiengineer@gmail.com">
          <AiFillMail />
          <span>humbhiengineer@gmail.com</span>
        </a>

        <a href="tel:+919131814057">
          <AiFillPhone />
          <span>+919131814057</span>
        </a>
      </div>
    );
  }
}

export default Contact;
