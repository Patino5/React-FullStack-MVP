import { useState } from 'react'
import Clubs from './components/Clubs'

function App() {
  const [clubs, setClubs] = useState([])



  return (
    <>
    <h1>Title Component</h1>
    <Clubs clubs={clubs} />
    </>
  )
}

export default App
