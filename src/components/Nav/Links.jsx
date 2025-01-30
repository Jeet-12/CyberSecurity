import { Component } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";


class Links extends Component {
  constructor() {
    super();
    this.links = [
      "home",
      "about",
      "services",
      "portfolio",
      "testimony",
      "contact",
    ];
    this.state = {
      linksVisibility: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((lastState) => ({
      linksVisibility: !lastState.linksVisibility,
    }));
  }

  render() {
    return (
      <>
        <div className="links__button">
          <button className="btn menu" onClick={this.toggleVisibility}>
            {this.state.linksVisibility ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
        <div
          className={`links ${this.state.linksVisibility ? "show__links" : ""}`}
        >
          {this.links.map((link, index) => (
            <a
              key={link}
              className={!index ? "active" : ""}
              href={`#${link}`}
              onClick={this.toggleVisibility}
            >
              {link}
            </a>
          ))}
        </div>
      </>
    );
  }
}

export default Links;