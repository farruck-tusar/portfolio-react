import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN Stack Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 120,
      }}
    />
  );
}

export default Type;
