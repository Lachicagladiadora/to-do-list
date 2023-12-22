import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties } from "react";

type FooterProps = {
  style?: CSSProperties;
};

export const Footer = ({ style }: FooterProps) => {
  return (
    <footer
      style={{
        width: "100%",
        display: "flex",
        gap: "10px",
        background: "#0B0E0D",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        color: "#d8fcf6ca",
        fontFamily: "monospace",
        fontSize: "24px",
        ...style,
      }}
    >
      <span>by Lachicagladiadora</span>
      <a
        href="https://github.com/Lachicagladiadora"
        target="_blank"
        style={{
          background: "transparent",
          fontSize: "30px",
          color: "#48c0ac",
        }}
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
