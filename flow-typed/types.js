// @flow
declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

export type Gnome = {
  id: number,
  name: string,
  thumbnail: string,
  age: number,
  weight: number,
  height: number,
  hair_color: string,
  professions: Array<string>,
  friends: Array<string>
};

export type State = {
  gnomes: Array<Gnome>,
  searchTerm: string
};

declare type ActionType = "REQUEST_GNOMES" | "SEARCH_TERM" | "FILTER_BY_JOB";

declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|};

export type Action =
  | ActionT<"SEARCH_TERM", string>
  | ActionT<"REQUEST_GNOMES", Gnome>;
  | ActionT<"FILTER_BY_JOB", string>;
