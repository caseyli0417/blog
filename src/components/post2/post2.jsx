import "./post2.css"
import { Link } from 'react-router-dom'

export default function Post2() {
    return (
        <div className="post">
            <img 
            className="postImg"
                src="./rabit.jpg"
                alt="post"
            />
            <div className="postInfo">
                <span className="postTitle">
                    <Link to='/post2'>The Perils of Overstudying: Balancing Academics and Well-Being</Link>
                </span>
                <span className="postDate">Casey Li</span>
            </div>
            <p className="postDesc">
            "In a world that increasingly values academic success and career achievements, students often find themselves immersed in a culture of studying and pushing their limits. While education is undoubtedly essential, there is a lesser-discussed aspect of the pursuit of knowledge: the danger of studying too much. In this article, we'll explore the perils of overstudying and the importance of striking a balance between academic commitments and overall well-being."
            </p>
        </div>
    )
}