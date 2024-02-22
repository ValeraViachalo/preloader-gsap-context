import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { imageAnim, progressAnim } from "./anim";

import "./Preloader.scss";

const text="Sydney Opera House"

export const Preloader = ({ timeline }) => {
  const title = useRef([]);
  const image = useRef();
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const progressWrapper = useRef(null);

  useGSAP(() => {
    timeline &&
    timeline
      .add(imageAnim(image), 1)
      .add(progressAnim(progressRef, progressNumberRef, progressWrapper), 0)
  }, [timeline])

  return (
    <div className="preloader">
      <div className="image image-1" ref={image} />

      <div className="preloader__progress" ref={progressWrapper}>
        <div className="preloader__progress-bar" ref={progressRef} />
          <h1 className="big-text preloader__numbers" ref={progressNumberRef}>
            00
          </h1>
      </div>
    </div>
  );
};

const Title = ({ currT, ...rest }) => {

  return (
    <h1 className="big-text title" {...rest}>
      <p className="title__wrapper">
        <br />

        <span className="title__text-wrapper">{currT}</span>

        <br />

        <span className="title__text-wrapper">{currT}</span>
      </p>
    </h1>
  );
};
