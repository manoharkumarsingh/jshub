"use client";

import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { connect } from "react-redux";
import { fetchPost, selectedPost } from "../../Redux/Action/blog-action";
import Card from "@mui/material/Card";

import Textview from "../components/text-view";
const HtmlToReactParser = require("html-to-react").Parser;
const htmlToReactParser = new HtmlToReactParser();

function PersistentDrawerLeft(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    props.fetchPost();
  }, []);

  useEffect(() => {
    setPosts(props.posts.data);
  }, [props.posts]);

  return (
    <>
      {posts && posts.length > 0 ? (
        <div className="main-quest-ans">
          {posts.map((post) => {
            return (
              <Card sx={{ minWidth: 275 }} className="card-sec">
                <Textview
                  title={htmlToReactParser.parse(post.title)}
                  data={htmlToReactParser.parse(post.content)}
                />
              </Card>
            );
          })}
        </div>
      ) : (
        <Loader></Loader>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return { posts: state.blog };
};

const mapDispatchToProps = {
  fetchPost,
  selectedPost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersistentDrawerLeft);
