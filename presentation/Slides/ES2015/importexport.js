import React from "react";
import CodeSlide from "spectacle-code-slide";

export default (
  <CodeSlide
    key="importexport"
    transition={[]}
    lang="js"
    code={require("raw-loader!../../../code/importexport.example")}
    ranges={[
      { loc: [0, 4], title: "Default Export" },
      { loc: [5, 7], title: "Import a Default" },
      { loc: [8, 13], title: "Named Export" },
      { loc: [14, 15], title: "Named Import" }
    ]}
  />
);
