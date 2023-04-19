import { Link } from 'react-router-dom'

export const NavBar = () => {


  return (
    <>
        <nav>
            <ul className='navBar' id="navList">
                <li className="whiteLetters"><Link to='/'>Home</Link></li>
                <li className="whiteLetters"><Link to='/nosotros'>Nosotros</Link></li>
                <li className="whiteLetters"><Link to='/login'>Login</Link></li>
            </ul >
        </nav >
    
    </>
  )
}
