import { useState } from 'react'
import HomeButton from "./HomeButton";

const EditClubModal = ({ onClose, setClubs, singleClub, setEditForm }) => {

    const [clubName, setClubName] = useState(singleClub.club_name)
    const [clubType, setClubType] = useState(singleClub.club_type)
    const [brandName, setBrandName] = useState(singleClub.brand)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try { 
            const response = await fetch(`http://localhost:3002/api/clubs/${singleClub.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                clubName,
                clubType,
                brandName,
            })
        })
    
        if (response.ok){
            const editedClub = await response.json()
            // setClubs((prevClubs) => [...prevClubs, editedClub])
            alert(`${clubName} modified`)
            setEditForm(false)
        } 
        } catch (error) {
        console.error('Error editing club:', error) 
        }
    }


    return (
        <div className="modal-overlay">
            <div className="modal">
                <HomeButton onClose={onClose} />
                <h2>Edit Club</h2>
                <form onSubmit={handleSubmit} id="editForm">
                    <label>
                        Club Name:
                        <input id="editName" type="text" required value={clubName} onChange={(e) => setClubName(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Club Type:
                        <input id="editType" type="text" required value={clubType} onChange={(e) => setClubType(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Brand Name:
                        <input id="editBrand" type="text" required value={brandName} onChange={(e) => setBrandName(e.target.value)} />
                    </label>
                    <br />
                    <button type="submit">Update Club</button>
                    </form>
                            </div>
                        </div>
    )
}

export default EditClubModal