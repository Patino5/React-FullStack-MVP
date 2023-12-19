const HomeButton = ({onClose}) => {

        const handleClick = () => {
            onClose()
        }

    return <button onClick={handleClick}>CLOSE</button>
}

export default HomeButton