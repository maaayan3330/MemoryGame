import LOGO from '../assets/Logo.png';

// function for the logo of the game
export default function Header() {
    return(
        <header className='header'>
            <img src={LOGO} alt='logo of Brooklyn nine nine'/>
        </header>
    );
}