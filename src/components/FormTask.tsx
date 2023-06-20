import { CSSProperties, useState } from "react"
import { Input } from "./Input"
import { Button } from "./Button"

type FormTaskProps ={
  createNewTask:(newTaskValue:string)=>void,
  style?: CSSProperties
}

export const FormTask = ({ createNewTask, style}:FormTaskProps) => {
  const [newTaskValue, setNewTaskValue] = useState('')

  const onSubmit = (_event: { preventDefault: () => void }) => {
    _event.preventDefault()
    createNewTask(newTaskValue)
    window.localStorage.setItem('TasksList', newTaskValue)
    setNewTaskValue('')
  }

  return (
    <form 
      onSubmit={onSubmit} 
      style={{
        width:'100%', 
        display: 'flex',
        justifyContent:'space-around',
        gap:'20px',
        ...style
      }}
    >
      <Input 
        value={newTaskValue} 
        onChange={(event) => setNewTaskValue((event.target as HTMLInputElement).value)} 
        placeholder='write a new tag'
        style={{padding:'10px 20px', width:'80%'}}
      />
      <Button 
        style={{padding:'10px 20px', }}
      >
        Save Tag
      </Button>
    </form>
  )
}

