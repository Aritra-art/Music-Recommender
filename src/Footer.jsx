import github from "./imgs/icons8-github.svg";
import facebook from "./imgs/icons8-facebook.svg";
import linked from "./imgs/icons8-linkedin-circled.svg";
import instagram from "./imgs/icons8-instagram.svg";

const Footer = () => {
  return (
    <div>
      <footer>
        <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
          Made with 💝 by Aritra Chowdhury
        </p>
      </footer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a href="https://github.com/Aritra-art" target="_blank">
          <img src={github} alt="github" style={{ padding: "8px 4px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/aritra-chowdhury-b95a66227/"
          target="_blank"
        >
          <img src={linked} alt="linkedin" style={{ padding: "0px 8px" }} />
        </a>
        <a
          href="https://www.facebook.com/aritra.chowdhury.549/"
          target="_blank"
        >
          <img src={facebook} alt="facebook" style={{ padding: "0px 8px" }} />
        </a>
        <a href="https://www.instagram.com/aritra_papan/" target="_blank">
          <img src={instagram} alt="instagram" style={{ padding: "0px 8px" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
