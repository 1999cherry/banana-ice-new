import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
export default function LinkButton({ buttonType }) {
  const [isHovered, setIsHovered] = useState(false);
  if (buttonType === "youtube") {
    return (
      <a
        href="https://www.youtube.com/@BANANAICE/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/legacy-assets/icons/youtube.png"
          alt="youtube link image"
          width={40}
          height={40}
        />
      </a>
    );
  }
  if (buttonType === "insta") {
    return (
      <a
        href="https://www.instagram.com/kithbill/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/legacy-assets/icons/insta.png"
          alt="insta link image"
          width={40}
          height={40}
        />
      </a>
    );
  }
 if (buttonType === "2D") {
    return (
      <Link to="/change">
        <img
          src={
            isHovered
              ? "/legacy-assets/icons/change-2d.png"
              : "/legacy-assets/icons/change-3d.png"
          }
          alt="change to 2D"
          width={40}
          height={40}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ cursor: "pointer" }}
        />
      </Link>
    );
  }
   if (buttonType === "3D") {
    return (
      <Link to="/">
        <img
          src={
            isHovered
              ? "/legacy-assets/icons/change-3d.png"
              : "/legacy-assets/icons/change-2d.png"
          }
          alt="change to 3D"
          width={40}
          height={40}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ cursor: "pointer" }}
        />
      </Link>
    );
  }
  return null; // buttonType이 없거나 다를 때
}
