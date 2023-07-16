import React from 'react'
import { players } from '../Players'
import Playercard from './Playercard'
const Playerlist = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-between'}}>
        {
        players.map((player) => 
        <Playercard player ={player} key={player.id} />)
        
    }
        </div>
  )
}

export default Playerlist