const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submit", e.target.elements.option);

    const option = e.target.elements.option.value;
    console.log(option);

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
}

const resetOptions = () => {
    app.options = [];
    render();
}

//JSX - JavaScript XML
var appRoot = document.getElementById("app");

const render = () => {
    let counter = 0;
    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
            <button type="button" disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>
            <button type="button" onClick={resetOptions}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        counter++;
                        return <li key={option + counter}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" className="option" id="option" />
                <button type="submit">Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();