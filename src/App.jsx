import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }
  return (
    <>
      <div className="cardsList">
        <Card item={item1}/>
        <Card item={item1}/>
      </div>
    </>
  )
}

export default App
