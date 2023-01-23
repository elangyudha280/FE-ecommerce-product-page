import { useState,useReducer,useContext,useEffect } from 'react'
import { contextSneakers } from './context/sneakersContext'
import ContainerSneakers from './component/ContainerSneakers'

// component navbar
import Navbar from './component/Navbar'

// LOADING
import Loading from './component/loading'

function reducer(state,action){
  switch(action.type){
    case 'addNumberCount': return {...state,countNumber:state.countNumber++};
    case 'minusNumberCount': return {...state,countNumber:(state.countNumber < 1) ? state.countNumber=0 : state.countNumber--};
    case 'sumCountSneakers': 
    return {countSneaker:state.countSneaker+state.countNumber,countNumber:0};
    case 'deleteCount':
      return {...state,countSneaker:0}
  }
}

function App() {

  // state data sneakers 
  let [state,dispatch] = useReducer(reducer,{countSneaker:0,countNumber:0})

  // state count slider img
  let [countSliderImg,setCountSliderImg] = useState(1)

  // check loading
  let [loading,setLoading] = useState(false);

  // context data
  let detail = {
    state,
    dispatch,
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
