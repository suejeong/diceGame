import { Board } from "./Board";
import { useState } from 'react';
import { Button } from './Button.js'


const random = n => Math.ceil(Math.random() * n)

function App() {
  {/*state의 값, state를 바꿀 때 사용하는 함수 */}
  const [myGameHistory, setMyGameHistory] = useState([])
  const [yourGameHistory, setYourGameHistory] = useState([])

  const handleClick = () => {
    
    const nextMyNum = random(6)
    const nextYourNum = random(6)
    setMyGameHistory([...myGameHistory, nextMyNum])
    setYourGameHistory([...yourGameHistory, nextYourNum])
   }
  
   const handleReset = () => {
   
    setMyGameHistory([])
    setYourGameHistory([])
   }
  
 
  return (
    <div style = {{ backgroundColor: '#e9e9e9' }}>
      <Board 
        color ="blue" 
        num={myGameHistory.at(-1)} 
        gameHistory={myGameHistory}
      />
      <Board color = "red"  num={yourGameHistory.at(-1)} gameHistory={yourGameHistory}/>
      <Button onClick = {handleClick} >던지기</Button>
      <Button onClick = {handleReset} >처음부터</Button>
    </div>
  )
}

export default App;
