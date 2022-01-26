import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact(props) {
	  const form = useRef();

		const sendEmail = (e) => {
			e.preventDefault();

			emailjs
				.sendForm(
					'YOUR_SERVICE_ID',
					'YOUR_TEMPLATE_ID',
					form.current,
					'YOUR_USER_ID'
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
		};

		return (
			<div>
				<h2 className='form-title'>Contact</h2>
			<form ref={form} onSubmit={sendEmail}> 
			<div className='main-form'>
				<label>Name</label>
				<input type='text' name='user_name' />
				<label>Email</label>
				<input type='email' name='user_email' />
				<label>Message</label>
				<textarea name='message' />
				<input type='submit' value='Send' />
				<span className='span-email'>You can also email me @ <a href="mailto:joesphschang@gmail.com" rel="noopener noreferrer" target="_blank" className='anchor-email'>joesphschang@gmail.com</a></span>
			</div>
			</form>
			</div>
		);
}

export default Contact;
