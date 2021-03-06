import NetflixImage from "../../assets/images/projects/netflix-clone.png";
import NOLMHouseCrhuchImage from "../../assets/images/projects/nolm-house-church.png";
import PortfolioWebsite from "../../assets/images/projects/portfolio-website.png";

export const projects = [
  {
    name: "NOLM House Church",
    image: NOLMHouseCrhuchImage,
    liveLink: "https://www.nolmhousechurch.com",
    githubLink: "https://github.com/jayisback11/nolm",
    description:
      "NOLM House Church is a growing church that welcomes anyone and wants to make a difference. That is why I built this website for my client. People can learn more about NOLM House Church by visiting the website.",
    libraries: ["Firebase", "Material-UI"],
    private: true
  },
  {
    name: "Portfolio Website",
    image: PortfolioWebsite,
    liveLink: "https://www.jaycrisostomo.com",
    githubLink: "https://github.com/jayisback11/portfolio-website-v2",
    description:
      "My first portfolio website was insufficient since it lacked animations and did not demonstrate my abilities. This new portfolio website's goal is to demonstrate what I've learned.",
    libraries: ["react-aos", "react-parallax"],
    private: false
  },
  {
    name: "Netflix Clone",
    image: NetflixImage,
    liveLink: "https://netflix-clone-jc.netlify.app/",
    githubLink: "https://github.com/jayisback11/netflix-clone",
    description:
      "I learned how to work with an API and display movies on a screen. This clone is also mobile responsive. As a result, any device will be able to access this website.",
    libraries: ["Axios", "Dotenv", "Firebase", "Stripe"],
    private: false
  },
];
