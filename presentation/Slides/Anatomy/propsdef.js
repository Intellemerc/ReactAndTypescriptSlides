import React from "react";
import { Heading, Slide, ListItem, List, Appear } from "spectacle";

export default (
  <Slide transition={["zoom"]} bgColor="primary" key="andbeyond">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      What are props?
    </Heading>
    <List>
      <Appear>
        <ListItem>Way to pass data from parent to children</ListItem>
      </Appear>
      <Appear>
        <ListItem>Can be variables, functions, or components</ListItem>
      </Appear>
      <Appear>
        <ListItem>Think public properties</ListItem>
      </Appear>
    </List>
  </Slide>
);
