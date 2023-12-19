import { useState } from 'react'

const ClubForm = ({ setClubs }) => {
  const [clubName, setClubName] = useState('')
  const [clubType, setClubType] = useState('')
  const [brandName, setBrandName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/api/clubs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clubName,
          clubType,
          brandName,
        }),
      });

      if (response.ok) {
        const newClub = await response.json()
        setClubs((prevClubs) => [...prevClubs, newClub])
        // Reset form fields
        alert(`${clubName} added`)
        setClubName('')
        setClubType('')
        setBrandName('')
      } else {
        console.error('Failed to add a new club')
      }
    } catch (error) {
      console.error('Error adding a new club:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} id="addForm">
      <label>
        Club Name:
        <input id="addName" type="text" required value={clubName} onChange={(e) => setClubName(e.target.value)} />
      </label>
      <br />
      <label>
        Club Type:
        <input id="addType" type="text" required value={clubType} onChange={(e) => setClubType(e.target.value)} />
      </label>
      <br />
      <label>
        Brand Name:
        <input id="addBrand" type="text" required value={brandName} onChange={(e) => setBrandName(e.target.value)} />
      </label>
      <br />
      <button id="addSubmit" type="submit">Add Club</button>
    </form>
  )
}

export default ClubForm