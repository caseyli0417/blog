import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Casey Li and Tiffany Lam</span>
            </div>
            <img className="headerImg" src="/header.jpg" alt="foggy mountains" />
        </div>
    )
}