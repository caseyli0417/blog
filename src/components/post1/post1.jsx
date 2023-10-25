import "./post1.css"
import { Link } from 'react-router-dom'

export default function Post1() {
    return (
        <div className="post">
            <img 
            className="postImg"
                src="./cutiee.jpeg"
                alt="post"
            />
            <div className="postInfo">
                <span className="postTitle">
                    <Link to='/post1' style={{textDecoration:"none", color:"inherit"}}>Sleep Deprivation: The Hidden Dangers of Not Getting Enough Rest</Link>
                </span>
                <span className="postDate">Tiffany Lam</span>
            </div>
            <p className="postDesc">
            "In a world that seems to value hustle and productivity above all else, one of the most commonly sacrificed aspects of our lives is sleep. Whether it's the demands of work, the allure of late-night entertainment, or just plain old insomnia, a lack of sleep has become a widespread problem. But what are the real dangers of not getting enough rest? In this blog, we'll explore the hidden perils of sleep deprivation."
            </p>
        </div>
    )
}