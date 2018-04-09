// @flow
import React from "react";
import SelectComponent from "./SelectStyled";

// Declare props types with FLow
type Props = {
  updateState: Function,
  stateName: string,
  defaultValue: string,
  items: object,
  state: object,
  maxWidth: string,
  updateCurrentPage: Function
};

// Using spread operator to create a new array with the defaultValue first
const Select = ({
  updateState,
  stateName,
  defaultValue,
  items,
  state,
  maxWidth,
  updateCurrentPage
}: Props) => (
  <SelectComponent maxWidth={maxWidth}>
    <select
      value={state[stateName] && state[stateName]}
      onChange={Select.onChange(updateState, updateCurrentPage)}
    >
      {[defaultValue, ...items].map(item => (
        <option
          value={item}
          key={item}
          defaultChecked={state[stateName] === item}
        >
          {item}
        </option>
      ))}
    </select>
  </SelectComponent>
);

// When select change
Select.onChange = (updateState: Function, updateCurrentPage: Function) => (
  event: SyntheticEvent<HTMLSelectElement>
) => {
  event.preventDefault();
  // Update the filter by jobs state
  updateState(event.currentTarget.value);
  // Reset pagination to 0 when change filter
  updateCurrentPage(0);
};

export default Select;
