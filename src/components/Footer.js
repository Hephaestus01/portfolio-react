import React, {useState} from "react";

export default function Footer() {
const [_, setCurrentColor] = useState()

const [lightMode, setLight] = useState(false)

  const toggleLight = () => {
    if (!lightMode) {
      setCurrentColor(
        document
          .querySelector(":root")
          .style.setProperty("--color-0", "#f1f7ee")
          // .style.setProperty("--color-1", "#8e52f5")
          // .style.setProperty("--color-2", "#fc0ff5")
          // .style.setProperty("--color-3", "#8e52f5")
      );
      setLight(true);
    } if (lightMode) {
            setCurrentColor(
              document
                .querySelector(":root")
                .style.setProperty("--color-0", "#0c1e3e")
                // .style.setProperty("--color-1", "#38fbdb")
                // .style.setProperty("--color-2", "#fc0ff5")
                // .style.setProperty("--color-3", "#8e52f5")
            );
            setLight(false);
    }
  };

  return (
    <footer className="footer">
      <div>
        <h3>made by Matt Hlavaty</h3>
      </div>
      <div className="footer-icons">
        <a href="https://github.com/Hephaestus01">
          <img
            src={require(`../assets/images/github-logo.png`)}
            alt="github link"
          />
        </a>
      </div>
      <div>
        <button type="button" onClick={toggleLight}>
          Dark / Light
        </button>
      </div>
    </footer>
  );
}
