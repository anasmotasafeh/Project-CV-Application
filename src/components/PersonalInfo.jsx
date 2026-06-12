import { Section } from "./Section.jsx"
import { useState } from "react"
import { Input } from "./Input.jsx"

export function PersonalInfo(){
  const [isSubmit, setIsSubmit] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    !isSubmit?
    <Section title="Personal Information" >
      <Input label="Name" type="text" 
      value={name}  onChange={(e) => setName(e.target.value)}/>

      <Input label="Email" type="email" 
      value={email}  onChange={(e) => setEmail(e.target.value)}/>

      <Input label="Phone Number" type="tel" 
      value={phone}  onChange={(e) => setPhone(e.target.value)}/>

      <button onClick={() => setIsSubmit(true)}>Submit</button>
    </Section>
    :
    <Section title="Personal Information" >
      <h4>Name: {name}</h4>
      <h4>Email: {email}</h4>
      <h4>Phone Number: {phone}</h4>
      <button onClick={() => setIsSubmit(false)}>Edit</button>
    </Section>
  )
}