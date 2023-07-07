import React from "react";
import { Paper } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import beetposLogo from "../../../images/logo beetPOS new.png";
import roboparkLogo from "../../../images/Logo_robopark.png";
import styles from "./aboutpage.module.css";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Paper elevation={1} style={{ padding: "1rem", height: "100%" }}>
        <div className={styles.wrapperContent}>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-row justify-content-center pb-5">
              <img
                src={roboparkLogo}
                style={{
                  width: "30%",
                  height: "40%",
                  paddingTop: "1rem"
                }}
                alt="Logo BeetPOS"
              />

              <div className="pl-5">
                <img
                  src={beetposLogo}
                  style={{
                    width: "100%",
                    height: "100%"
                  }}
                  alt="Logo BeetPOS"
                />
              </div>
            </div>
            <h6>POS System</h6>
            <h5>Version 1.0.1</h5>
            <br />
            &copy; 2021 Lifetech
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default AboutPage;
