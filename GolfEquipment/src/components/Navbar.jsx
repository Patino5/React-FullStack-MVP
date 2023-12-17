import AddButton from "./AddButton"
import Button from "./AddButton"

const Navbar = () => {

    const scrollToClubs = () => {
        const clubSection = document.querySelector('#clubsSection')
        clubSection.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className="navbar">
            <h1>My Club Caddie</h1>
            <span className="navItems">
                <button onClick={scrollToClubs}>My Clubs</button>
                <AddButton />
            </span>
        </div>
    )
}

export default Navbar