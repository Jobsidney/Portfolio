import React,{useState} from 'react'

function ContactForm() {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    WHO:'',
    WHY:'',
    message:''
  })
  function handleChange(event){
    const name=event.target.name;
    const value=event.target.value;

    setFormData({
      ...setFormData,
      [name]:value,
    })
  }
  const handleSubmit=()=>{
    fetch('')
  }

  return (
    <div className="contact-form">
        <form>
            <input type="text" placeholder='Your Name' name='name' />
            <input type="email" placeholder='Email Address' name='email' required />
            <select  id="" name='WHO'>
                <option value="Employer">Employer</option>
                <option value="Fun">Fun</option>
                 <option value="Collaborator">Collaborator</option>
            </select>
            {/* <input type="text" placeholder='Subject' required /> */}
            <select name="WHY" id="">
                <option value="Employer-me">Employ Me</option>
                <option value="Fun">Feed Back</option>
                 <option value="Collabo-req">Collaboration Request</option>
            </select>
            <textarea id="Mailcontent" placeholder='Type message here..' name="message" rows="4" cols="10"></textarea>
            <button className='btnSubmit' type="submit">send</button>

        </form>
      
    </div>
  )
}

export default ContactForm
