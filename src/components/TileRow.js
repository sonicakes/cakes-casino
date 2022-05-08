import '../styles/TileRow.css';

function TileRow(props) {

  const isWinner = () => {
    return props.fruit1 === props.fruit2 && props.fruit2 === props.fruit3
  }
  return (
    <div>
     <div className={isWinner() ? "winner" : "loser"} >{isWinner() ? "win!" : "lose"}</div> 
      <div className="TileRow">
        <div className='Tile'>{props.fruit1}</div>  <div className='Tile'>{props.fruit2}</div>  <div className='Tile'>{props.fruit3}</div>
      </div>
    </div>
  );
}

export default TileRow;