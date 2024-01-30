import './Card.css'
import Tag from '../Tag/Tag'
function Card(props){
    const item = props.item
    return (
        <>
            <div className="card">
                <h2>{item.name}</h2>
                <div className="tags">
                    <Tag content="Status: Vivo"/>
                    <Tag content="Espécie: Humana"/>
                    <Tag content="Origem: Terra C-137"/>
                </div>
                <img src={item.image}/>
            </div>
        </>
      )
}

export default Card