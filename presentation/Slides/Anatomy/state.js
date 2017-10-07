import React from "react";
import CodeSlide from "spectacle-code-slide";

export default (
  <CodeSlide
    key="anatomystate"
    transition={[]}
    lang="js"
    code={require("raw-loader!../../../code/state.example")}
    ranges={[
      { loc: [4, 9], title: "Anatomy: State JS constructor" },
      { loc: [15, 16], title: "Anatomy: State JS Use" },
      { loc: [17, 22], title: "Anatomy: State JS" },
      { loc: [11, 14], title: "Anatomy: State JS" },
      { loc: [25, 28], title: "Anatomy: State TS" },
      { loc: [28, 29], title: "Anatomy: State TS" }
    ]}
  />
);
