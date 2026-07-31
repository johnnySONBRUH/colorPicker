import './App.css'
import {useState} from 'react'
import Github from './Github'
export default function App(){
  const [curr,setCurr] = useState("")
  return (
    <div className='font-["Comic_Sans_MS"]'>
      <div className='flex justify-center items-center flex-col'>
        <p>Color Picker</p>
        <input type='color' onChange={(e)=>{
          setCurr(e.target.value)
          console.log(e.target.value)
        }} className={`border border-black rounded-lg p-2 w-4/5 h-4/5 bg-[${curr}]`} />
        <p>HEX value: {curr}</p>
        <div className={`w-4/5 h-4/5 bg-[${curr}]`}></div>
    </div>
    <Github repoURL='A' profileURL='A' />
    </div>
  )
}