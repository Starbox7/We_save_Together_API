/** import library */
import styled from 'styled-components';
import { useState } from 'react';
import { Link as OriginalLink } from 'react-router-dom';
import Loading from 'react-loading';
import ReCAPTCHA from 'react-google-recaptcha';
/** import component */
import Header from '../visit/Header';
/** import Color */
import { AdminColor, BorderColor, DetailBackgroundColor } from '../../asset/Colors';
/** import asset */
import TeamImage from '../visit/TeamImage';
/** */
import authStore from '../../store/authStore';
/** import Icon */
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

/** styled-component */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 90vh;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  padding: 30px;
  background-color: ${AdminColor.White};
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;
const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 200px;
`;
const ImageContainer = styled.div`
  margin-bottom: 35px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid ${BorderColor.bdcGreen1};
  border-radius: 35px;
  padding: 3px;
  margin: 7px;
  width: 430px;
  height: 50px;
`;
const Input = styled.input`
  display: flex;
  height: 50px;
  width: 290px;
  border: none;
  outline: 0px;
  padding-left: 10px;
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Button = styled.p`
  display: flex;
  justify-content: center;
  font-weight: bold;
  border-radius: 17px;
  border: 1px solid ${BorderColor.bdcGreen1};
  padding: 11px;
  background-color: ${DetailBackgroundColor.dbcGreen2};
  font-size: 15px;
  margin: 7px;
  width: 150px;
`;
const Text = styled.p`
  display: flex;
  padding-right: 15px;
  padding-left: 25px;
  padding-top: 2px;
  border-right: 1px solid ${BorderColor.bdcGreen1};
  justify-content: center;
  width: 50px;
`;
const Link = styled(OriginalLink)`
  text-decoration: none;
  color: ${AdminColor.Black};
`;
const IconContainer = styled.div`
  margin: 15px;
  margin-top: 15px;
`;

function SignUpForm() {
  const setSignData = authStore((state) => state.setSignData);
  const signUp = authStore((state) => state.signUp);
  const isLoading = authStore((state) => state.isLoading);
  const onChange = (e) => {
    setSignData(e.target.id, e.target.value);
  };

  const [eye, setEye] = useState(true);
  const [inputType, setInputType] = useState('password');
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const State = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
    setEye(eye === true ? false : true);
  };
  const onRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <Container>
      {isLoading ? (
        <Loading type="spin" color="#fff" height={20} width={20} />
      ) : (
        <>
          <Header />
          <SignInContainer>
            <ImageContainer>
              <TeamImage />
            </ImageContainer>
            <InputContainer>
              <Text>ID</Text>
              <Input id="id" placeholder="아이디를 입력하세요" onChange={(e) => onChange(e)} />
            </InputContainer>
            <InputContainer>
              <Text>PW</Text>
              <Input id="password" type={inputType} placeholder="비밀번호를 입력하세요" onChange={(e) => onChange(e)} />
              <IconContainer>{eye ? <AiFillEyeInvisible size={20} onClick={() => State()} /> : <AiFillEye size={20} onClick={() => State()} />}</IconContainer>
            </InputContainer>
            <InputContainer>
              <Text>Confirm</Text>
              <Input id="confirm" type={inputType} placeholder="비밀번호 재확인" onChange={(e) => onChange(e)} />
              <IconContainer>{eye ? <AiFillEyeInvisible size={20} onClick={() => State()} /> : <AiFillEye size={20} onClick={() => State()} />}</IconContainer>
            </InputContainer>
            <ButtonContainer>
              <Link to="/info">
                <Button>Prev</Button>
              </Link>
              <Button
                style={{ cursor: 'pointer' }}
                onClick={async () => {
                  await signUp();
                }}
              >
                Sign Up
              </Button>
            </ButtonContainer>
            <ReCAPTCHA style={{ marginTop: '10px' }} sitekey="Merong-kk" onChange={onRecaptchaChange} />
          </SignInContainer>
        </>
      )}
    </Container>
  );
}

export default SignUpForm;
//              /** Test!!! */ console.log(`${}`);
