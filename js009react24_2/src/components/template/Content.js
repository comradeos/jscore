import './Content.css';
import Menu from "./Menu";
import {useState} from "react";

function Content() {
    const [active, setActive] = useState('home');

    return (
        <>
            <div className="content">
                <h1>Content</h1>
                <Menu active={active} setActive={setActive}/>
                <div>
                    {/* Вы можете использовать значение active здесь */}
                    <p>Current active: {active}</p>
                </div>
            </div>
        </>
    );
}

export default Content;