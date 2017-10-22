import React from "react";
import CodeSlide from "spectacle-code-slide";

export default (
  <CodeSlide
    key="arrowfunction"
    transition={[]}
    lang="js"
    code={require("raw-loader!../../../code/arrowfunctions.example")}
    ranges={[
      {
        loc: [0, 3],
        title: (
          <div>
            <div>Arrow Functions:</div>
            <div>Traditional Way</div>
          </div>
        )
      },
      {
        loc: [5, 10],
        title: (
          <div style={{ fontSize: "1em" }}>
            <div>Arrow Functions:</div>
            <div>ES2015 Arrow Function</div>
          </div>
        )
      }
    ]}
  />
);
