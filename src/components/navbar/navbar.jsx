import "./navbar.css"
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';
import { Link } from 'react-router-dom'

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
                    <li className="topListItem">
                        <Link to='/' style={{textDecoration:"none", color:"inherit"}}>HOME</Link>
                    </li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                </ul>
            </div>
        </div>
    )
}