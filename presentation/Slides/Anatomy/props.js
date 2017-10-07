import React from "react";
import CodeSlide from "spectacle-code-slide";

export default (
  <CodeSlide
    key="anatomyprops"
    transition={[]}
    lang="js"
    code={require("raw-loader!../../../code/props.example")}
    ranges={[
      { loc: [3, 9], title: "Anatomy: Props JS" },
      { loc: [10, 13], title: "Anatomy: PropTypes" },
      { loc: [15, 20], title: "Anatomy: JS Usage" },
      { loc: [21, 24], title: "Anatomy: Props Interface TS" },
      { loc: [24, 25], title: "Anatomy: Props Declaration TS" },
      { loc: [26, 28], title: "Anatomy: Props Use TS" },
      { loc: [32, 35], title: "Anatomy: TS Usage" }
    ]}
  />
);
