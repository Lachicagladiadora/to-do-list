import { Button } from "./Button"

export const VisibilityControl = ({setShowCompleted,cleanTasks,isChecked}:any) => {
  const closeShow = () => {
    // alert('clearing')
    if(window.confirm('Are you sure you want to delete it?')) cleanTasks()
  }

  return(
    <div
    style={{
      color:'#B31D65',
      textAlign:'center',
      fontWeight:'bold',
    }}
    >
      <label
      >
      <input 
        type="checkbox" 
        checked={isChecked}
        onChange={(_e) => setShowCompleted(_e.target.checked)} 
      />{ ' ' }Show Tasks Done{ ' ' }
      </label>
      <Button children='Clear' onClick={closeShow}/>
    </div >
  )
}