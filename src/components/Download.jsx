import React from "react";
import "./Download.css";
import downloadImg from "../images/download-image.png";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import CodeIcon from "@mui/icons-material/Code";
import GitHub from "@mui/icons-material/GitHub";

const Download = () => {
  const handleResumeDownload = () => {
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="download-section">
      <div className="download-image">
        <div className="clip-path"></div>
        <img src={downloadImg} />
      </div>

      <div className="download-buttons">
        <div onClick={handleResumeDownload}>
          <p>Download CV</p>
          <DownloadForOfflineRoundedIcon className="download-icon" />
        </div>

        <div>
          <p>View Projects</p>
          <CodeIcon className="download-icon" />
        </div>

        <a
          className="download-link"
          href="https://github.com/AishwaryaParab"
          target="_blank"
        >
          <div>
            <p>GitHub Profile</p>
            <GitHub className="download-icon" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Download;
