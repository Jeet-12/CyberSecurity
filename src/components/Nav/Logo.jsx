import { Component } from "react";
import logo from "../../assests/logo.png";

class Logo extends Component {
  render() {
    return (
      <div className="logo" style={{ height: "50px", width: "50px", overflow: "hidden", borderRadius: "50%" }}>
        <img src={logo} alt="Logo" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
      </div>
    );
  }
}

export default Logo;
