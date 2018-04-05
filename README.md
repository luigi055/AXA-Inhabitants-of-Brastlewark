# Tech Task AXA Inhabitants of Brastlewark

Inhabitants of Brastlewark is a little web Appplication that shows censum information about the fantastic town of Gnomes that you can consult. This is a React assessment for a Frontend Position at AXA Assistance.

## Table of contents
- [Next To Do](#next-to-do)
- [Installation](#installation)
- [Enviroments](#enviroments)
  - [Production](#production)
  - [Development](#development)
- [How to use](#how-to-use)
- [Clearing Public Folder](#clearing-public-folder)
- [Tech Stack](#tech-stack)
- [Creation Steps](#creation-steps)
- [Software used](#software-used)
- [Author](#author)
- [license](#license)

## Next To Do
- [ ] Order by hair color
- [ ] Pagination
- [ ] replace native select for a custom select component
- [ ] Documentation revisions
- [ ] TDD With Jest and Enzyme


## Installation

First step clone this repo
```
$git clone https://github.com/luigi055/AXA-Inhabitants-of-Brastlewark
```
And then dependning wheather you use npm or yarn

Case using __yarn__:
```
$cd AXA-Inhabitants-of-Brastlewark && yarn
```
Case using __npm__
```
$cd AXA-Inhabitants-of-Brastlewark && npm install
```
## Enviroments
### Production
  to run production enviroment, bundle the code and execute de node local server use:
```
$yarn run start
```
__ONCE YOU WANT TO DEPLOY YOUR APP MAKE SURE TO REMOVE. export NODE_ENV=production || SET \"NODE_ENV=production\" && IN START SCRIPT__

make sure the start script look like this when deploy:
```
"start": "npm run clear && export NODE_ENV=production || SET \"NODE_ENV=production\" && webpack --mode production --optimize-minimize && node server.js"
```

which runs our local express server and run webpack which build the public folder

In case you just want to build the app for production use
```
$yarn run build
```
visit http://localhost:3000 in any browser

### Development
the development enviroment use all the power of webpack dev server. the next script runs the dev server
```
$yarn run dev
```

to build a development package use
```
$yarn run build:dev
```

or in case to want build to compile automatically on save

```
$yarn run build:dev--watch
```

visit http://localhost:3000 in any browser

## How to use
Gnomes are timid and introverted creatures so doing business and meeting them can be a difficult journey. This app has all the necessary information from the inhabitants of Brastlewarks (all are gnomes) you will know which is the oldest gnome, how many professions they have, among other things.

Visit [http://brastlewarkers.surge.sh/](http://brastlewarkers.surge.sh/) and the app will fecth all the Gnomes. you can filter by name, job and order them by weight, hair color, age and quantity of friends. it's easy to use and available wherever you need. use it as you personal Pokedex (Joke XD)
    
## Clearing Public Folder
There's an easy way to remove the public folder via npm or yarn script. it is good practice to remove the build folder before produce it again you can remove this using the following script

```
$yarn run clear
```

## Tech Stack
- React Fiber (V16)
  - React Helmet
- Redux
  - Redux Thunk
- Axios
- React and Redux dev tools
- Webpack Legato (V4)
  - Code Splitting
- Flow Type checker
- styled-components v3
- Babel (ES6 - ES8)
- ESLint
- Yarn
- git / git flow / github
- PostCSS

## Creation Steps

- Dev enviroment and tools prepare, using Webpack Legato (V4) ready for produce modern React apps

	- for this step i used my own boilerplate prepared for using the latest version of Webpack with React (and also Redux). For further information about my tech tooling, webpack configuration and packages. Please visit the repository

  [Webpack React Boilerplate](https://github.com/luigi055/React-Redux-Boilerplate)

- Controlled component for the input field 
	- For the autocompletion component i used one i made before you can know more about it in here
	 [React-autocomplete-input](https://github.com/luigi055/react-autocomplete-input)
	- __Uncontrolled Component vs Controlled Component__ 
		- In order to keep the form local state updated with the search value term it is needed to implement a Controlled Component. For this case we have to create a stateful class component since we have to store the result value in the component state 
		- In React we can see 2 kinds of Form input components - __Uncontrolled Component__ Which is like traditional HTML form input so you have a regular form field and in order to receive or get the value, you have to pull the value from the field when needed. the common use case is implementing form submition.

          ```
            class NameForm extends React.Component {
              constructor(props) {
                super(props);
                this.handleSubmit = this.handleSubmit.bind(this);
              }

              handleSubmit(event) {
                alert('A name was submitted: ' + this.input.value);
                event.preventDefault();
              }

              render() {
                return (
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Name:
                      <input type="text" ref={(input) => this.input = input} />
                    </label>
                    <input type="submit" value="Submit" />
                  </form>
                );
              }
            }
          ```
        - __Controlled Components:__ accepts its current value as a prop, as well as a callback to change its value.
        - The value of this type of component live in the state, in the state of other component or a state container like Redux or MobX.
        - Every time you type a new character to the input this update the state and then the new value(which is the same state value) is re-rendered in the component
        - This type of component is particularly useful for validating form inputs.
        ```
        class AutoCompleteInput extends Component<{}, State> {
          state = {
            searchTerm: ""
          };

          handleTermChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
            this.setState({
              searchTerm: event.currentTarget.value
            });
          };

          render() {
            return (
              <label htmlFor="autoComplete">
                Search Input:
                <input
                  id="autoComplete"
                  type="text"
                  value={this.state.searchTerm}
                  onChange={this.handleTermChange}
                  placeholder="Search Item"
                />
              </label>
            );
          }
        }
        ```
      	- __Stateful Class Component vs Stateless Functional Component__
      		- As mention before since whe need to keep the state updated our component needs to be a stateful class component. there is some differencies between Class Components and Stateless Functional Component.
      		| Stateful Class Component | Stateless Functional Component |
        | :---: |  :---: |
        | Cannot Manage its own state | manage its own state |
        | It doesn't access to neither lifecycle methods nor ref | Have access to lifecycles methods and ref |
       	| Can receive Props | Can Receive Props |
        | Ease to read due it encorages smaller, focused component | Sometimes it could be messy to read |
        | Easier to Test | Due to its complex nature, it tends to be a little harder to test |
        | it communicates a clearer interface with less noisy (UI focused instead behavior) | little noisy to see the UI |
        | No _this_ keyboard | _This_ bound to the component |

- Static UI(Presentational Component). i created home, details and card components and style them using styled-components for this task - Styled-components is a css-in-js implementation this is a modular aproach that fits great together to React components. It Utilises tagged template literals string to style the UI, when you defining your styled you're actually creating a normal Recat component, that has the styles you wrote attached to it!. 

- Add redux as State container since AXA is planning to use redux together with React. I decided to implement it too and also using axios with asynz/await to fetch data from the url provided. in most cases i prefer to not use redux for small apps since most of the time is easier and enough to just use the React state manager.

- Adding interaction and logic to component (Putting all together) and type components using flow-type

- Add meta tags in head thanks to react-helmet and making loading components

- enabling code splitting with wbepack.



## Software Used

- [visual studio code](https://code.visualstudio.com/)
- [git with git flow](https://git-scm.com/)
- [Haroopad](http://pad.haroopress.com/)
- [yarn](https://yarnpkg.com/lang/en/docs/install/)

## Author
-  __[Pedro La Rosa (luigi055)](https://github.com/luigi055)__

See also the list of [contributors](https://github.com/luigi055/TDAH-REST-API/contributors) who participated in this project.

## License
This project is licensed under the MIT License.