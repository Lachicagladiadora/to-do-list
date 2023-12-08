import {
  faGithub,
  faGithubAlt,
  faGithubSquare,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faGitkraken } from "@fortawesome/free-brands-svg-icons/faGitkraken";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        display: "flex",
        // flexDirection: "column",
        gap: "10px",
        background: "#0B0E0D",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        color: "#d772a3",
        position: "absolute",
        bottom: "0px",
      }}
    >
      <span
        style={{
          background: "#0B0E0D",
          color: "#e6e6e69e",
        }}
      >
        by Lachicagladiadora
      </span>
      <a
        href="https://github.com/Lachicagladiadora"
        target="_blank"
        style={{ background: "#0B0E0D", fontSize: "30px", color: "#0b5d3e" }}
      >
        <FontAwesomeIcon
          icon={faGithub}
          style={{ background: "transparent" }}
        />
      </a>
      <span
        style={{
          background: "#0B0E0D",
          color: "#e6e6e69e",
        }}
      >
        2023
      </span>
    </footer>
  );
};
