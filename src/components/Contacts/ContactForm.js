import React from 'react'

function ContactForm() {
  return (
    <div className="contact-form">
        <form>
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email Address' required />
            <select name="" id="">
                <option value="Employer">Employer</option>
                <option value="Fun">Fun</option>
                 <option value="Collaborator">Collaborator</option>
            </select>
            <input type="text" placeholder='Subject' required />
        </form>
      
    </div>
  )
}

export default ContactForm
