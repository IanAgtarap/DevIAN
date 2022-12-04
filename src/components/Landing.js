import profile from '../assets/me.jpg';
import resume from '../assets/Ian_Agtarap.pdf';

function Landing() {
  return (
    <div
      className='d-flex flex-column align-items-center justify-content-center'
      id='home'
    >
      <div className=''>
        <img
          alt=''
          src={profile}
          width='200'
          height='200'
          className='rounded-circle border border-5 animate__animated animate__bounceInDown mb-3'
        />
      </div>
      <div className='d-flex flex-column align-items-center'>
        <h1 className='animate__animated animate__bounceInLeft mb-3'>
          Hi I'm IAN!
        </h1>
        <p className='desc lead text-center mb-3 animate__animated animate__bounceInRight'>
          My fullname is Ian Krezelvent Agtarap. I study at Baguio College of
          Technology and finished training at Uplift Code Camp. I'm a junior
          Fullstack MERN developer and looking forward to collaborate with you.
        </p>
        <a
          className='btn btn-info animate__animated animate__bounceInUp text-white'
          href={resume}
          download
          rel='noopener noreferrer'
          target='_blank'
        >
          Here is my resume
        </a>
      </div>
    </div>
  );
}

export default Landing;
