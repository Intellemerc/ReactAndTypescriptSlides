import React from "react";
import { Heading, Slide, ListItem, List, Appear } from "spectacle";

export default (
  <Slide transition={["zoom"]} bgColor="primary" key="andbeyond">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      What is state?
    </Heading>
    <List>
      <Appear>
        <ListItem>Internal "state" of a component</ListItem>
      </Appear>
      <Appear>
        <ListItem>When state is changed component is "re-rendered"</ListItem>
      </Appear>
      <Appear>
        <ListItem>Think private property</ListItem>
      </Appear>
    </List>
  </Slide>
);
