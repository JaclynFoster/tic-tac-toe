import React from 'react'


const Square = ({...props}) => {
    console.log("player prop",props.player)
    console.log("square prop",props.squares)
    const handleClick = () => {
        if(!props.squareValue && props.player === true) {
            console.log("square value", props.squareValue)
            let XArr = props.squares
            XArr[props.index] = "X"
            props.setSquares([...XArr])
            props.setPlayer(false)
        } else if (!props.squareValue && props.player === false) {
        let OArr = props.squares
        OArr[props.index] = "O"
        props.setSquares([...OArr])
        props.setPlayer(true)
        }
    }

    return(
        <div className="square" onClick={handleClick}>
          {props.squareValue === "O" ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png"/> : props.squareValue === "X" ? "X" : null }
        </div>
      
       
    )
}

export default Square