const EditClub = ({ editClub, singleClub }) => {

    const handleClick = () => {
        
        editClub(singleClub.id)
    }

    return (
        <button onClick={handleClick}>Edit Club</button>
    )
}
export default EditClub