// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Appear,
  Image,
  Link
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
// import createTheme from "spectacle/lib/themes/default";

import { theme } from "spectacle-theme-solarized-dark";

import esSlidesProm from "./Slides/ES2015";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  npmDownloads: require("../assets/TypescriptNPM-Downloads.png")
};

preloader(images);

/*const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});*/

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [] // A placeholder for slides once they're loaded.
    };
  }
  componentDidMount() {
    const importedSlides = [];
    Promise.all(esSlidesProm).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slide) => {
        importedSlides.push(slide.default);
      });
      this.setState({ esSlides: importedSlides });
    });
  }
  render() {
    const { esSlides } = this.state;
    return (
      <Deck transition={[]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]}>
          <Heading size={1} fit caps lineHeight={1}>
            Intro to React and Typescript
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} caps>
            Overview
          </Heading>
          <List>
            <Appear>
              <ListItem>Definitions and Background</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                React/Typescript
                <List>
                  <Appear>
                    <ListItem>Why Typescript</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem>Why React</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem>Anatomy of a React Component</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem>Use with Typescript</ListItem>
                  </Appear>
                </List>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} caps>
            Poll
          </Heading>
          <Appear>
            <Text>Familiar with:</Text>
          </Appear>
          <List>
            <Appear>
              <ListItem>ES6/ES2015</ListItem>
            </Appear>
            <Appear>
              <ListItem>React</ListItem>
            </Appear>
            <Appear>
              <ListItem>Webpack</ListItem>
            </Appear>
            <Appear>
              <ListItem>Typescript</ListItem>
            </Appear>
          </List>
        </Slide>
        {esSlides
          ? esSlides.map((slide) => {
            return slide;
          })
          : null}
        <Slide transition={["zoom"]} bgColor="primary" key="andbeyond">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Webpack
          </Heading>
          <List>
            <Appear>
              <ListItem>Module bundler</ListItem>
            </Appear>
            <Appear>
              <ListItem>Dependency Graph</ListItem>
            </Appear>
            <Appear>
              <ListItem>Build Chain</ListItem>
            </Appear>
            <Appear>
              <ListItem>Backwards Compatibility</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" key="andbeyond">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why Typescript?
          </Heading>
          <List>
            <Appear>
              <ListItem>Super set of Javascript</ListItem>
            </Appear>
            <Appear>
              <ListItem>Kept up to date(Bi-Monthly releases)</ListItem>
            </Appear>
            <Appear>
              <ListItem>Can Mix TS and JS</ListItem>
            </Appear>
            <Appear>
              <ListItem>Zero Runtime cost(compiled down to JS)</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Great Tooling(autocomplete, refactor support, and errors)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Type Inference</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" key="andbeyond">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why React?
          </Heading>
          <List>
            <Appear>
              <ListItem>Declarative</ListItem>
            </Appear>
            <Appear>
              <ListItem>Efficient</ListItem>
            </Appear>
            <Appear>
              <ListItem>Flexible</ListItem>
            </Appear>
            <Appear>
              <ListItem>Component Based</ListItem>
            </Appear>
            <Appear>
              <ListItem>Simple API</ListItem>
            </Appear>
            <Appear>
              <ListItem>Type Inference</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" key="andbeyond">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why Typescript and React together?
          </Heading>
          <List>
            <Appear>
              <ListItem>Strong typing</ListItem>
            </Appear>
            <Appear>
              <ListItem>PropTypes not needed</ListItem>
            </Appear>
            <Appear>
              <ListItem>Easy refactor of components</ListItem>
            </Appear>
            <Appear>
              <ListItem>Type definitions for autocomplete</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading caps>Typescript - Usage(NPM downloads)</Heading>
          <Image src={images.npmDownloads} />
          <Link
            href="https://npm-stat.com/charts.html?package=babel&package=typescript&package=flow-bin&from=2016-10-01&to=2017-03-31"
            target="blank"
          >
            <span style={{ fontSize: 12 }}>*Source</span>
          </Link>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="bash"
          code={require("raw-loader!../code/createTypescript.example")}
          ranges={[
            { loc: [0, 8], title: "Project Setup" },
            { loc: [0, 1], title: "Install CRA" },
            {
              loc: [2, 3],
              title: "Run CRA with Scripts"
              //note: "Uses template/script to create project"
            },
            { loc: [3, 5], title: "Start the project" }
          ]}
        />
        <Slide transition={["fade"]}>
          <Heading caps>How does this help me?</Heading>
          <Text textAlign="Center" lineHeight={5} textSize={52} bold caps>
            Demo
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading caps>Contact Me</Heading>
          <List>
            <ListItem lineHeight={5}>Twitter: @Intellemerc</ListItem>
            <ListItem lineHeight={5}>ReactJs Slack: @Intellemerc</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
