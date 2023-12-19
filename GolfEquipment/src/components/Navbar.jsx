import AddButton from "./AddButton"

const Navbar = ({onAddClub}) => {

    const scrollToClubs = () => {
        const clubSection = document.querySelector('#clubsSection')
        clubSection.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className="navbar">
            <h1>My Club Caddie</h1>
            <span className="navItems">
                <button onClick={scrollToClubs}>My Clubs</button>
                <AddButton onAddClub={onAddClub} />
            </span>
        </div>
    )
}

export default Navbar