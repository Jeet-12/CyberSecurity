import { Component } from "react";
import Work from "./Work_box";
import "./style.css";
class Portfolio extends Component {
  constructor() {
    super();
    this.works = [
      {
        img: "https://miro.medium.com/max/1400/0*MYd28f8vpLiE34ij.jpeg",
        title: "Modern UI/UX Dashboard Design",
        text:
          "Our modern UI/UX dashboard design is intuitive, responsive, scalable, interactive, engaging, minimalist, elegant, efficient, user-friendly, and dynamic"
      },
      {
        img:
          "https://i.pinimg.com/originals/80/a1/17/80a1173fb50fe01bac507532338eb336.png",
        title: "Food and Consumation Web App",
        text:
          "Our food and consumption web app delivers a seamless, intuitive, and engaging experience, ensuring efficient, responsive, and user-friendly interactions for scalable, smart solutions."
      },
      {
        img:
          "https://i.pinimg.com/originals/56/ae/76/56ae76f7bc1b3e0edc962cea1af7035f.png",
        title: "Future Social Media Web 3.0 d'App",
        text:
          "Our Future Social Media Web 3.0 dApp is decentralized, interactive, secure, scalable, user-friendly, immersive, innovative, efficient, engaging, and blockchain-powered."
      }
    ];
  }
  render() {
    return (
      <section className="container container__portfolio" id="portfolio">
        {/* <div className="portfolio__header">
          <h1>See Our Works Or Portfolio</h1>
          <button className="btn btn-primary">More About</button>
        </div> */}
        {this.works.map((work, index) => {
          if (index == 1) {
            return (
              <>
                <div className="portfolio__header">
                  <h1>See Our Works Or Portfolio</h1>
                  <a href="tel:+919131814057" className="text">
                  <button className="btn btn-primary">More About</button>
                  </a>
                </div>
                <Work img={work.img} title={work.title} text={work.text} />
              </>
            );
          }
          return <Work img={work.img} title={work.title} text={work.text} />;
        })}
      </section>
    );
  }
}
export default Portfolio;
