import '../styles/TileRow.css';
import TileRow from './TileRow';

function Casino() {
  const data = {
    fruits:

      [
        '🍐', '🍋', '🍓', '🍇', '🍈', '🍉', '🍊', '🍌'

      ]
  }

  const getRandomFruit = () => {
    const randomFruitIndex = Math.floor(Math.random() * data.fruits.length);
    const randomFruit = data.fruits[randomFruitIndex];
    console.log(randomFruit)
    return randomFruit;
  }


  
  return (
    <div className='Casino'>
      <h1>Welcome to cakes casino</h1>
      <TileRow fruit1={getRandomFruit()} fruit2={getRandomFruit()} fruit3={getRandomFruit()} />
    </div>
  )
}

export default Casino;