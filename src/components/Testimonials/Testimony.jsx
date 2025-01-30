import { Component } from "react";

class Testimony extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="testimony">
        <div className="testimony__avatar">
          <img src={this.props.img} />
        </div>
        <div className="testimony__comment">
          <p className="text">
          Transforming cybersecurity landscapes with cutting-edge solutions, unmatched expertise, and unwavering commitment to digital safety.
          </p>
          <p className="text">
            <strong style={{ color: "black" }}>Jeet Dewangan / </strong>
            Cyber Security Enthusiast | Software Developer | Full Stack Developer
          </p>
        </div>
      </div>
    );
  }
}
export default Testimony;
