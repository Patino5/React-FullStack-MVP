const HomeButton = ({clearSingleClub}) => {

        const handleClick = () => {
            clearSingleClub()
        }

    return <button onClick={handleClick}>Home</button>
}

export default HomeButton