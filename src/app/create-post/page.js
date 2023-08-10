"use client";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createPost } from "@/Redux/Action/blog-action";
const Create = (props) => {
  const handleSave = () => {
    props.createPost();
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      className="create-post-form"
    >
      <Card sx={{ maxWidth: 600 }} className="card-container">
        <div className="page-label">
          <Typography variant="h5" gutterBottom>
            Create new post
          </Typography>
        </div>
        <div className="input-container">
          <TextField
            required
            id="outlined-required"
            label="Title"
            InputLabelProps={{
              shrink: true,
            }}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <TextField
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows={4}
            InputLabelProps={{
              shrink: true,
            }}
            className="input-field"
          />
        </div>

        <div className="save-post">
          <Button variant="contained" onClick={() => handleSave()}>
            Save Post
          </Button>
        </div>
      </Card>
    </Box>
  );
};

const mapStateToProps = (state) => {};
const mapDispatchToProps = {
  createPost,
};
export default connect(mapStateToProps, mapDispatchToProps)(Create);
