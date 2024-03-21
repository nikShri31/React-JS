import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { mobile } from "../responsive";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  height:60%;
  ${mobile({ height: "50px" })}

`;
const Wrapper = styled.div`
  padding : 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size:14px;
cursor: pointer;
${mobile({ display: "none" })}
`;
const SearchBox = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  cursor: pointer;
`;
const Input = styled.input`
border: none;
${mobile({ width: "50px" })}
`;
const Center = styled.div`
flex:1;
text-align:center;
`;
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`;
const Logo = styled.h1`
font-weight:bold;
${mobile({ fontSize: "24px" })}
`;
const MenuItem = styled.div`
font-size:14px
cursor:pointer;
margin-left:25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        En
                    </Language>
                    <SearchBox>
                        <Input placeholder='search here' />
                        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </SearchBox>
                </Left>
                <Center><Logo>Logo </Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar