import { Dice } from './Dice.js'



export const Board = ({color, num = 1, gameHistory}) => {
 
  return (
    <div>
       <Dice color = {color} num = {num} /> 
       {/* 숫자를 넣으려면 중괄호 */}
       <div>
        {gameHistory.join(',')}
       </div>
    </div>
  );
}