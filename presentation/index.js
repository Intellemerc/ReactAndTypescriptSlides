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
  render() {
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
                <List style={{ marginLeft: 35 }}>
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
              <ListItem>Webpack</ListItem>
            </Appear>
            <Appear>
              <ListItem>Typescript</ListItem>
            </Appear>
            <Appear>
              <ListItem>React</ListItem>
            </Appear>
          </List>
        </Slide>
        <CodeSlide
          key="arrowfunction"
          transition={[]}
          lang="js"
          code={require("raw-loader!../code/arrowfunctions.example")}
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
        <CodeSlide
          key="deconstructor"
          transition={[]}
          lang="js"
          code={require("raw-loader!../code/deconstructing.example")}
          ranges={[
            { loc: [0, 6], title: "Our Data" },
            { loc: [7, 11], title: "Destructuring" },
            { loc: [21, 28], title: "Spread" },
            { loc: [28, 37], title: "Spread" }
          ]}
        />
        <CodeSlide
          key="importexport"
          transition={[]}
          lang="js"
          code={require("raw-loader!../code/importexport.example")}
          ranges={[
            { loc: [0, 4], title: "Default Export" },
            { loc: [5, 7], title: "Import a Default" },
            { loc: [8, 13], title: "Named Export" },
            { loc: [14, 15], title: "Named Import" }
          ]}
        />
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
                but wait there's more... ES7+(Async/Await, Decorators for
                example)
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
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
        <Slide>
          <Heading fit caps>
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
        <Slide>
          <Heading fit caps>
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
          </List>
        </Slide>
        <Slide>
          <Heading fit caps>
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
          <Heading caps style={{ fontSize: "2em" }}>
            Typescript - Usage(NPM downloads)
          </Heading>
          <Image src={images.npmDownloads} />
          <Link
            href="https://npm-stat.com/charts.html?package=typescript&package=flow-bin&package=angular&package=react&from=2016-10-01&to=2017-09-30"
            target="blank"
          >
            <div style={{ fontSize: 12 }}>*Source</div>
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
        <Slide transition={["zoom"]} bgColor="primary" key="andbeyond">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Project Demo
          </Heading>
        </Slide>
        <CodeSlide
          key="classvsfunction"
          transition={[]}
          lang="js"
          code={require("raw-loader!../code/classvsfunction.example")}
          ranges={[
            {
              loc: [2, 7],
              title: (
                <div style={{ fontSize: ".75em" }}>
                  <div>Anatomy:</div>
                  <div>Class</div>
                </div>
              )
            },
            {
              loc: [8, 11],
              title: (
                <div style={{ fontSize: "1em" }}>
                  <div>Anatomy:</div>
                  <div>Full Function</div>
                </div>
              )
            },
            {
              loc: [12, 17],
              title: (
                <div style={{ fontSize: ".75em" }}>
                  <div>Anatomy:</div>
                  <div>Multiline Short Function</div>
                </div>
              )
            },
            {
              loc: [18, 19],
              title: (
                <div style={{ fontSize: "1em" }}>
                  <div>Anatomy:</div>
                  <div>Single Line Short Function</div>
                </div>
              )
            }
          ]}
        />
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
        <CodeSlide
          key="anatomyprops"
          transition={[]}
          lang="js"
          code={require("raw-loader!../code/props.example")}
          ranges={[
            {
              loc: [3, 9],
              title: (
                <div style={{ fontSize: ".75em" }}>
                  <div>Anatomy:</div>
                  <div>Props JS</div>
                </div>
              )
            },
            {
              loc: [10, 13],
              title: (
                <div style={{ fontSize: "1em" }}>
                  <div>Anatomy:</div>
                  <div>Prop Types</div>
                </div>
              )
            },
            {
              loc: [15, 20],
              title: (
                <div style={{ fontSize: "1em" }}>
                  <div>Anatomy:</div>
                  <div>JS Usage</div>
                </div>
              )
            },
            {
              loc: [21, 24],
              title: (
                <div style={{ fontSize: ".75em" }}>
                  <div>Anatomy:</div>
                  <div>Interface TS</div>
                </div>
              )
            },
            {
              loc: [24, 25],
              title: (
                <div style={{ fontSize: "1em" }}>
                  <div>Anatomy:</div>
                  <div>Prop Declaration TS</div>
                </div>
              )
            },
            {
              loc: [26, 28],
              title: (
                <div style={{ fontSize: "1em" }}>
                  <div>Anatomy:</div>
                  <div>Props usage TS</div>
                </div>
              )
            },
            {
              loc: [32, 35],
              title: (
                <div style={{ fontSize: "1em" }}>
                  <div>Anatomy:</div>
                  <div>TS Usage</div>
                </div>
              )
            }
          ]}
        />
        <Slide transition={["zoom"]} bgColor="primary" key="andbeyond">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What is state?
          </Heading>
          <List>
            <Appear>
              <ListItem>Internal state of a component</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                When state is changed component is "re-rendered"
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Think private property</ListItem>
            </Appear>
          </List>
        </Slide>
        <CodeSlide
          key="anatomystate"
          transition={[]}
          lang="js"
          code={require("raw-loader!../code/state.example")}
          ranges={[
            {
              loc: [4, 9],
              title: (
                <div style={{ fontSize: ".75em" }}>
                  <div>Anatomy:</div>
                  <div>JS Constructor</div>
                </div>
              )
            },
            {
              loc: [15, 16],
              title: (
                <div style={{ fontSize: "1em" }}>
                  <div>Anatomy:</div>
                  <div>JS Usage</div>
                </div>
              )
            },
            {
              loc: [17, 22],
              title: (
                <div style={{ fontSize: ".75em" }}>
                  <div>Anatomy:</div>
                  <div>State JS</div>
                </div>
              )
            },
            {
              loc: [11, 14],
              title: (
                <div style={{ fontSize: ".75em" }}>
                  <div>Anatomy:</div>
                  <div>State JS</div>
                </div>
              )
            },
            {
              loc: [25, 28],
              title: (
                <div style={{ fontSize: ".75em" }}>
                  <div>Anatomy:</div>
                  <div>State TS</div>
                </div>
              )
            },
            {
              loc: [28, 29],
              title: (
                <div style={{ fontSize: "1em" }}>
                  <div>Anatomy:</div>
                  <div>State TS</div>
                </div>
              )
            }
          ]}
        />
        <Slide transition={["zoom"]} bgColor="primary" key="andBeyond">
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
                componentDidMount - after first render after mounted, use to
                fetch data from server
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" key="andbeyond">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Demo
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading caps>Contact Me</Heading>
          <List>
            <ListItem lineHeight={5}>Twitter: @Intellemerc</ListItem>
            <ListItem lineHeight={5}>
              <Link href="https://www.meetup.com/ReactJS-Tampa-Bay/">
                ReactJs Meetup: ReactJS Tampa Bay
              </Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
