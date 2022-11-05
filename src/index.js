
// ReactDOM.render(<h1>This is a perative way to code</h1>, document.getElementById("root"))
// function Navbar(){
//     return (
//         <h1>I dey learn React</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar />
//     </div>, 
//     document.getElementById("root")
// )

// const h1 = document.createElement("h1")
// h1.textContent = "this is an imeprative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

// const page = (
//     <nav>
//         <a href="#" className="logo">React App</a>
//         <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Contact</a></li>
//             <li><a href="#">Services</a></li>
//         </ul>
//     </nav>
// )

// console.log(page)

// ReactDOM.render(
//     page, document.getElementById("root")
// )
import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

function Footer() {
    return (        
        <footer className="foot">
            <small>Copyright ©2022 All rights reserved</small>
        </footer>
    )
}


function Header(){
    return (
        <header className="all">
            <nav className="navbar">
                <img src="../src/img/logo192.png" alt="logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function TemporaryName() {
    return (
        <div>
            <Header />
            <section className="section1">
                <h1>Reasons I learn React</h1>
                <ol>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walker</li>
                    <li>Has Well over 100k stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Oiwers thousands of enterprise apps, including mobile apps</li>
                </ol>
            </section>
            <Footer />
        </div>
    )
}
ReactDOM.render (<TemporaryName />, document.getElementById("root"))