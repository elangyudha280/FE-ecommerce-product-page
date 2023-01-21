import { useState,useContext,useEffect } from 'react'
import { contextSneakers } from './context/sneakersContext'
import ContainerSneakers from './component/ContainerSneakers'

// component navbar
import Navbar from './component/Navbar'

// LOADING
import Loading from './component/loading'

function App() {

  // state data sneakers 
  let [countSneakers,setCountSneakers] = useState(0)

  let [numberCount,setNumberCount] = useState(0)

  // state count slider img
  let [countSliderImg,setCountSliderImg] = useState(1)

  // check loading
  let [loading,setLoading] = useState(true);

  // context data
  let detail = {
    countSneakers,
    setCountSneakers,
    numberCount,
    setNumberCount,
    countSliderImg,
    setCountSliderImg
  }


    useEffect(() => {
      window.addEventListener('load',()=>{
        setLoading(false)
      })
  
    }, [])
    

  return (
    <contextSneakers.Provider value={detail}>
     {
      (loading)? <Loading/>:
      <main className="App relative w-full h-[100vh]  flex flex-col overflow-x-hidden overflow-y-auto font-Kumbh-Sans">
      
      {/* component navbar */}
      <Navbar/>
  
      {/* componanet container sneakers */}
      <ContainerSneakers/>
      </main>
     }
    </contextSneakers.Provider>
  )
}

export default App
