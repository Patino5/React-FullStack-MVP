import ClubForm from "./ClubForm";
import HomeButton from "./HomeButton";

const AddClubModal = ({ onClose, setClubs }) => {

    return (
        <div className="modal-overlay">
            <div className="modal">
                <HomeButton onClose={onClose} />
                <h2>Add New Club</h2>
                <ClubForm setClubs={setClubs} />
            </div>
        </div>
    )
}

export default AddClubModal