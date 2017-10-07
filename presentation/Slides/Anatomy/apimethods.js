import React from "react";
import { Heading, Slide, ListItem, List, Appear } from "spectacle";

export default (
  <Slide transition={["zoom"]} bgColor="primary" key="andbeyond">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      API Methods
    </Heading>
    <List>
      <Appear>
        <ListItem>Render - displays the returned JSX elements</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          componentWillMount - called right before render, use constructor
          instead
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          componentDidMount - after first render after mounted, use to fetch
          data from server
        </ListItem>
      </Appear>
    </List>
  </Slide>
);
