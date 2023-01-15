import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { BsList } from 'react-icons/bs'

const Contact = (props) => {
	const [formData, setFormData] = useState({
		name: '',
		message: '',
		email: '',
		isAllowed: false
	})

	const [hasSubmitted, setHasSubmitted] = useState(false)

	useEffect(() => {
		const { email, message, name } = formData

		if(email.includes('@') && email.length > 3 && message.length > 10 && name.length > 3){
			setFormData(prevData => ({ ...prevData, isAllowed: true }))
		}
		else {
			setFormData(prevData => ({ ...prevData, isAllowed: false }))
		}
	}, [formData.email, formData.message, formData.name])

	const handleChange = (ev) => {
		setFormData(prevData => (
			{ ...prevData, [ev.target.name]: ev.target.value }
		))
	}

	const handleSubmit = async (ev) => {
		ev.preventDefault()

        emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formData, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
            .then(res => {
                setFormData({ name: '', email: '', message: '' })
                setHasSubmitted(true)
        
                setTimeout(() => setHasSubmitted(false), 2500)
            })
            .catch(err => {
                alert("Unable to send email. Try again later.")
            })
	}

	const submitNotif = (
		<motion.div
			animate={{ x: 0 }}
			initial={{ x: 100 }}
			exit={{x: 250}} 
			className="notif"
		>
			Message sent!
		</motion.div>
	)

	return (
		<div id="contactMe"
			onClick={() => { props.isNavbar && props.toggleNavbar() }}
		>
			<div className="banner">
				<button className="menuToggle" aria-label='Show Navbar' onClick={props.toggleNavbar}>
					<BsList />
				</button>
				<h1># Contact Me</h1>
				<motion.div
					initial={{ x: 30, opacity: 0.25 }}
					animate={{ x: 0, opacity: 1 }}				
				>
					<div>
						<form className="contact-form" onSubmit={handleSubmit}>
							<label className="contact-form-label">
								<div>Your Name:</div>
								<input 
									type="text"
									onChange={handleChange}
									value={formData.name}
									name="name"
									placeholder='John Doe' 
								/>
							</label>
							<label className="contact-form-label">
								<div>Your Email:</div>
								<input 
									type="email"
									onChange={handleChange}
									value={formData.email}
									name="email"
									placeholder='johndoe1984@gmail.com' 
								/>
							</label>
							<label className="contact-form-label">
								<div>Your Message:</div>
								<textarea
									onChange={handleChange}
									name='message'
									value={formData.message}
									placeholder='I would love to discuss some projects with you!' 
									/>
							</label>
							<button disabled={!formData.isAllowed}>Submit</button>
						</form>
					</div>
				</motion.div>
			</div>
			{ hasSubmitted && submitNotif }
		</div>
	);
}

export default Contact;