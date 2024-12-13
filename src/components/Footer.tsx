import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties } from "react";

type FooterProps = {
  style?: CSSProperties;
};

export const Footer = ({ style }: FooterProps) => {
  return (
    <footer style={{ ...style }}>
      <span>by Lachicagladiadora</span>
      <a
        href="https://github.com/Lachicagladiadora"
        target="_blank"
        className="icon-footer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          style={{ background: "transparent" }}
        />
      </a>
      <span style={{ background: "transparent" }}>2023</span>
    </footer>
  );
};
