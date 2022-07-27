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
            {/* <input type="text" placeholder='Subject' required /> */}
            <select name="" id="">
                <option value="Employer-me">Employ Me</option>
                <option value="Fun">Feed Back</option>
                 <option value="Collabo-req">Collaboration Request</option>
            </select>
            <textarea id="Mailcontent" placeholder='Type message here..' name="content" rows="4" cols="10"></textarea>
            <button className='btnSubmit' type="submit">send</button>

        </form>
      
    </div>
  )
}

export default ContactForm
