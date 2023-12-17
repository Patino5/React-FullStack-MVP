import { useState, useEffect } from 'react'
import Clubs from './components/Clubs'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import Hero from './components/Hero'
import ClubForm from './components/ClubForm'
import SingleClub from './components/SingleClub'

function App() {
  const [loading, setLoading] = useState(true)
  const [singleClub, setSingleClub] = useState(null)
  const [clubs, setClubs] = useState([])
  const [showForm, setShowForm] = useState(false)

  const handleAddClub = () => {

  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/clubs')
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
      const res = await fetch(`http://localhost:3000/api/clubs/${id}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setSingleClub(data);
    } catch (error) {
      console.error('Error fetching single club data:', error);
    }
  };
  

  const clearSingleClub = () => {
    setSingleClub(null)
  }


  if(loading) {
    <Loading />

  }

  if (!loading && singleClub) {
    return (
      <SingleClub singleClub={singleClub} clearSingleClub={clearSingleClub} />
    )
  }


  
  console.log(clubs);
  return (
    <>
    <Navbar />
    <Hero />
    <h1 id="clubsSection">Clubs Section</h1>
    <Clubs clubs={clubs} getSingleClub={getSingleClub} />

    {showForm && <ClubForm onAddClub={handleAddClub} />}
    </>
  )
}

export default App
