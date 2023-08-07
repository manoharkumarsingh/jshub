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
      <Card sx={{ minWidth: 275 }} key={id}>
        <div className="go-to-home">
          <CardActions>
            <Button size="small" onClick={() => gotohome()}>
              Go to home
            </Button>
          </CardActions>
        </div>

        <CardContent>
          <Typography variant="h5" component="div">
            <div>{htmlToReactParser.parse(title)}</div>
          </Typography>
          <Typography variant="body2">
            <div className="post-content">
              {htmlToReactParser.parse(content)}
            </div>
            <br />
          </Typography>
          <div className="go-to-home">
            <CardActions>
              <Button size="small" onClick={() => gotohome()}>
                Go to home
              </Button>
            </CardActions>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { selectedPost: state.blog.selectedPost };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(page);
