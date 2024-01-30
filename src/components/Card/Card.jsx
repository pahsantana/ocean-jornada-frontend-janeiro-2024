import './Card.css'
import Tag from '../Tag/Tag'
function Card(){
    return (
        <>
            <div className="card">
                <h2>Rick Sanchez</h2>
                <div className="tagsList">
                    <Tag content="Status: Vivo"/>
                    <Tag content="Espécie: Humana"/>
                    <Tag content="Origem: Terra C-137"/>
                </div>
                <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
            </div>
        </>
      )
}

export default Card