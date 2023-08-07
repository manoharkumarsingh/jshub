"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Details } from "@mui/icons-material";
const HtmlToReactParser = require("html-to-react").Parser;
const htmlToReactParser = new HtmlToReactParser();

const bloglist = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const apiKey = "AIzaSyDs4Zg2yH6BqMp3hUO7zP3AtuTshe4x0cU";
    const apiUrl =
      "https://www.googleapis.com/blogger/v3/blogs/9017420301734330187/posts?key=" +
      apiKey +
      "";
    axios
      .get(apiUrl)
      .then((response) => {
        setPosts(response.data.items);
      })
      .catch((error) => {
        console.error("Error making GET request:", error);
      });
  }, []);

  useLayoutEffect(() => {
    const posts = document.querySelectorAll(".post-content");
    posts.forEach((el) => {
      if (htmlToReactParser.parse(el.textContent).length > 500) {
        let text = el.textContent.slice(0, 500);
        el.innerHTML = text;
      }
    });
  });

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
                  <Link href={`/bloglist/${post.id}`} data-post={post}>
                    Read More
                  </Link>
                </Card>
              </>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default bloglist;
