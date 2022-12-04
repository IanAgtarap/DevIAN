import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiFillFacebook,
} from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();
  const [alert, setAlert] = useState('invisible');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_leh7dgq',
        'template_hx7u422',
        form.current,
        'Q1I1Kx8TMFfFIRP3z'
      )
      .then(
        (result) => {
          setAlert('alert alert-info mt-3');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className='vh-100 py-5' id='contact'>
      <div className='container'>
        <h2 className='mb-4 pt-5 border-bottom border-info'>Connect with me</h2>
        <div className='d-flex flex-wrap justify-content-center align-items-center gap-3 p-5'>
          <div className='d-flex w-75 justify-content-around mb-5'>
            <a
              href='https://github.com/IanAgtarap'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillGithub size={35} className='text-info' />
            </a>
            <a
              href='https://www.linkedin.com/in/ianagtarap0/'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillLinkedin size={35} className='text-info' />
            </a>
            <a href='mailto:agtarapian0@gmail.com'>
              {' '}
              <AiOutlineMail size={35} className='text-info' />
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=100086954611525'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillFacebook size={35} className='text-info' />
            </a>
          </div>
          <div>
            <h2>Leave a message here:</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className='row mb-3'>
                <div className='col'>
                  <input
                    type='text'
                    name='firstname'
                    className='form-control'
                    placeholder='First name'
                    aria-label='First name'
                    required
                  />
                </div>
                <div className='col'>
                  <input
                    type='text'
                    name='lastname'
                    className='form-control'
                    placeholder='Last name'
                    aria-label='Last name'
                    required
                  />
                </div>
              </div>
              <div className='mb-3'>
                <input
                  type='email'
                  name='email'
                  className='form-control'
                  placeholder='Email'
                  aria-label='Email'
                  required
                />
              </div>
              <div className='mb-3'>
                <input
                  name='subject'
                  type='text'
                  className='form-control'
                  placeholder='Subject'
                  aria-label='Subject'
                  required
                />
              </div>
              <div className='mb-3'>
                <textarea
                  type='text'
                  id='message'
                  name='message'
                  rows='4'
                  className='form-control md-textarea contactUsTextArea'
                  placeholder='Message'
                  required
                ></textarea>
              </div>
              <div>
                <button className='btn btn-info w-100' type='submit'>
                  Send
                  <span>
                    <FiSend className='ms-2' />
                  </span>
                </button>
                <div className={alert} role='alert'>
                  Your message has been sent! Thank you for messaging
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
