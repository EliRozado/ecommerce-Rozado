import './Button.css';

const Button = ({text, f, variant, disable, children}) =>{
    return(
        <button className={`button ${variant}`}
            onClick={f} 
            disabled={disable}
            >
            {children ? children : text}
        </button>
    )
}

export default Button;