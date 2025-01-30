import { Component } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import HotNews from "./News__Hot";
import LatestNews from "./News__Latest";
import "./style.css";

class News extends Component {
  constructor() {
    super();
    this.hotNews = [
      {
        title: "Ransomware Attack Cripples Major Hospital Chain",
        avatar:
          "https://media.licdn.com/dms/image/v2/D4E03AQEtpEmW1OWfng/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1667319071310?e=2147483647&v=beta&t=K7PvAdYX2ZocC6yxvDLgtJbXw7hbHdhkvDNxLK65wIs",
        text:
          "A ransomware attack disrupted operations at a leading hospital chain, delaying critical patient care. The incident highlights the importance of robust cybersecurity measures, including regular backups and employee training, to protect sensitive data and ensure operational continuity.",
          author: "Jane Doe",
        role: "Cybersecurity Analyst"
      },
      {
        title: "Data Breach Exposes Millions of User Credentials",
        avatar:
          "https://media.licdn.com/dms/image/v2/C4E03AQFBkkU0Sa95YQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1574166307384?e=2147483647&v=beta&t=Limpqc4WSYTYbGkHPH8aDWUEus2igA9KFnfyZSmgLLM",
        text:
          "A major social media platform suffered a data breach, exposing millions of user credentials. This underscores the need for strong encryption, multi-factor authentication, and proactive threat monitoring to safeguard user information and prevent unauthorized access",
           author: "John Smith",
        role: "Cybersecurity Consultant"
      }
    ];
    this.lastestNews = [
      {
        img:
          "https://static.internetfreedom.in/content/images/2023/07/National-Cyber-Security-Strategy.jpg",
        date: "October 2023",
        author: "Rajesh Kumar",
        text:
          "The Indian government launched the National Cybersecurity Strategy 2023 to bolster digital infrastructure. It emphasizes public-private partnerships, incident response improvements, and cyber threat awareness, addressing rising attacks on healthcare, finance, and government systems"
      },
      {
        img:
          "https://blog.logrocket.com/wp-content/uploads/2022/03/client-side-routing-react-location.png",
        date: "October 2023",
        author: "Rajesh Kumar",
        text:
          "India's new cybersecurity strategy aims to protect critical sectors like healthcare and finance. By enhancing collaboration, response mechanisms, and awareness, the government seeks to counter increasing cyberattacks and safeguard the nation's digital ecosystem"
      }
    ];
  }
  render() {
    return (
      <section id="news" className="container news__container">
        <Swiper className="news__hot" pagination={true} modules={[Pagination]}>
          {this.hotNews.map((feed, index) => {
            return (
              <SwiperSlide>
                <HotNews
                  title={feed.title}
                  text={feed.text}
                  avatar={feed.avatar}
                  author={feed.author}
                  role={feed.role}
                  key={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="news__latest">
          <h1>Get The Latest News Here</h1>
          {this.lastestNews.map((feed) => {
            return (
              <LatestNews
                img={feed.img}
                date={feed.date}
                author={feed.author}
                text={feed.text}
              />
            );
          })}
        </div>
      </section>
    );
  }
}
export default News;
