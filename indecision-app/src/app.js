class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subtitle = "Put you life in the hand of computer";
        const options = ["1", "2", "3"];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {

    handlePick() {
        alert('handle');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I Do?</button>
            </div>
        );
    }
}

class Options extends React.Component {

    constructor(props){
        super(props);
        this.handelRemoveAll = this.handelRemoveAll.bind(this);
    }

    handelRemoveAll() {
        console.log(this.props.options);
    }

    render() {
        let counter = 0;

        return (
            <div>
                <button onClick={this.handelRemoveAll}>Remove All</button>
                {this.props.options.map(option => {
                    counter++;
                    return <Option key={option + counter} option={option} />;
                })}

            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option : {this.props.option}
            </div>
        );
    }
}

class AddOption extends React.Component {

    addOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if(option){
            alert(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addOption}>
                    <input type="text" className="option" id="option" />
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));