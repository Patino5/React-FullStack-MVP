import HomeButton from "./HomeButton";
import EditClub from './EditClub';

const SingleClub = ({singleClub, onClose, deleteClub, editClub}) => {

    const handleClick = () => {
        deleteClub(singleClub.id)
        onClose()
    }

    
    return (
        <>
            <HomeButton onClose={onClose} />
            <div className="singleCard">
                <h1>{singleClub.club_name}</h1>
                <h2>Type: {singleClub.club_type}</h2>
                <h2>Brand: {singleClub.brand}</h2>
            </div>
            <div className='container'>
            <EditClub editClub={editClub} singleClub={singleClub} />
            <button onClick={handleClick}>Delete Club</button>
            </div>
        </>
    )
}

export default SingleClub