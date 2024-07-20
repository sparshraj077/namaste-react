
    //     const heading=React.createElement(
    //         "h1",
    //         {id: "heading", xyz:"abc"  },
    //         "hello sir ho are you i hope you are fine");
    //         console.log("heading");
    //    const root=  ReactDOM.createRoot(document.getElementById("root"));
    //     root.render(heading);
 
{/* <div id="parent">
    <div>
        <h1>hey there I'm back</h1>
        <h2>is there any free class today</h2>
    </div>
    <div id="child">
<h1>I am a h1 tag</h1>
<h2>I ama a h2 tag</h2>
    </div>
</div> */}
 const parent=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement("div",{id:"child"},  [
        React.createElement("h1",{},"hey there I'm back"),
        React.createElement("h2",{},"is there any free class today"),
    ]),
    React.createElement("div",{id:"child2"},  [
        React.createElement("h1",{},"hey there I'm back"),
        React.createElement("h2",{},"is there any free class today"),
    ])]
);
        console.log(parent);
        const root=ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);
