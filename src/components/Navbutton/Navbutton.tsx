import { Link } from "react-router-dom";

import './Navbutton.css'

type NavbuttonProps = {
    path: string,
    name: string,
}

export function Navbutton({ path, name }: NavbuttonProps) {
    return (
        <div className='link-container'>
            <Link to={path} className='link'> {name} </Link>
        </div>
    );
}

export function Navtitle({ path, name }: NavbuttonProps) {
    return (
        <div className='title-link-container'>
            <Link to={path} className='title-link'> {name} </Link>
        </div>
    );
}

// export default { Navbutton, Navtitle };