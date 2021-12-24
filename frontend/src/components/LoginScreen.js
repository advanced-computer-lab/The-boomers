import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from 'axios';

function LoginScreen(props) {

  const history = useHistory();

  const [hover1, setHover1] = useState('rgba(240,165,0,1)');
  const [hover2, setHover2] = useState('rgba(240,165,0,1)');

  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);

  const [register, setRegister] = useState(props.location.register);

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
  function handle(event){

    event.preventDefault();

    setLoading(true);
    setRegister(false);
    setError(false)
    
    axios.post('http://localhost:8082/login', {
        Password: password,
        Username: username,
      })
      .then(res => {
        if(res.data.message === 'Success'){
          localStorage.setItem('token', res.data.token)
          console.log(res.data.token)
          localStorage.setItem('firstName', res.data.First_Name)
          console.log(res.data.First_Name)
          localStorage.setItem('userID', res.data.id)
          console.log(res.data.id)
          if(res.data.Type === 'Customer'){
          history.push('/UserPortal')}
          else{ history.push('/AdminPortal')}
          setLoading(false)
        }
        else{
          setError(true)
          setLoading(false)
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <Container>
      <div style={{backgroundColor: '#f4f4f4', height: 800, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: -35}}>
       
        <div style={{minHeight: 480, width: '85%', backgroundColor: '#fff', marginTop: 60, boxShadow: '0px 1px 5px  0.35px #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{display: 'flex', flexDirection: 'column', width: '49%', height: '100%', justifyContent: 'center'}}>
            <label style={{fontFamily: 'Archivo', fontSize: 25, marginLeft: 40}}>Login</label>
            {register ? 
              <div style={{width: '70%', height: 50, backgroundColor: '#a8e4a0', marginLeft: 40, marginTop: 20, border: '2px solid green', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                <label style={{color: 'green', fontFamily: 'Archivo', fontSize: 17}}>Registration Successful!</label>
              </div>
            : null}
            {error ? <div style={{width: '70%', height: 50, backgroundColor: '#ffdbe0', border: '2px solid red', display: 'flex',  alignItems: 'center', justifyContent: 'center', marginLeft: 40, marginTop: 20}}>
              <label style={{color: 'red', fontFamily: 'Archivo', fontSize: 17}}>Invalid Username or Password</label>
            </div> : null}
            <input style={{height: 50, width: '70%', marginTop: 20, fontSize: 20, marginLeft: 40}} placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <label style={{fontFamily: 'Archivo', fontSize: 18, color: hover1, cursor: 'pointer', marginTop: 10, textDecorationLine: 'underline', marginLeft: 40}} onMouseEnter={() => setHover1('rgba(207,117,0,1)')} onMouseLeave={() => setHover1('rgba(240,165,0,1)')}>Forgot your email?</label>
            <input style={{height: 50, width: '70%', marginTop: 20, fontSize: 20, marginLeft: 40}} placeholder="Password" type={'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <label style={{fontFamily: 'Archivo', fontSize: 18, color: hover2, cursor: 'pointer', marginTop: 10, textDecorationLine: 'underline', marginLeft: 40}} onMouseEnter={() => setHover2('rgba(207,117,0,1)')} onMouseLeave={() => setHover2('rgba(240,165,0,1)')}>Forgot your password?</label>
            <button loading={loading} style={{height: 50, width: '70%', marginTop: 20, marginLeft: 40}} title={'Log in'} onClick={handle}/>
          </div>
          <div style={{width: 3, height: '85%', backgroundColor: '#696969'}}/>
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

export default LoginScreen;