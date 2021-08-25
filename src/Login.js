import React from 'react'
import {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import './Login.css'

const Login = () => {

    //For Name

    //make reset button
    //success show

   //  const [user, setUser] = useState('');

    const [userErr, setUserErr] = useState(false)

    function userHandler(e){

        let item = e.target.value;
        if(item.length<3){
        //    console.log('invalid');
         setUserErr(true)
        }
       else{
            setUserErr(false)
       }
    }
 
      
    //For Email

      const [isValid, setIsValid] = useState(false);
     const [message, setMessage] = useState('');

 
 
  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('Your email looks good!');
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email!');
    }
  };


    //For mobile
     
      //  const [mobile, setmobile] = useState('')

       const [mobileErr, setMobileErr] = useState(false)

    
    function userHandlerMobile(e){

        let item = e.target.value;
        if(item.length<9){
        //    console.log('invalid');
         setMobileErr(true)
        }
       else{
            setMobileErr(false)
       }
    }

   //For Age

      // const [age, setage] = useState('')

       const [ageErr, setAgeErr] = useState(false)

    
    function userHandlerAge(e){

        let item = e.target.value;
        if(item.length<1 ){
         setAgeErr(true)
        }
       else{
            setAgeErr(false)
       }
    }
    
    //form
   
         const [success, setSuccess] = useState(false)
         const [error, setError] = useState(false)

    const loginHandle =(e)=>{
         e.preventDefault();
        setSuccess(true)
        setError(false)


 }
        
         

         const successMessage =()=>{

            if(success){
               return (
                  <h2>SUCCESS!</h2>
                  
               )
            }

         }

          const errorMessage =()=>{
            if(error){
            return (
          <h2>ERROR!</h2>
       )
            }
    };
    //button

//      function fun(){  
//    document.getElementById("myForm").reset();  
//  }   
   

    return (
        <div>
     <Grid  container style={{ justifyContent: 'center'}}>
    
          <Card style={{backgroundColor: '#F0F6F7FF',paddingTop:'50px',marginTop:'100px',padding:'30px'}}>

         <form onSubmit={loginHandle} >
        
             Name:<input type='text' placeholder='Enter name' maxLength="100" onChange={userHandler} required/>
             <br/>
             {userErr?<span style={{color: 'red'}}>Enter full name</span>:''}

         <br />
         <br />


         Email:<input type='email' placeholder='Enter name'  maxLength="100" onChange={validateEmail} required/>
         <br/>
           

        <span className={`message ${isValid ? 'success' : 'error'}`}>
        {message} </span>
     

            <br />
            <br />


         Mobile:<input type='number' placeholder='Enter name' maxLength="10" onChange={userHandlerMobile} required />
            <br/>
             {mobileErr?<span style={{color: 'red'}}>Enter Valid Phone number</span>:''}

            <br />
            <br />


         Age:<input type='number' placeholder='Enter name'  maxLength="100" onChange={userHandlerAge} required/>
            <br/>
             {ageErr?<span style={{color: 'red'}}>Enter Age</span>:''}
            <br />
            <br />

         Address: <br /><textarea placeholder='address'  maxLength="200" required rows='5' cols='30'></textarea>
            <br />
            <br />

            <button type='submit' onSubmit={loginHandle} style={{color: 'white', backgroundColor: 'black', marginLeft:'80px',marginBottom:'10px',padding:'5px'}}>Login</button>
         </form>
         {errorMessage()}{successMessage()}

         {/* <input type = "button" value = "Reset data" onClick = "fun()"/>  */}
         </Card>
    

     </Grid>
            
        </div>
    )
}

export default Login
