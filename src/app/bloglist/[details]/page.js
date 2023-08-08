"use client";
import React from "react";
import { connect } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
const HtmlToReactParser = require("html-to-react").Parser;
const htmlToReactParser = new HtmlToReactParser();

function page(props) {
  const { title, content, id } = props.selectedPost;
  const router = useRouter();

  const gotohome = () => {
    router.push("/");
  };

  return (
    <div className="posts-section">
      <div>{htmlToReactParser.parse(title)}</div>
      {htmlToReactParser.parse(content)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { selectedPost: state.blog.selectedPost };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(page);
