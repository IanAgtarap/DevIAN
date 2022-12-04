import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaBootstrap,
  FaDatabase,
} from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { SiDjango } from 'react-icons/si';

function Skills() {
  return (
    <div className='py-5' id='skills'>
      <div className='container'>
        <h2 className='mb-4 pt-5 text-center'>My Skills</h2>
        <div className='d-flex flex-wrap justify-content-center align-items-center gap-5 p-5 h-100'>
          {/* REACT JS*/}
          <div
            className='card card-skill p-3'
            data-bs-toggle='modal'
            data-bs-target='#reactjsModal'
          >
            <div className='d-flex align-items-center'>
              <FaReact size={50} className='me-3' />
              <h4 className='flex-grow-1'>ReactJS</h4>
              <AiOutlineArrowRight size={25} />
            </div>
          </div>
          {/* NODE JS */}
          <div
            className='card card-skill p-3'
            data-bs-toggle='modal'
            data-bs-target='#nodejsModal'
          >
            <div className='d-flex align-items-center'>
              <FaNodeJs size={50} className='me-3' />
              <h4 className='flex-grow-1'>NodeJS</h4>
              <AiOutlineArrowRight size={25} />
            </div>
          </div>
          {/* DJANGO */}
          <div
            className='card card-skill p-3'
            data-bs-toggle='modal'
            data-bs-target='#djangoModal'
          >
            <div className='d-flex align-items-center'>
              <SiDjango size={50} className='me-3' />
              <h4 className='flex-grow-1'>Django</h4>
              <AiOutlineArrowRight size={25} />
            </div>
          </div>
          {/* WORDPRESS */}
          <div
            className='card card-skill p-3'
            data-bs-toggle='modal'
            data-bs-target='#wordpressModal'
          >
            <div className='d-flex align-items-center'>
              <FaWordpress size={50} className='me-3' />
              <h4 className='flex-grow-1'>WordPress</h4>
              <AiOutlineArrowRight size={25} />
            </div>
          </div>
          {/* BOOTSTRAP */}
          <div
            className='card card-skill p-3'
            data-bs-toggle='modal'
            data-bs-target='#bootstrapModal'
          >
            <div className='d-flex align-items-center'>
              <FaBootstrap size={50} className='me-3' />
              <h4 className='flex-grow-1'>Bootstrap</h4>
              <AiOutlineArrowRight size={25} />
            </div>
          </div>
          {/* DATABASE */}
          <div
            className='card card-skill p-3'
            data-bs-toggle='modal'
            data-bs-target='#databaseModal'
          >
            <div className='d-flex align-items-center'>
              <FaDatabase size={50} className='me-3' />
              <h4 className='flex-grow-1'>Database Management</h4>
              <AiOutlineArrowRight size={25} />
            </div>
          </div>
        </div>
        {/* ReactJS MODAL */}
        <div
          className='modal fade'
          id='reactjsModal'
          tabIndex='-1'
          aria-labelledby='reactjsModal'
          aria-hidden='true'
        >
          <div className='modal-dialog  modal-dialog-centered'>
            <div className='modal-content bg-dark'>
              <div className='modal-header border-info'>
                <h5 className='modal-title' id='reactjsModal'>
                  <FaReact size={30} className='me-3' />
                  ReactJS
                </h5>
              </div>
              <div className='modal-body '>
                ReactJS is what I used in developing this page and to be honest
                I have a lot to learn since I'am just getting started. So far my
                knowledge about react is enough to create apps. Kindly check my
                projects where I used ReactJS.
              </div>
              <div className='modal-footer border-info'>
                <button
                  type='button'
                  className='modal-close btn btn-outline-light '
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* NodeJs MODAL */}
        <div
          className='modal fade'
          id='nodejsModal'
          tabIndex='-1'
          aria-labelledby='nodejsModal'
          aria-hidden='true'
        >
          <div className='modal-dialog  modal-dialog-centered'>
            <div className='modal-content bg-dark'>
              <div className='modal-header border-info'>
                <h5 className='modal-title' id='nodejsModal'>
                  <FaNodeJs size={30} className='me-3' />
                  NodeJS
                </h5>
              </div>
              <div className='modal-body '>
                I've used nodeJS during my training at Uplift where I learn how
                to create basic REST API's. Along with ExpressJS which is used
                in MERN stack as backend.
              </div>
              <div className='modal-footer border-info'>
                <button
                  type='button'
                  className='modal-close btn btn-outline-light'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Django MODAL */}
        <div
          className='modal fade'
          id='djangoModal'
          tabIndex='-1'
          aria-labelledby='djangoModal'
          aria-hidden='true'
        >
          <div className='modal-dialog  modal-dialog-centered'>
            <div className='modal-content bg-dark'>
              <div className='modal-header border-info'>
                <h5 className='modal-title' id='djangoModal'>
                  <SiDjango size={30} className='me-3' />
                  Django
                </h5>
              </div>
              <div className='modal-body '>
                The capstone project is one of my primary requirements. Because
                I was already familiar with Python programming, I used Django, a
                Python framework for creating dynamic websites. I also got to
                know its MVT architecture.
              </div>
              <div className='modal-footer border-info'>
                <button
                  type='button'
                  className='modal-close btn btn-outline-light'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* WordPress MODAL */}
        <div
          className='modal fade'
          id='wordpressModal'
          tabIndex='-1'
          aria-labelledby='wordpressModal'
          aria-hidden='true'
        >
          <div className='modal-dialog  modal-dialog-centered'>
            <div className='modal-content bg-dark'>
              <div className='modal-header border-info'>
                <h5 className='modal-title' id='wordpressModal'>
                  <FaWordpress size={30} className='me-3' />
                  WordPress
                </h5>
              </div>
              <div className='modal-body '>
                I became familiar with Wordpress during my internship; it makes
                web creation quick and simple. Plugins that are used to create
                and design websites, such as Elementor, SMTP, and others, are
                also tools that I am familiar with.
              </div>
              <div className='modal-footer border-info'>
                <button
                  type='button'
                  className='modal-close btn btn-outline-light'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Bootstrap MODAL */}
        <div
          className='modal fade'
          id='bootstrapModal'
          tabIndex='-1'
          aria-labelledby='bootstrapModal'
          aria-hidden='true'
        >
          <div className='modal-dialog  modal-dialog-centered'>
            <div className='modal-content bg-dark'>
              <div className='modal-header border-info'>
                <h5 className='modal-title' id='bootstrapModal'>
                  <FaBootstrap size={30} className='me-3' />
                  Bootstrap
                </h5>
              </div>
              <div className='modal-body '>
                Bootstrap is one of the popular CSS frameworks I use to develop
                web pages as it makes the code clean and short. It is also
                perfect for prototyping projects as it makes the development
                quick.
              </div>
              <div className='modal-footer border-info'>
                <button
                  type='button'
                  className='modal-close btn btn-outline-light'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Database MODAL */}
        <div
          className='modal fade'
          id='databaseModal'
          tabIndex='-1'
          aria-labelledby='databaseModal'
          aria-hidden='true'
        >
          <div className='modal-dialog  modal-dialog-centered'>
            <div className='modal-content bg-dark'>
              <div className='modal-header border-info'>
                <h5 className='modal-title' id='databaseModal'>
                  <FaDatabase size={30} className='me-3' />
                  Database Management
                </h5>
              </div>
              <div className='modal-body '>
                A database is one of the most crucial parts of a program or
                backend. This is where all the data is saved and managed. With
                MySql and NoSql, I acquired the skills to manage data and
                establish relationships between entities.
              </div>
              <div className='modal-footer border-info'>
                <button
                  type='button'
                  className='modal-close btn btn-outline-light'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
// TODO
/* 
Add modal per skills with contents
*/
