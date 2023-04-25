/** import library */
import styled from 'styled-components';
import { Link as OriginalLink } from 'react-router-dom';
import Loading from 'react-loading';
/** import component */
import Header from '../visit/Header';
/** import Color */
import { AdminColor, BorderColor, DetailBackgroundColor } from '../../asset/Colors';
/** import asset */
import TeamImage from '../visit/TeamImage';
/** */
import authStore from '../../store/authStore';
/** */
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

function SignInfoForm() {
  const navigate = useNavigate();
  const navigateToUp = () => {
    navigate('/up');
  };

  const setSignData = authStore((state) => state.setSignData);
  const verifySignData = authStore((state) => state.verifySignData);
  const isLoading = authStore((state) => state.isLoading);
  const onChange = (e) => {
    setSignData(e.target.id, e.target.value);
  };

  return (
    <Container>
      {
        isLoading ? (
          <Loading type="spin" color="#fff" height={20} width={20} />
        ) : (
          <>
            <Header />
            <SignInContainer>
              <ImageContainer>
                <TeamImage />
              </ImageContainer>
              <InputContainer>
                <Text>Name</Text>
                <Input id="name" placeholder="이름을 입력하세요" onChange={(e) => onChange(e)} />
              </InputContainer>
              <InputContainer>
                <Text>Hakbun</Text>
                <Input id="hakbun" placeholder="학번을 입력하세요" onChange={(e) => onChange(e)} />
              </InputContainer>
              <InputContainer>
                <Text>Email</Text>
                <Input id="email" placeholder="이메일을 입력하세요" onChange={(e) => onChange(e)} />
              </InputContainer>
              <ButtonContainer>
                <Link to="/in">
                  <Button>Sign In</Button>
                </Link>
                <Button
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    verifySignData(navigateToUp);
                  }}
                >
                  Next
                </Button>
              </ButtonContainer>
            </SignInContainer>
          </>
        )
      }
    </Container>
  );
}

export default SignInfoForm;
//              /** Test!!! */ console.log(`${}`);
