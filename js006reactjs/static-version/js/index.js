// ReactDOM.render(<div>
//     <h1>Hello</h1>
//     <h2>World</h2>
// </div>, document.getElementById("app"));


// ReactDOM.render(
//     React.createElement('input', {
//         placeholder: 'Enter your name',
//         type: 'text',
//         onClick: () => { alert('Hello'); }
//     }), 
//     document.getElementById("app"));

const inputClick = () => {
    console.log('Input clicked');
};

const mouseOver = () => {
    console.log('Mouse over');
}

const helpText = "Enter your name"

const elements = (
    <div>
        <h1>{ (false) ? "Yes" : "No" }</h1>
        <input placeholder={helpText} onClick={inputClick} onMouseOver={mouseOver}/>
    </div>
);
const app = document.getElementById("app");

ReactDOM.render(elements, app);