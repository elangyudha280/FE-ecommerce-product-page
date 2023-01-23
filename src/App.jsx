import { useState,useReducer,useEffect } from 'react'
import { contextSneakers } from './context/sneakersContext'
import ContainerSneakers from './component/ContainerSneakers'

// component navbar
import Navbar from './component/Navbar'

// LOADING
import Loading from './component/loading'

function reducer(state,action){
  switch(action.type){
    // check apakah data type adalah addNumberCount
    case 'addNumberCount': return {...state,countNumber:state.countNumber++};
    // check apakah data typenya adalah minus count
    case 'minusNumberCount': return {...state,countNumber:(state.countNumber < 1) ? state.countNumber=0 : state.countNumber--};
    // check apakah data typenya adalah sumCountSneakers
    case 'sumCountSneakers': 
    return {...state,countSneaker:state.countSneaker+state.countNumber,countNumber:0};
    // check apakah data typenya adalah deleteCount
    case 'deleteCount':
      return {...state,countSneaker:0}
    // check apakah data type yg dikirimkan adalah changeThumbImg
    case 'changeThumbImg':{
      return {...state,countSliderImg:state.countSliderImg = action.dataId}
    }
  }
}

function App() {

  // state data sneakers 
  let [state,dispatch] = useReducer(reducer,{countSneaker:0,countNumber:0,countSliderImg:1})

  // check loading
  let [loading,setLoading] = useState(true);

  // context data
  let detail = {
    state,
    dispatch,
  }


    useEffect(() => {
      window.addEventListener('load',()=>{
        document.querySelector('.loading').classList.add('opacity-0')
        setTimeout(() => {
          setLoading(false)
        }, 100);
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
