import "./home.css"
import Header from "../../header/header.jsx";
import Post from "../../post/post.jsx";

export default function Home() {
    return (
        <>
        <Header/>
        <div className="home">
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
        </>
    )
}