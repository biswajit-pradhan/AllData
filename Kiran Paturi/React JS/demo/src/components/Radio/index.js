const Radio=(props)=>{

    const selectChoice=(e)=>{
        props.radio.selected(e.target.value);
    }

    return (
        <div className="form-check form-check-inline">
            {props.radio.datalist.map((item,index)=>{
                return <input type="radio"
                name={props.radio.name} 
                value={item.value} 
                onChange={selectChoice}
                />
            })}
        </div>
    )
}
export default Radio;