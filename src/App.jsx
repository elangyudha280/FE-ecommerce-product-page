import { useState,useContext } from 'react'
import { contextSneakers } from './context/sneakersContext'
import ContainerSneakers from './component/ContainerSneakers'

// component navbar
import Navbar from './component/Navbar'

function App() {

  // state data sneakers 
  let [countSneakers,setCountSneakers] = useState(0)

  // context data
  let detail = {
    countSneakers,
    setCountSneakers
  }

  return (
    <contextSneakers.Provider value={detail}>
      <main className="App relative w-full h-[100vh]  flex flex-col overflow-x-hidden overflow-y-auto font-Kumbh-Sans">
      
      {/* component navbar */}
      <Navbar/>
  
      {/* componanet container sneakers */}
      <ContainerSneakers/>
      </main>
    </contextSneakers.Provider>
  )
}

export default App
