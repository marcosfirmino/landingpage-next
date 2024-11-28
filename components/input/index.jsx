import Styles from "./input.module.scss"

const Input = ({type, placeholder, pattern, required, onBluer}) => {
    return (
        <input 
            
            type={type}
            placeholder={placeholder}
            pattern={pattern}
            required={required}
            className={Styles.input}
            onBluer={onBluer}
            />
    )
}

export default Input