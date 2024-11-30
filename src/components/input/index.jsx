import Styles from "./input.module.scss"

const Input = ({type, placeholder, pattern, required, onBluer, name, id, onChange, value}) => {
    return (
        <input 
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            pattern={pattern}
            required={required}
            className={Styles.input}
            onBluer={onBluer}
            onChange={onChange}
            value={value}
            />
    )
}

export default Input