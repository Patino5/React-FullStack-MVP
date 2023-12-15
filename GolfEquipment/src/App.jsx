import { useState } from 'react'
import Clubs from './components/Clubs'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import Hero from './components/Hero'
import ClubForm from './components/ClubForm'

function App() {
  const [loading, setLoading] = useState(true)
  const [singleClub, setSingleClub] = useState(null)
  const [clubs, setClubs] = useState([
    {
      id: 1,
      clubName: 'Driver',
      clubType: 'Driver',
      brandName: 'TaylorMade'
    },
    {
      id: 2,
      clubName: '3 Wood',
      clubType: 'Wood',
      brandName: 'Callaway'
    },
    {
      id: 3,
      clubName: '7 Iron',
      clubType: 'Iron',
      brandName: 'Titleist'
    },
  ])
  

  const getSingleClub = async (id) => {

    setSingleClub(id)
  }


  if(loading) {
    <Loading />

  }

  if (!loading && singleClub) {
    return (
      <SingleClub singleClub={singleClub} />
    )
  }


  
  console.log(clubs);
  return (
    <>
    <Navbar />
    <Hero />
    <h1>Clubs Section</h1>
    <Clubs clubs={clubs} getSingleClub={getSingleClub} />
    </>
  )
}

export default App
