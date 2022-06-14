import { Box, Button, Image, Stack } from "@chakra-ui/react";

import {FaFacebookF}from "react-icons/fa"
import {AiFillYoutube,AiFillInstagram,AiFillPhone} from "react-icons/ai"
import {GrLinkedinOption} from "react-icons/gr"
import {BsFillBagFill} from "react-icons/bs"
const Nav = () => {
  return (
    <Stack align="center" justify="space-between" direction="row" p="50px">
      <Image
        width="170px"
        src="https://axionlift.com/wp-content/uploads/2022/04/axionlift-Nuevo-LOGO-WEB-20220422_encabezado.svg"
      />

      <Stack direction="row" align="center" justify="center">
        <Button _hover={{
                        textDecoration: 'underline',
                        textDecorationColor:'#FFAF0F'
                    }}variant="nd">HOME</Button>
        <Button _hover={{
                        textDecoration: 'underline',
                        textDecorationColor:'#FFAF0F'
                    }}variant="nd">ABOUT AXION</Button>
        <Button _hover={{
                        textDecoration: 'underline',
                        textDecorationColor:'#FFAF0F'
                    }}variant="nd">PRODUCTS</Button>
        <Button _hover={{
                        textDecoration: 'underline',
                        textDecorationColor:'#FFAF0F'
                    }}variant="nd">SERVICES</Button>
        <Button _hover={{
                        textDecoration: 'underline',
                        textDecorationColor:'#FFAF0F'
                    }}variant="nd">NEWS</Button>
        <Button _hover={{
                        textDecoration: 'underline',
                        textDecorationColor:'#FFAF0F'
                    }}variant="nd">RR.HH.</Button>
        <Button _hover={{
                        textDecoration: 'underline',
                        textDecorationColor:'#FFAF0F'
                    }}variant="nd">CONTACT US</Button>
      </Stack>
      <Stack direction="row" spacing="5" align="center">
          <FaFacebookF/>
          <GrLinkedinOption/>
          <AiFillYoutube/>
          <AiFillInstagram/>
          <AiFillPhone/>
       
      </Stack>
      <BsFillBagFill/>
    </Stack>
  );
};

export default Nav;
