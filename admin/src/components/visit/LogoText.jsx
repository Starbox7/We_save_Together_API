/** import library */
import styled from 'styled-components';

/**  styled-component */
const Container = styled.div`
    margin-left: 10px;
`
const Logo = styled.h1`
    font-size: 40px;
`


function LogoText() {
    return (
        <Container>
            <Logo>Code for DCU</Logo>
        </Container>
    )
}

export default LogoText;