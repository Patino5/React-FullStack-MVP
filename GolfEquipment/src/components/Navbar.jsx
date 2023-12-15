import Button from "./AddButton"

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>My Club Caddie</h1>
            <span className="navItems">
                <button>My Clubs</button>
                <Button />
            </span>
        </div>
    )
}

export default Navbar