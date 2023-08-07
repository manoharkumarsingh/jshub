"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Loader from "../components/Loader";
import { connect } from "react-redux";
import { fetchPost, selectedPost } from "../../Redux/Action/blog-action";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import CardActions from "@mui/material/CardActions";

const HtmlToReactParser = require("html-to-react").Parser;
const htmlToReactParser = new HtmlToReactParser();

const bloglist = (props) => {
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
        let text = el.textContent.slice(0, 500);
        el.innerHTML = text;
      }
    });
  });

  const handleDetails = (post) => {
    props.selectedPost(post);
    router.push(`/bloglist/${post.id}`);
  };

  return (
    <div className="posts-section">
      {posts && posts.length > 0 ? (
        <>
          {posts.map((post) => {
            return (
              <>
                <Card sx={{ minWidth: 275 }} key={post.id}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      <div>{htmlToReactParser.parse(post.title)}</div>
                    </Typography>
                    <Typography variant="body2">
                      <div className="post-content">
                        {htmlToReactParser.parse(post.content)}
                      </div>
                      <br />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handleDetails(post)}>
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </>
            );
          })}
        </>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { posts: state.blog };
};

const mapDispatchToProps = {
  fetchPost,
  selectedPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(bloglist);
