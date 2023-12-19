import { useState, useEffect } from 'react'
import Clubs from './components/Clubs'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import Hero from './components/Hero'
import EditClubModal from './components/EditClubModal'
import SingleClub from './components/SingleClub'
import AddClubModal from './components/AddClubModal'

function App() {
  const [loading, setLoading] = useState(true)
  const [singleClub, setSingleClub] = useState(null)
  const [clubs, setClubs] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editForm, setEditForm] = useState(false)


  const onAddClub = () => {
    setShowForm(true)
  }

  const onClose = () => {
    setShowForm(false)
    setSingleClub(null)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3002/api/clubs')
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setClubs(data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };
  
    fetchData();
  }, []);
  
  
  const getSingleClub = async (id) => {
    try {
      const res = await fetch(`http://localhost:3002/api/clubs/${id}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setSingleClub(data);
    } catch (error) {
      console.error('Error fetching single club data:', error);
    }
  };

  const editClub = async (id) => {
    setEditForm(true)
  }

  const deleteClub = async (id) => {
    try {
        const res = await fetch(`http://localhost:3002/api/clubs/${id}` , {
            method: 'DELETE',
        })
        setClubs(clubs.filter(club => club.id !== id))
        if (res.ok) {
            console.log('Club delted')
        } else {
            console.error('Failed to delete club')
        }
    } catch (error) {
        console.error('Error deleting club:', error)
    }
}

  if(loading) {
    <Loading />
  }

  if (!loading && singleClub) {
    return (
      <>
      <SingleClub singleClub={singleClub} onClose={onClose} deleteClub={deleteClub} editClub={editClub} />

      {editForm && <EditClubModal singleClub={singleClub} setClubs={setClubs} onClose={onClose} setEditForm={setEditForm} />}
      </>
    )
  }


  return (
    <>
    <Navbar onAddClub={onAddClub} />
    <Hero onAddClub={onAddClub} />
    <h1 id="clubsSection">Clubs Section</h1>
    <Clubs clubs={clubs} getSingleClub={getSingleClub} />
    

    {showForm && <AddClubModal clubs={clubs} setClubs={setClubs} onClose={onClose} singleClub={singleClub} />}
    </>
  )
}

export default App
