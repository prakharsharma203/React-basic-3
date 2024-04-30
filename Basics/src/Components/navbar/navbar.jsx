import "./navbar.css"

export function Navbar(){
    return(
    <>
    <div className="nav">
        <img src="data:image/png;base64,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" alt="" />
        <div className="last">
        <p>Platforms</p>
        <p>Plans</p>
        <p>Enterprise</p>
        <p>Resources</p>
        <p>Education</p>
        </div>
        <div className="last">
        <p className="p1">Contact Us</p>
        <p className="p1">Login</p>
        <button>Sign Up</button>
        </div>
    </div>
    </>
    )
}