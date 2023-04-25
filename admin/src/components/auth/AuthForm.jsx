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

import { useNavigate } from 'react-router-dom';

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
  width: 240px;
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
const IconContainer = styled.p`
  color: red;
  margin: 15px;
  margin-top: 15px;
`;

function AuthForm() {
  const setSignData = authStore((state) => state.setSignData);
  const signUp = authStore((state) => state.signUp);
  const isLoading = authStore((state) => state.isLoading);
  const authRequest = authStore((state) => state.authRequest);
  const authConfirm = authStore((state) => state.authConfirm);

  const [eye, setEye] = useState(true);
  const [inputType, setInputType] = useState('password');
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const onChange = (e) => {
    setSignData(e.target.id, e.target.value);
  };
  const State = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
    setEye(eye === true ? false : true);
  };
  const onRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const navigate = useNavigate();
  const navigateToSignIn = () => {
    navigate('/in');
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
              <Text>Phone</Text>
              <Input id="phone" placeholder="휴대폰 번호를 입력하세요" onChange={(e) => onChange(e)} />
            </InputContainer>
            <InputContainer>
              <Text>Number</Text>
              <Input id="authNum" type={inputType} placeholder="인증번호를 입력하세요" onChange={(e) => onChange(e)} />
              <IconContainer>03 : 00</IconContainer>
            </InputContainer>
            <ButtonContainer>
              <Button
                style={{ cursor: 'pointer' }}
                onClick={async () => {
                  await authRequest();
                }}
              >
                인증번호 발송
              </Button>
              <Button
                style={{ cursor: 'pointer' }}
                onClick={async () => {
                  await authConfirm(navigateToSignIn);
                }}
              >
                인증번호 확인
              </Button>
            </ButtonContainer>
            <ReCAPTCHA style={{ marginTop: '10px' }} sitekey="Merong-kk" onChange={onRecaptchaChange} />
          </SignInContainer>
        </>
      )}
    </Container>
  );
}

export default AuthForm;
//              /** Test!!! */ console.log(`${}`);
