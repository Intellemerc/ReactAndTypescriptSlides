import React from "react";
import { Heading, Slide, ListItem, List, Appear } from "spectacle";

export default (
  <Slide transition={["zoom"]} bgColor="primary" key="andbeyond">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      And Beyond...
    </Heading>
    <List>
      <Appear>
        <ListItem>Classes</ListItem>
      </Appear>
      <Appear>
        <ListItem>Const/Let</ListItem>
      </Appear>
      <Appear>
        <ListItem>String Interpolation</ListItem>
      </Appear>
      <Appear>
        <ListItem>and more...(Generators, Default Args, etc</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          but wait there's more... ES7+(Async/Await, Decorators for example)
        </ListItem>
      </Appear>
    </List>
  </Slide>
);
