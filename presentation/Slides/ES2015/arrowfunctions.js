import React from "react";
import CodeSlide from "spectacle-code-slide";

export default (
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../../../code/arrowfunctions.example")}
    ranges={[
      { loc: [0, 3], title: "Arrow Functions: Traditional Way" },
      { loc: [5, 10], title: "Arrow Functions: ES2015 Arrow Function" }
    ]}
  />
);
