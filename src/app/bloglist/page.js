"use client";
import { styled, useTheme } from "@mui/material/styles";

import React, { useEffect, useLayoutEffect, useState } from "react";
import Loader from "../components/Loader";
import { connect } from "react-redux";
import { fetchPost, selectedPost } from "../../Redux/Action/blog-action";
import Button from "@mui/material/Button";

import { useRouter } from "next/navigation";
import Typography from "@mui/material/Typography";
const HtmlToReactParser = require("html-to-react").Parser;
const htmlToReactParser = new HtmlToReactParser();

function PersistentDrawerLeft(props) {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  useEffect(() => {
    props.fetchPost();
  }, []);

  useEffect(() => {
    setPosts(props.posts.data);
  }, [props.posts]);

  useLayoutEffect(() => {
    const posts = document.querySelectorAll(".post-content");
    posts.forEach((el) => {
      if (htmlToReactParser.parse(el.textContent).length > 500) {
        let text = el.innerHTML.slice(0, 500);
        // let text = el.innerHTML;
        // console.log(text);
        el.innerHTML = text;
      }
    });
  });

  const handleDetails = (post) => {
    props.selectedPost(post);
    router.push(`/bloglist/${post.id}`);
  };

  return (
    <>
      {posts && posts.length > 0 ? (
        <>
          {posts.map((post) => {
            return (
              <>
                <div>{htmlToReactParser.parse(post.title)}</div>
                <Typography paragraph>
                  {htmlToReactParser.parse(post.content)}
                </Typography>

                <Button
                  variant="text"
                  size="small"
                  onClick={() => handleDetails(post)}
                >
                  Read More
                </Button>
              </>
            );
          })}
        </>
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
