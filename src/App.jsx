import { useState,useContext } from 'react'
import { dataSneakers } from './context/sneakersContext'
import ContainerSneakers from './component/ContainerSneakers'

// component navbar
import Navbar from './component/Navbar'

function App() {

  // state data sneakers 
  let [dataSneaker,setDataSneakers] = useState()

  // context data
  let detail = {
    dataSneaker,
    setDataSneakers
  }

  return (
    <main className="App relative w-full h-[100vh] flex flex-col overflow-x-hidden overflow-y-auto font-Kumbh-Sans">
      
    {/* component navbar */}
    <Navbar/>

    {/* componanet container sneakers */}
    <ContainerSneakers/>
    </main>
  )
}

export default App
