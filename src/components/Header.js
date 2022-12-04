import logo from '../assets/logo.jpg';
const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark sticky-top bg-dark'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <img src={logo} width='55'  alt=''/>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/#home'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/#skills'>
                Skills
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/#projects'>
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
