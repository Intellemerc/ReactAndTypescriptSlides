import React from "react";
import CodeSlide from "spectacle-code-slide";

export default (
  <CodeSlide
    transition={[]}
    lang="js"
    code={require("raw-loader!../../../code/importexport.example")}
    ranges={[
      { loc: [0, 4], title: "Default Export" },
      { loc: [5, 7], title: "Import a Default" },
      { loc: [10, 15], title: "Named Export" },
      { loc: [16, 17], title: "Named Import" },
      { loc: [20, 29], title: "Misc Examples" }
    ]}
  />
);
