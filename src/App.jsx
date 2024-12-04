// import React, { useEffect } from 'react'
// import { useState } from 'react'

// const App = () => {
//     const[loading,setLoading] = useState(true);
//     const[profiles,setProfiles] = useState([]);
    
//     useEffect(()=>{
//      async function getData() {
//         const url = 'https://jsonplaceholder.typicode.com/photos'
//         const res = await fetch(url);
//         const data = await res.json();
//         if(res.ok){
//             setLoading(true)
//             setProfiles(data)
//         }
//         console.error("Error fetching the data",res)
//         setLoading(false)
//      }
//      getData();
//     },[])
//   return (
//     <div>
//         {loading?
//         <p>Loading</p>
//         :null}
//         <ol>
//            {profiles.map((pics)=>(
//             <li key={pics.id}>
//                 {pics.title}
//             </li>
//            ))}
            
//         </ol>
      
//     </div>
//   )
// }

// export default App


import React from 'react'
import Pics from './Pics'
import Comments from './Comments'
import Posts from './Posts'
// import todos from './todos'
import Todos from './todos'


const App = () => {
  return (
    <div>
       {/* <Comments/> */}
       {/* <Posts/> */}
       
      <Todos/>
    </div>
  )
}

export default App
