// @flow
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Suggestions from "./Suggestions/Suggestions";
import { ContainerInput, InputSearch } from "./AutoCompleteInputStyled";

type Props = {
  autoCompleteItems: Array<string>,
  maxSuggests: number,
  maxWidth: string,
  includeSearchTerm: boolean,
  labelName: string,
  showLabel: boolean,
  placeholder: string,
  stateName: string,
  parentUpdateState: Function,
  updateCurrentPage: Function
};

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
    document.addEventListener("click", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  }

  handleClickOutside = event => {
    // console.log(this.node);
    // const thisComponent = this.domRef.contains;
    // console.log(thisComponent, e.target);
    // if (!thisComponent || !thisComponent.contains(event.target)) {
    //   this.setState({
    //     open: false
    //   });
    // }
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

  updateLocalState({
    searchTerm: event.currentTarget.value,
    open: AutoCompleteList.length !== 0,
    suggestedItems: AutoCompleteList,
    currentOption: -1 // disable suggest the first item, to enable switch it to 0
  });
  updateParentState(event.currentTarget.value);
  updateCurrentPage(0);
};

AutoCompleteInput.handleFocusInput = (
  updateLocalState: Function,
  searchTerm: string,
  updateParentState: Function
) => (event: SyntheticFocusEvent<HTMLInputElement>) => {
  event.preventDefault();
  const open = searchTerm > 0;

  updateLocalState({
    open
  });
  updateParentState(searchTerm);
};

AutoCompleteInput.handleCloseAutoComplete = (
  updateLocalState: Function,
  state: string,
  updateParentState: Function,
  updateCurrentPage: Function
) => (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
  if (event.which === 27) {
    // Close autocomplete when press  Esc
    updateLocalState({
      open: false,
      suggestedItems: []
    });
  } else if (event.keyCode === 13) {
    // When Enter
    // if there is a suggested option pass it to the state if not check if -1 and just send the current search term
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
    updateCurrentPage(0); // Get pagination to page 1
    updateParentState(processSearch);
  } else if (event.keyCode === 39) {
    // When right arrow
    updateLocalState(prevState => ({
      open: false,
      searchTerm: prevState.suggestedItems[prevState.currentOption],
      suggestedItems: [],
      currentOption: 0
    }));
    updateParentState(state.suggestedItems[state.currentOption]);
  } else if (event.keyCode === 40) {
    // When arrow up
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
    // when arrow down
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
