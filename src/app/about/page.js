import React from "react";
import Typography from "@mui/material/Typography";
import "./style.css";

function page() {
  return (
    <div className="about-page">
      <div className="about-me-summary">
        <div className="about-me-content">
          <section className="about-us">
            <div className="about">
              {/*<img src="girl.png" class="pic">*/}
              <div className="text">
                <Typography variant="h4" gutterBottom>
                  I'm
                </Typography>
                <Typography variant="h4" gutterBottom>
                  MANOHAR KUMAR SINGH
                </Typography>

                <Typography variant="h6" gutterBottom>
                  Front-end Developer &amp; <span>Designer</span>
                </Typography>
                <Typography variant="h7" gutterBottom>
                  Experienced Software Engineer with a demonstrated history of
                  working in the information services industry. Skilled in Js,
                  Jquery, React js, Redux, Vue Js, Vuex,Node JS, Mysql, MongoDB.
                  Strong engineering professional with a Master degree focused
                  in Computer Science from National Institute of Technology
                  Calicut.
                </Typography>

                <div className="data">
                  <a
                    target="_blank"
                    href="https://manoharkumarsingh.github.io/myportfolio/"
                    className="hire"
                  >
                    More about me
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default page;
