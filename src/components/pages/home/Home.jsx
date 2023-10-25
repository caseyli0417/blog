import "./home.css"
import Header from "../../header/header.jsx";
import Post2 from "../../post2/post2.jsx";
import Post1 from "../../post1/post1.jsx"

export default function Home() {
    return (
        <>
        <Header/>
        <div className="home">
            <Post1 />
            <Post2 />
        </div>
        </>
    )
}