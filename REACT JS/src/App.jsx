import { useState } from "react"

function App() {
const [val, setVal] = useState({name:'kamal', isBanned:false});
  return (
    <div className="p-5 font-[family-name:var(--gilroy)]">
       <h1>name : {val.name}</h1>
       <h2>banned : {val.isBanned.toString()}</h2>
       <button onClick={()=>setVal({...val, isBanned : !val.isBanned})} className={`px-3 py-1 ${val.isBanned ? 'bg-blue-600' : 'bg-red-600'} text-white text-xs rounded-full`}>Change</button>
    </div>
  )
}
export default App