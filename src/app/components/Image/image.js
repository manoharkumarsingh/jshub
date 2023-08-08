"use client";
import React, { useState } from "react";
import Image from "next/image";

const ImageComponent = () => {
  return (
    <div>
      <h1>My Next.js Image</h1>
      <Image
        src="/bg.jpg" // Relative path to the image from the public directory
        alt="My Image"
        width={window.innerWidth}
        height={window.innerHeight - 225}
      />
    </div>
  );
};

export default ImageComponent;
