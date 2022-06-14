import { CircularProgress } from '@mui/material'
import './Loader.css';

const Loader = () => {

    return(
        <div className="Loader">
            <CircularProgress size={100}/>
        </div>
    )
}

export default Loader;