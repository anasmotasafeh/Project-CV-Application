import {Section} from "./Section.jsx"
import { useState } from "react"
import { Input } from "./Input.jsx"

export function Experience(){
  const [isSubmit, setIsSubmit] = useState(false)
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [mainResp, setMainResp] = useState("");
  const [fromDate, setFromDate] = useState(new Date().toISOString().split("T")[0]);
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);


  const companyFeildLable = "Company Name";
  const positionFeildLable = "Position Title"
  const mainRespFeildLable = "Main Responsibilities";
  const fromFeildLable = "From"
  const toFeildLable = "To"

  return (
    !isSubmit?
    <Section title="Practical Experience" >
      <Input label={companyFeildLable} type="text" 
      value={company}  onChange={(e) => setCompany(e.target.value)}/>

      <Input label={positionFeildLable} type="text" 
      value={position}  onChange={(e) => setPosition(e.target.value)}/>

      <Input label={mainRespFeildLable} type="text" 
      value={mainResp}  onChange={(e) => setMainResp(e.target.value)}/>

      <Input label={fromFeildLable} type="date" 
      value={fromDate}  onChange={(e) => setFromDate(e.target.value)}/>

      <Input label={toFeildLable} type="date" 
      value={toDate}  onChange={(e) => setToDate(e.target.value)}/>

      <button onClick={() => setIsSubmit(true)}>Submit</button>
    </Section>
    :
    <Section title="Practical Experience" >
      <h4>{companyFeildLable}: {company}</h4>
      <h4>{positionFeildLable}: {position}</h4>
      <h4>{mainRespFeildLable}: {mainResp}</h4>
      <h4>{fromFeildLable}: {fromDate}</h4>
      <h4>{toFeildLable}: {toDate}</h4>
      <button onClick={() => setIsSubmit(false)}>Edit</button>
    </Section>
  )
}