import './Tag.css'
function Tag(props){
    return (
        <>
            <div className="content">
                <p>{props.content}</p>
            </div>
        </>
      )
}

export default Tag