import React, {useState} from 'react'
import "./style.css"
import IconPerson from '../IconPerson'


const Registration = () => {

  const [user, setUser] = useState({email: "",userName: "", password: "", passwordConfirm: "" })
  const [allUsers, setAllUsers] = useState([])
  const [controlPassword, setControlPassword] = useState(true)

  const formChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setUser({...user, [name]: value})
  }

const formSubmit = (e) => {
  e.preventDefault()

  if ( user.email && user.userName && user.password && user.passwordConfirm){
    const oneUser = {userName: user.userName, email:user.email,password:user.password, passwordConfirm:user.passwordConfirm}
    setAllUsers((allUsers) => {
      return[...allUsers, oneUser]      
    })
    setUser({email: "",userName: "", password: "", passwordConfirm: ""})
  } else {
    return(
      <p>Některé políčko bylo šap</p>
    )
    console.log("Něco nebylo vyplněno!");
  }

// ****************************stejné heslo
  if (user.password !== user.passwordConfirm || (user.password === "" || user.passwordConfirm === "" )){
    setControlPassword(false)
    } else {
    setControlPassword(true) 
  }
  console.log(...allUsers);  
}

 //****************************automatické vyplnění userName podle jména před "@"*/

 const completeName = () => {
  
  let FillInName=""

  if(user.email.includes("@") && user.userName === ""){
    FillInName = user.email.slice(0, user.email.indexOf("@"))
    setUser({...user, userName:FillInName})
  }   
 }

 return (
    <section>
      <h2>Registration</h2>   
      {/* <IconPerson/> */}
      <form> 
      <IconPerson/> 
        <input 
          className='userInfo' 
          type="email" 
          placeholder="Email Address" 
          value={user.email}
          onChange={formChange}
          name='email'
          onBlur={completeName}
        /> 
        <input 
          className="userInfo"
          type='text' 
          placeholder='User Name'
          value={user.userName}
          onChange={formChange}
          name='userName'
        />
        <input 
          className={!controlPassword ? "userInfoError" : "userInfo"} 
          type='password' 
          placeholder='Password'
          value={user.password}
          onChange={formChange}
          name='password'
        />
        <input 
          className={!controlPassword ? "userInfoError" : "userInfo"} 
          type='password' 
          placeholder='Confirm Password'
          value={user.passwordConfirm}
          onChange={formChange}
          name='passwordConfirm'
        />
        <input 
          type='submit' 
          onClick={formSubmit}
          value="register"
        />
      </form> 
    </section>    
 
  )
}

export default Registration
