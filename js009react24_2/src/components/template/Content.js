import {useState} from "react";
import './Content.css';
import Menu from "./Menu";
import Contact from "../pages/Contact";

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
                    {active === 'contact' && <Contact />}
                </div>
            </div>
        </>
    );
}

export default Content;