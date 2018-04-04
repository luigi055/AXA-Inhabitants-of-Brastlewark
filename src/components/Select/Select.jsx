// @flow
import React from "react";
import SelectComponent from "./SelectStyled";

type Props = {
  updateState: Function,
  stateName: string,
  defaultValue: string,
  items: object,
  state: object,
  maxWidth: string
};

const Select = ({
  updateState,
  stateName,
  defaultValue,
  items,
  state,
  maxWidth
}: Props) => (
  <SelectComponent maxWidth={maxWidth}>
    <select
      value={state[stateName] && state[stateName]}
      onChange={Select.onChange(updateState)}
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

Select.onChange = (updateState: Function) => (
  event: SyntheticEvent<HTMLSelectElement>
) => {
  event.preventDefault();
  updateState(event.currentTarget.value);
};

export default Select;
