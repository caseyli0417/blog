import "./navbar.css"
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';

export default function Navbar() {
    return (
        <div className="nav">
            <div className="topLeft">
                <AiFillGithub className="topIcon"/>
                <FaFacebookSquare className="topIcon"/>
                <AiFillInstagram className="topIcon"/>
                <ImLinkedin className="topIcon"/>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                </ul>
            </div>
        </div>
    )
}