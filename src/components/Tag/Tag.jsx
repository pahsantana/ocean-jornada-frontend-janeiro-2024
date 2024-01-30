import './Tag.css'
function Tag(props){
    return (
        <>
            <div className="tag">
                {props.content}
            </div>
        </>
      )
}

export default Tag