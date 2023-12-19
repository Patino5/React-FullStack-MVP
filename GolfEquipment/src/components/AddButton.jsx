const AddButton = ({onAddClub}) => {
    const handleClick = () => {
        onAddClub()
        
    }

    return (
        <button onClick={handleClick}>Add a Club</button>
    )
}

export default AddButton