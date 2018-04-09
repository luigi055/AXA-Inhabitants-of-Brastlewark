// @flow
import React from "react";
import { ItemSuggestions, Suggestion } from "./SuggestionsStyled";

// Declaring Flow Props types
type Props = {
  searchTerm: string,
  maxWidth: string,
  updateLocalState: Function,
  updateParentState: Function,
  open: boolean,
  suggestedItems: Array<string>,
  currentOption: number
};

/*
  If open exist and there is at least one character in search term
  open the suggestion box
*/
const Suggestions = ({
  searchTerm,
  maxWidth,
  updateLocalState,
  updateParentState,
  open,
  suggestedItems,
  currentOption
}: Props) => (
  <ItemSuggestions
    open={open && searchTerm.length > 0 ? open : false}
    maxWidth={maxWidth}
  >
    <ul className="suggestions-list">
      {suggestedItems.map(autoCompleteItem => (
        <Suggestion
          key={autoCompleteItem}
          onClick={Suggestions.selectCompletion(
            updateLocalState,
            updateParentState
          )}
          onMouseOver={Suggestions.mouseOverSuggestion(
            updateLocalState,
            suggestedItems.indexOf(autoCompleteItem)
          )}
          onMouseLeave={Suggestions.mouseLeaveSuggestion(updateLocalState)}
          onFocus={Suggestions.hoverFocus}
          active={suggestedItems[currentOption] === autoCompleteItem}
          role="presentation"
        >
          {autoCompleteItem}
        </Suggestion>
      ))}
    </ul>
  </ItemSuggestions>
);

// Select suggestion on Mouse Click
Suggestions.selectCompletion = (
  updateLocalState: Function,
  updateParentState: Function
) => (event: SyntheticMouseEvent<HTMLLiElement>) => {
  event.preventDefault();
  // When option selected return this to searchTerm and update the state
  // to filter the items
  // Also close the suggestion box, resetting the suggestion items and current options go to -1
  updateLocalState({
    searchTerm: event.currentTarget.textContent,
    open: false,
    suggestedItems: [],
    currentOption: -1
  });
  updateParentState(event.target.textContent);
};

// Suggestion when mouse is over and option
Suggestions.mouseOverSuggestion = (
  updateLocalState: Function,
  indexNumber: number
) => () => {
  // get the selected option and update the current option
  updateLocalState({
    currentOption: indexNumber
  });
};

// When mouse leaves the suggestion reset the current option to -1
Suggestions.mouseLeaveSuggestion = (updateLocalState: Function) => () => {
  updateLocalState({
    currentOption: -1
  });
};
// used together with mouse leave and enter for accesibility.
Suggestions.hoverFocus = (event: SyntheticFocusEvent<HTMLLiElement>) => {
  event.focus();
};

export default Suggestions;
