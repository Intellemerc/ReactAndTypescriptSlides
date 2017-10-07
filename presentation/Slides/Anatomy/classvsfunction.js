import React from "react";
import CodeSlide from "spectacle-code-slide";

export default (
  <CodeSlide
    key="classvsfunction"
    transition={[]}
    lang="js"
    code={require("raw-loader!../../../code/classvsfunction.example")}
    ranges={[
      { loc: [2, 7], title: "Anatomy: Class" },
      { loc: [8, 11], title: "Anatomy: Full Function" },
      { loc: [12, 17], title: "Anatomy: Multi-line Short Function" },
      { loc: [18, 19], title: "Anatomy: Single-line Short Function" }
    ]}
  />
);
