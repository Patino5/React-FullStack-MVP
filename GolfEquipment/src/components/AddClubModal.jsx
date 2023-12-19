import ClubForm from "./ClubForm";
import EditClubModal from "./EditClubModal";
import HomeButton from "./HomeButton";

const AddClubModal = ({ onClose, setClubs, singleClub }) => {

    if(singleClub) {
        return (
            <EditClubModal />
        )
    }

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