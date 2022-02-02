import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import image from '../assets/contact-image.jpg';
import { useState } from 'react';
import './Contact.css';

function Contact(props) {
	const [message, setMessage] = useState('');
	  const form = useRef(); 
	  init('user_VYIsbxWvtTSOtRNEBLSol');

		const sendEmail = (e) => {
			e.preventDefault();

			emailjs
				.sendForm(
					'service_21en2lr',
					'template_zwy52a7',
					form.current,
					'user_VYIsbxWvtTSOtRNEBLSol'
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
				setMessage('Thank you for contacting me, I cannot wait to get connected!')
				e.target.reset();
		};

		return (
			<div className='form-wrapper'>
				<img className='contact-image' src={image} alt='contact'/>
			<form ref={form} onSubmit={sendEmail}> 
			<div className='main-form'>
				<h2 className='form-title'>Contact</h2>
				<label>Name</label>
				<input type='text' name='user_name' className='form-name'/>
				<label>Email</label>
				<input type='email' name='user_email' className='form-email' />
				<label>Message</label>
				<textarea name='message' className='message-box'/>
				<input type='submit' value='Send' className='submit-btn' />
				{message}
			</div>
			</form>
			</div>
		);
}

export default Contact;
