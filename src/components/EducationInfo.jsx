import {Section} from "./Section.jsx"
import { Input } from "./Input.jsx"
import { useState } from "react";


export function EducationInfo(){
  const [isSubmit, setIsSubmit] = useState(false)
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const scoolFeildLable = "School Name";
  const titleFeildLable = "Title of Study"
  const dateFeildLable = "ate of study";

  return (
    !isSubmit?
    <Section title="Education Information" >
      <Input label={scoolFeildLable} type="text" 
      value={school}  onChange={(e) => setSchool(e.target.value)}/>

      <Input label={titleFeildLable} type="text" 
      value={title}  onChange={(e) => setTitle(e.target.value)}/>

      <Input label={dateFeildLable} type="date" 
      value={date}  onChange={(e) => setDate(e.target.value)}/>

      <button onClick={() => setIsSubmit(true)}>Submit</button>
    </Section>
    :
    <Section title="Education Information" >
      <h4>{scoolFeildLable}: {school}</h4>
      <h4>{titleFeildLable}: {title}</h4>
      <h4>{dateFeildLable}: {date}</h4>
      <button onClick={() => setIsSubmit(false)}>Edit</button>
    </Section>
  )
}