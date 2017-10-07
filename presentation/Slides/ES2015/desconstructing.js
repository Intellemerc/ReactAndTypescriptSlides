import React from "react";
import CodeSlide from "spectacle-code-slide";

export default (
  <CodeSlide
    key="deconstructor"
    transition={[]}
    lang="js"
    code={require("raw-loader!../../../code/deconstructing.example")}
    ranges={[
      { loc: [0, 6], title: "Our Data" },
      { loc: [7, 11], title: "Destructuring" },
      { loc: [21, 28], title: "Spread" },
      { loc: [28, 37], title: "Spread" }
    ]}
  />
);
