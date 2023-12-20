const Footer = () => {

    const scrollToHero = () => {
        const clubSection = document.querySelector('#hero')
        clubSection.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <footer >
            <p>&copy; 2023 <a onClick={scrollToHero} >My Club Caddie</a>. All rights reserved.</p>
        </footer>
    )
}

export default Footer