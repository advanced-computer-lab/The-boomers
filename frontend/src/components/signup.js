import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from 'axios';

function Signup(props) {

  const history = useHistory();

  const [conditionsMet, setConditionsMet] = useState([]);
  const [passowrdStrength, setPasswordStrength] = useState('Weak');

  const [errors, setErrors] = useState([]);

  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [homeAddressError, setHomeAddressError] = useState(false);
  const [passportNumberError, setPassportNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [color, setColor] = useState('red');

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        handle(event)
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handle]);
  

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function handle(event){
    event.preventDefault();
    setErrors([])
    setFirstNameError(false)
    setLastNameError(false)
    setHomeAddressError(false)
    setPassportNumberError(false)
    setEmailError(false)
    setUsernameError(false)
    setPasswordError(false)
    setConfirmPasswordError(false)
    const arr = [];
    setLoading(true)
    if(firstName.length === 0){
      arr.push('Please enter your first name')
      setFirstNameError(true)
    }  
    if(lastName.length === 0){
      arr.push('Please enter your last name')
      setLastNameError(true)
    }
    if(homeAddress.length === 0){
      arr.push('Please enter your home address')
      setHomeAddressError(true)
    }  
    if(passportNumber.length === 0){
      arr.push('Please enter your passport number')
      setPassportNumberError(true)
    }
    if(email.length === 0){
      arr.push('Please enter your email address')
      setEmailError(true)
    }

    if(username.length === 0){
      arr.push('Please enter a username')
      setUsernameError(true)
    }
    if(password.length === 0){
      arr.push('Please enter a password')
      setPasswordError(true)
    }
    else if(password !== confirmPassword){
      arr.push('Passwords do not match')
      setConfirmPasswordError(true)
    }
    console.log(arr)
    setErrors(arr)
    if(arr.length === 0){
      axios.post('http://localhost:8082/createuser', {
        First_Name: firstName,
        Last_Name: lastName,
        Email: email,
        Home_Address: homeAddress,
        Passport_Number: passportNumber,
        Password: password,
        Username: username,
        Type: 'Customer',
      })
      .then(res => {
        history.push({
          pathname: '/adminportal/login',
          register: true
        })
        setLoading(false)
      })
      .catch(err => {
        console.log(err);
      })
    }
    else{
      setLoading(false)
    }
  }


  const renderErrors = () => {
    let errorArr = [];
    for(let i = 0; i < errors.length; i++){
        errorArr.push(
            <label style={{fontFamily: 'Archivo', color: '#f00', marginTop: 10, marginBottom: 10}}>{errors[i]}</label>
        )
    }
    return errorArr;
}

  return (
    <Container>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{boxShadow: '0px 1px 5px  0.35px #000', width:  '80%', marginTop: 30, display: 'flex', flexDirection: 'row'}}>
          <div style={{display: 'flex', flexDirection: 'column', width: '60%', alignItems: 'center'}}>
            <div style={{width: '100%', flexDirection: 'row', display: 'flex', justifyContent: 'center', marginTop: 20}}>
              <input style={{height: 50, width: '40%', fontSize: 20, border: firstNameError ? '2px solid red' : null}} placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
              <input style={{height: 50, width: '40%', fontSize: 20, marginLeft: '4%', border: lastNameError ? '2px solid red' : null}} placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <label style={{fontFamily: 'Archivo', marginTop: 10}}>Your name must be entered in English as it appears on your passport.</label>
            <input style={{height: 50, width: '85%', fontSize: 20, marginTop: 20, border: homeAddressError ? '2px solid red' : null}} placeholder="Home Address" value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)}/>
            <input style={{height: 50, width: '85%', fontSize: 20, marginTop: 20, border: passportNumberError ? '2px solid red' : null}} placeholder="Passport Number" value={passportNumber} onChange={(e) => setPassportNumber(e.target.value)}/>
            <input style={{height: 50, width: '85%', fontSize: 20, marginTop: 20, border: emailError ? '2px solid red' : null}} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type={'email'}/>
            <input style={{height: 50, width: '85%', fontSize: 20, marginTop: 20, border: usernameError ? '2px solid red' : null}} placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <div style={{width: '100%', flexDirection: 'row', display: 'flex', justifyContent: 'center', marginTop: 20}}>
              <input style={{height: 50, width: '40%', fontSize: 20, border: passwordError ? '2px solid red' : null}} autoComplete="new-password" placeholder="Password" type={'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
              <input style={{height: 50, width: '40%', fontSize: 20, marginLeft: '4%', border: confirmPasswordError ? '2px solid red' : null}} placeholder="Confirm Password" type={'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
            {errors.length === 0 ? null : <div style={{width: '80%', backgroundColor: '#ffdbe0', border: '2px solid red', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              {renderErrors()}
            </div>}
            <button onClick={handle} style={{width: 250, height: 50, marginTop: 20}} />
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
`;

export default Signup;