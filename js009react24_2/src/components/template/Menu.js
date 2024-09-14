import './Menu.css';

function Menu({ active, setActive }) {

    return (
        <div className="menu">
            <button onClick={() => handleClick('home')}>Home</button>
            <button onClick={() => handleClick('contact')}>Contact</button>
            <button onClick={() => handleClick('about')}>About</button>
        </div>
    );

    function handleClick(value) {
        setActive(value);
        console.log(value);
    }
}

export default Menu;