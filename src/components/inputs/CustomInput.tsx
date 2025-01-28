interface props{
    label:string,
    name:string,
    type?:string,
    id:string,
}

const CustomInput = (prop:props) => {
    const {label, type, name, id} = prop
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type={type ? type : "test"} name={name} id={id} />
    </div>
  )
}

export default CustomInput