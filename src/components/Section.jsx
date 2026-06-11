
import { Input } from "./Input";

export function Section({labels}){

  return(
    <section>
      {labels.map(label => <Input label={label}/>)}
    </section>
  )
}