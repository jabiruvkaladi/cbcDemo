"use client";

import React, { useState, useEffect } from "react";
import img2 from "@/assets/images/assets/test.webp";
import img1 from "@/assets/images/assets/test2.webp";
import img3 from "@/assets/images/assets/test4.webp";
import img4 from "@/assets/images/assets/test-7.webp";
import { StaticImageData } from "next/image";

interface CardProps {
  flip: boolean;
  frontImage: StaticImageData;
  backImage: StaticImageData;
}

const Card: React.FC<CardProps> = ({ flip, frontImage, backImage }) => {
  const cardStyle: React.CSSProperties = {
    height: "100%",
    width: "100%",
    position: "relative",
    transition: "transform 1.5s",
    transformStyle: "preserve-3d",
    transform: flip ? "rotateY(180deg)" : "none",
  };

  const frontBackCommonStyles: React.CSSProperties = {
    borderRadius: "20px",
    boxShadow: "0 0 5px 2px rgba(50, 50, 50, 0.25)",
    position: "absolute",
    backfaceVisibility: "visible",
    height: "100%",
    width: "100%",
  };

  const backBackCommonStyles: React.CSSProperties = {
    borderRadius: "20px",
    boxShadow: "0 0 5px 2px rgba(50, 50, 50, 0.25)",
    position: "absolute",
    backfaceVisibility: "hidden",
    height: "100%",
    width: "100%",
    transform: "rotateY(180deg)",
  };

  const frontStyle: React.CSSProperties = {
    ...frontBackCommonStyles,
    backgroundImage: `url(${frontImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const backStyle: React.CSSProperties = {
    ...backBackCommonStyles,
    backgroundImage: `url(${backImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={cardStyle}>
      <div style={frontStyle} />
      <div style={backStyle} />
    </div>
  );
};

const FlipCardone: React.FC = () => {
  const [isFlippedOne, setIsFlippedOne] = useState<boolean>(false);
  const [isFlippedTwo, setIsFlippedTwo] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle: React.CSSProperties = {
    perspective: "1500px",
    width: "100%",
    height: "600px",
    cursor: "pointer",
    margin: isMobile ? "20px 0" : "0 20px", 
  };

  const cardsContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between", 
    alignItems: "center",
    width: isMobile ? "100%" : "90%", 
    margin: "0 auto", 
    height: isMobile ? "1200px" : "100vh",
  };

  const anchorStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "inherit",
    display: "block",
    width: isMobile ? "100%" : "45%", 
  };

  return (
    <div style={cardsContainerStyle}>
      <a
        href="/assets/text/Career Town 2024-2025.pdf"
        download
        style={anchorStyle}
      >
        <div
          style={containerStyle}
          onMouseEnter={() => setIsFlippedOne(true)}
          onMouseLeave={() => setIsFlippedOne(false)}
        >
          <Card flip={isFlippedOne} frontImage={img1} backImage={img4} />
        </div>
      </a>

      <a
        href="/assets/text/Career Aptitude Test.pdf"
        download
        style={anchorStyle}
      >
        <div
          style={containerStyle}
          onMouseEnter={() => setIsFlippedTwo(true)}
          onMouseLeave={() => setIsFlippedTwo(false)}
        >
          <Card flip={isFlippedTwo} frontImage={img2} backImage={img3} />
        </div>
      </a>
    </div>
  );
};

export default FlipCardone;
