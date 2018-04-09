// @flow
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Suggestions from "./Suggestions/Suggestions";
import { ContainerInput, InputSearch } from "./AutoCompleteInputStyled";

// Declare Props Types
type Props = {
  autoCompleteItems: Array<string>,
  maxSuggests?: number,
  maxWidth?: string,
  includeSearchTerm?: boolean,
  labelName?: string,
  showLabel?: boolean,
  placeholder?: string,
  stateName: string,
  parentUpdateState: Function,
  updateCurrentPage: Function
};

// Declare states flow types
type State = {
  searchTerm: string,
  open: boolean,
  suggestedItems: Array<string>,
  currentOption: number
};

class AutoCompleteInput extends Component<Props, State> {
  static defaultProps = {
    maxSuggests: 4,
    maxWidth: "300px",
    includeSearchTerm: false,
    labelName: "",
    showLabel: false,
    placeholder: ""
  };

  state = {
    searchTerm: "",
    open: false,
    suggestedItems: [],
    currentOption: 0
  };

  componentDidMount() {
    // When component mount listen click event when click on document
    document.addEventListener("click", this.handleClickOutside);
  }

  componentWillUnmount() {
    // Remove click event handler on document when component unmounts
    document.removeEventListener("click", this.handleClickOutside);
  }

  handleClickOutside = event => {
    // Control when user clicks outside the input components
    // if the suggestions box is open when click uutside will close the
    // box
    /* eslint-disable */
    // IT'S BEST PRACTICE TO USE REF INSTEAD
    // I had to use finDOMNode method provisionally since
    // i'm having problems implementing ref
    const thisComponent = ReactDOM.findDOMNode(this);
    /* eslint-enable */
    if (!thisComponent || !thisComponent.contains(event.target)) {
      this.setState({
        open: false
      });
    }
  };

  // control the entire state control of this component
  updateLocalState = (state: object) => this.setState(state);
  // This will update parent state which control this component
  updateParentState = (searchTerm: string) => {
    this.props.parentUpdateState(searchTerm);
  };

  render() {
    const { searchTerm, open } = this.state;
    return (
      <ContainerInput
        className="autocomplete"
        showLabel={this.props.showLabel}
        htmlFor={this.props.stateName}
        maxWidth={this.props.maxWidth}
      > 
        {this.props.labelName.length > 0 && (
          <span> {this.props.labelName} </span>
        )}
        <InputSearch
          autoComplete="off"
          type="text"
          id={this.props.stateName}
          onChange={AutoCompleteInput.handleTermChange(
            this.updateLocalState,
            this.updateParentState,
            this.props.updateCurrentPage,
            this.props.autoCompleteItems,
            this.props.maxSuggests,
            this.props.includeSearchTerm
          )}
          onFocus={AutoCompleteInput.handleFocusInput(
            this.updateLocalState,
            searchTerm,
            this.updateParentState
          )}
          onKeyDown={AutoCompleteInput.handleCloseAutoComplete(
            this.updateLocalState,
            this.state,
            this.updateParentState,
            this.props.updateCurrentPage
          )}
          value={searchTerm}
          placeholder={this.props.placeholder}
          open={open && searchTerm.length > 0 ? open : false}
        />
        <Suggestions
          open={open}
          maxWidth={this.props.maxWidth}
          updateLocalState={this.updateLocalState}
          updateParentState={this.updateParentState}
          {...this.state}
          {...this.props}
        />
      </ContainerInput>
    );
  }
}

// this approach on declaring events handlers improves
// Readability and maintainance also improve time loading
// since the class and components will be read first by
// the browser engine - also it's the unique reference for all
// others components which would need this

// Handling onChange event
// it will receive data to update the parent state
AutoCompleteInput.handleTermChange = (
  updateLocalState: Function,
  updateParentState: Function,
  updateCurrentPage: Function,
  autoCompleteItems: Array<string>,
  maxSuggests: number,
  includeSearchTerm: boolean
) => (event: SyntheticInputEvent<HTMLInputElement>) => {
  // Differences between e.target and e.currentTarget
  // target = element that triggered event. or in other words
  // it could be whatever that's actualy clicked on. It can vary, as this
  // can be within an element that the event was bound to
  // currentTarget = element that listens to event.
  // currentTarget is the element you actually bound the event to.
  // This will never change.

  // Since i accessed to the DOM element that's associated with the event handler
  // I defined, i used currentTarget.

  // Every time the user type a new letter the filter method
  // Will detect matches with the names of every gnome in the array
  const AutoCompleteList = autoCompleteItems
    .filter(autoCompleteItem => {
      // If the search item is include within the array item this will show
      // all the options which includes the search items
      if (includeSearchTerm) {
        return (
          autoCompleteItem
            .toLowerCase()
            .indexOf(event.target.value.toLowerCase()) >= 0
        );
      }
      // By default the autocomplete input will show only the options which
      // search term starts and includes with the search term
      return (
        autoCompleteItem
          .toLowerCase()
          .search(event.target.value.toLowerCase()) === 0
      );
    })
    .splice(0, maxSuggests);
    // Control how many suggestions will be show 

  updateLocalState({
    searchTerm: event.currentTarget.value, // update the controlled component
    open: AutoCompleteList.length !== 0, // If there is not a match close the suggestion box
    suggestedItems: AutoCompleteList, // return an array of all suggestions
    currentOption: -1 // disable suggest the first item, to enable switch it to 0
  });
  // update global state of the parent search term
  updateParentState(event.currentTarget.value);
  // When search for a new letter pagination will reset to page 1
  updateCurrentPage(0);
};

// handle on Focus
AutoCompleteInput.handleFocusInput = (
  updateLocalState: Function,
  searchTerm: string,
  updateParentState: Function
) => (event: SyntheticFocusEvent<HTMLInputElement>) => {
  event.preventDefault();
  // if there are at least one letter in the input and if it is focused
  // open the box with suggestions
  const open = searchTerm > 0;

  updateLocalState({
    open
  });
  updateParentState(searchTerm);
};

// handle on keydown
AutoCompleteInput.handleCloseAutoComplete = (
  updateLocalState: Function,
  state: string,
  updateParentState: Function,
  updateCurrentPage: Function
) => (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
  // When user press ESC key
  // Close the suggestion box and reset all suggestions
  if (event.which === 27) {
    updateLocalState({
      open: false,
      suggestedItems: []
    });
  } else if (event.keyCode === 13) {
    // When Enter
    // if there is a suggested option pass it to the state if not check if -1 and just send the current search term
    // reset the suggestions and close the box and algo depending of the position
    // of the current option it will return the suggested option or tbe search Term
    // only if the current option is bigger or equal to 0 it will return the suggestion 
    const processSearch =
      state.currentOption === -1
        ? state.searchTerm
        : state.suggestedItems[state.currentOption];
    updateLocalState({
      open: false,
      searchTerm: processSearch,
      suggestedItems: [],
      currentOption: -1
    });
    // Get pagination to page 1
    updateCurrentPage(0);
    updateParentState(processSearch);
  } else if (event.keyCode === 40) {
    // When arrow up
    // select and option controlled by keyboard
    // everytime the user clicks arrow up button it will decrease
    // the suggestion options
    // suggestion options cant be less than -1 so in this case 
    // when click up always returns -1
    updateLocalState(prevState => {
      const arrayItem = prevState.suggestedItems.length - 1;
      const maxOption =
        prevState.currentOption < arrayItem
          ? prevState.currentOption + 1
          : arrayItem;
      return {
        currentOption: maxOption
      };
    });
  } else if (event.keyCode === 38) {
        // When arrow down
    // select and option controlled by keyboard
    // everytime the user clicks arrow down button it will increase
    // the suggestion options

    updateLocalState(prevState => {
      // If not selected option return -1
      const minOption =
        prevState.currentOption < 1 ? -1 : prevState.currentOption - 1;
      return {
        currentOption: minOption
      };
    });
  } else if (event.keyCode === 9) {
    updateLocalState({
      currentOption: 0,
      suggestedItems: [],
      open: false
    });
  }
};

export default AutoCompleteInput;
