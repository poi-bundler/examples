let component = ReasonReact.statelessComponent("Greeting");

/* underscores before names indicate unused variables. We name them for clarity */
let make = (~name, _children) => {
  ...component,
  render: (_self) => <button>{ReasonReact.string("Hello " ++ name ++ "!")} </button>
};