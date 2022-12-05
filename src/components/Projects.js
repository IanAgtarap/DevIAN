import game from '../assets/game.png';
import sim from '../assets/sim.png';
import portfolio from '../assets/portfolio.png';
import projectic from '../assets/projectic.png';

function Projects() {
  return (
    <div className='py-5' id='projects'>
      <div className='container'>
        <h2 className='mb-4 pt-5 text-center'>My Projects</h2>
        <div className='gap-3 p-5'>
          {/* GAME */}
          <div className='card mb-5 bg-dark project-border'>
            <div className='row g-0 d-lg-flex flex-lg-row-reverse'>
              <div className='col-md-6 d-flex align-items-center p-3'>
                {' '}
                <img src={game} className='w-100' alt='' />
              </div>
              <div className='col-md-6'>
                <div className='card-body'>
                  <h5 className='card-title'>Magic Square</h5>
                  <div className='mb-2'>
                    <span className='badge bg-info text-dark'>JavaScript</span>
                    <span className='badge bg-info text-dark'>HTML</span>
                    <span className='badge bg-info text-dark'>CSS</span>
                  </div>
                  <p className='card-text'>
                    This is a simple game made in vanilla JavaScript, HTML, and,
                    CSS. This was my project during my training at Uplift. In
                    this project I learn about DOM or Document Object
                    Manipulation which I've enjoy so much by making the app
                    dynamic.
                  </p>
                  <a
                    href='https://github.com/IanAgtarap/MagicSquare'
                    className='text-decoration-none text-info'
                    target='_blank'
                    rel='noreferrer'
                  >
                    View code
                  </a>
                  <hr />
                  <a
                    href='https://ianagtarap.github.io/MagicSquare/'
                    className='fs-4 text-decoration-none text-info'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Play the game here!
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* SIM */}
          <div className='card mb-5 bg-dark project-border'>
            <div className='row g-0 d-lg-flex flex-lg-row-reverse'>
              <div className='col-md-6 d-flex align-items-center p-3'>
                {' '}
                <img src={sim} className='w-100' alt='' />
              </div>
              <div className='col-md-6'>
                <div className='card-body'>
                  <h5 className='card-title'>Sim Registration App</h5>
                  <div className='mb-2'>
                    <span className='badge bg-info text-dark'>ReactJS</span>
                    <span className='badge bg-info text-dark'>Bootstrap</span>
                  </div>
                  <p>
                    I made this project while thinking what if I'am the
                    developer of the sim registration app based on the new law
                    signed by President Marcos. The app was developed using
                    react js at the same time bootstrap. Using bootstrap made
                    the development fast while having a short period of time.
                  </p>
                  <a
                    href='https://github.com/IanAgtarap/sim_registration'
                    className='text-decoration-none text-info'
                    target='_blank'
                    rel='noreferrer'
                  >
                    View code
                  </a>
                  <hr />
                  <a
                    href='https://sim-registration.vercel.app/'
                    className='fs-4 text-decoration-none text-info'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Check the app here!
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio */}
          <div className='card mb-5 bg-dark project-border'>
            <div className='row g-0 d-lg-flex flex-lg-row-reverse'>
              <div className='col-md-6 d-flex align-items-center p-3'>
                {' '}
                <img src={portfolio} className='w-100' alt='' />
              </div>
              <div className='col-md-6'>
                <div className='card-body'>
                  <h5 className='card-title'>Portfolio version 1</h5>
                  <div className='mb-2'>
                    <span className='badge bg-info text-dark'>JavaScript</span>
                    <span className='badge bg-info text-dark'>HTML</span>
                    <span className='badge bg-info text-dark'>CSS</span>
                  </div>
                  <p>
                    My version 1 portfolio using vanilla JavaScript, HTML and
                    CSS. Here is the part where I'm just getting started in web
                    development. Never forget your first!
                  </p>
                  <a
                    href='https://github.com/IanAgtarap/portfolio-v1'
                    className='text-decoration-none text-info'
                    target='_blank'
                    rel='noreferrer'
                  >
                    View code
                  </a>
                  <hr />
                  <a
                    href='https://porfolio-v1-five.vercel.app/'
                    className='fs-4 text-decoration-none text-info'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Compare me!
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* PROJECTIC */}
          <div className='card bg-dark project-border'>
            <div className='row g-0 d-lg-flex flex-lg-row-reverse'>
              <div className='col-md-6 d-flex align-items-center p-3'>
                {' '}
                <img src={projectic} className='w-100' alt='' />
              </div>
              <div className='col-md-6'>
                <div className='card-body'>
                  <h5 className='card-title'>Projectic</h5>
                  <div className='mb-2'>
                    <span className='badge bg-info text-dark'>ReactJS</span>
                    <span className='badge bg-info text-dark'>Bootstrap</span>
                    <span className='badge bg-info text-dark'>NodeJS</span>
                    <span className='badge bg-info text-dark'>Express</span>
                    <span className='badge bg-info text-dark'>MongoDB</span>
                  </div>
                  <p>
                    This project is was my first time experiencing git flow, and
                    using git flow means this was a collaboration project and
                    being the team lead made my job was to answer the merge
                    requests made by my team such as fixing conflicts.
                  </p>
                  <a
                    href='https://github.com/IanAgtarap/projectic'
                    className='text-decoration-none text-info'
                    target='_blank'
                    rel='noreferrer'
                  >
                    View code
                  </a>
                  <hr />
                  <a
                    href='https://projectic.vercel.app/'
                    className='fs-4 text-decoration-none text-info'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Check the app here!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
/* 
TODO deploy listed projects then link it
*/
