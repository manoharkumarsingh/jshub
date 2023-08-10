"use client";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Textview = (props) => {
  const [showFullText, setShowFullText] = useState(false);
  const [data, setData] = useState({ full: "", less: "" });
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  useEffect(() => {
    const lessData = props.data;
    let newLess = [];
    let lineCount = 0;
    lessData.forEach((element) => {
      if (lineCount < 3) {
        newLess.push(element);
        if (typeof element.props.children == "string") {
          lineCount++;
        }
      }
    });
    setData({ full: props.data, less: newLess });
  }, [props.data]);

  return (
    <>
      <div className="question">
        <div className="left-sec">{props.title}</div>
        <div className="right-sec">
          <Button size="small" onClick={toggleText}>
            {showFullText ? "Read Less" : "Read More"}
          </Button>
        </div>
      </div>
      <div className="ques-ans-sec  content">
        <Typography paragraph>
          {showFullText ? data.full : data.less}
        </Typography>
      </div>
      <div className="read-more-button">
        <Button size="small" onClick={toggleText}>
          {showFullText ? "Read Less" : "Read More"}
        </Button>
      </div>
    </>
  );
};

export default Textview;
