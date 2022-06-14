import { Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Stack p="30px" bg="#FFAF0F">
        <Stack p="30px">
            <Image mb="100px" width="200px" src="https://axionlift.com/wp-content/uploads/2022/04/axionlift-Nuevo-LOGO-WEB-20220422_encabezado.svg"/>
            <Text fontSize="35px" fontWeight="700" color="black">Call us at</Text>
            <Text mb="150px" color="black" fontWeight="700" fontSize="55px">0800 555 0202</Text>

            <Text fontSize="25px" fontWeight="700" color="black">Follow as on our networks</Text>
            <Stack direction="row" align="center">
                <Text fontWeight="700" color="black">Linkedin</Text>
                <Text fontWeight="700" color="black">Instagram</Text>
                <Text fontWeight="700" color="black">Facebook</Text>
                <Text fontWeight="700" color="black">Youtube</Text>
            </Stack>
        </Stack>

        <Stack>

        </Stack>
    </Stack>
  )
}

export default Footer

