import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
                src="/postimage.jpg"
                alt="post"
            />
            <div className="postInfo">
                <span className="postTitle">
                    Steve Harrington
                </span>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum."
            </p>
        </div>
    )
}