import React,{useState} from 'react'

function ContactForm() {
  const [formData,setFormData]=useState({
    name: "",
    email: "",
    WHO: "Employer",
    WHY: "Employ me",
    message: ""
  })


  function handleChange(event){
    const name=event.target.name;
    const value=event.target.value;
    console.log(value);
    setFormData({
      ...formData,[name]:value,
    })
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    fetch('https://jobsidney.github.io/jsonServer/message.json',{
      method: "POST",
      headers:{"content-type": "application/json",},
      body:JSON.stringify(formData)
    })
  }




  

  

  return (
    <div className="contact-form">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Your Name' name='name' onChange={handleChange} value={formData.name} />
            <input type="email" placeholder='Email Address' name='email' onChange={handleChange} value={formData.email} required />
            <select  id="" name='WHO' onChange={handleChange} value={formData.WHO} required>
                <option value="Employer">Employer</option>
                <option value="Fun">Fun</option>
                 <option value="Collaborator">Collaborator</option>
            </select>
            {/* <input type="text" placeholder='Subject' required /> */}
            <select name="WHY" id="" onChange={handleChange}  value={formData.WHY}>
                <option value="Employer-me">Employ Me</option>
                <option value="Feed-Back">Feed Back</option>
                 <option value="Collabo-req">Collaboration Request</option>
            </select>
            <textarea id="Mailcontent" placeholder='Type message here..' name="message" rows="4" cols="10" onChange={handleChange} value={formData.message}></textarea>
            <button className='btnSubmit' type="submit">send</button>

        </form>
      
    </div>
  )
}

export default ContactForm
