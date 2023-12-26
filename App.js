// const heading = React.createElement("h1",{id: "heading"},"Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(heading);

/*
<div id="parent">
    <div id="child1">
        <h1>I am heading Tag</h1>
        <h1>I am heading Tag</h1>
    </div>
    <div id="child2">
        <h1>I am heading Tag</h1>
        <h1>I am heading Tag</h1>
    </div>
</div>
 */

const parent = React.createElement("div",{id: "parent"},[React.createElement("div",{id: "child1"},[React.createElement("h1",{}, "I am h1 tag!"),React.createElement("h2",{},"I am h2 tag!")]),React.createElement("div",{id: "child2"},[React.createElement("h1",{}, "I am h1 tag!"),React.createElement("h2",{},"I am h2 tag!")])]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);