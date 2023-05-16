function getUserRole(name) {
    if (name.toLowerCase() === "lucky") {
        return "ADMIN";
    } else {
        return "NORMAL USER";
    }
}

function getTag(flag) {
    if (flag) {
        return <p><i>This is a <b>tag</b>...</i></p>;
        // return "something";
    }
}

let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
}

const minusOne = () => {
    count--;
    renderCounterApp();
}

const renderCounterApp = () => {
    const template = (
        <div>
            This is <b>JSX</b> from app.js<hr />
            <h3>shgsahgs</h3>
            <hr />
            <p>{getUserRole(username)}</p>
            <h1>Name:</h1> <h3>{username}</h3>
            {getTag(true)}
            <h1>{username.toLowerCase() !== "lucky" ? "USER" : null}</h1>
            <hr />
            <h1>Count: {count}</h1>
            <button id="button1" className="button" onClick={addOne} type="">+1</button>
            <button type="" onClick={minusOne}>-1</button>
            <button type="" onClick={
                () => {
                    // console.log("reset");
                    count = 0;
                    renderCounterApp();
                }
            }>Reset</button>
        </div>);

    ReactDOM.render(template, appRoot);
}

renderCounterApp();