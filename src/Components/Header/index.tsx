
import { Flex, Image,Button } from "@chakra-ui/react";


 function Header(){
    return (

        <Flex>
            <Flex bg="brand" flex={1} justifyContent={"center"} align={"center"} p={0} gap={10}>
                <Image src="/public/images/logo.svg" alt="logo do site" boxSize={'auto'} height={'180px'}></Image>
                <Button  color="white" variant={'outline'} _hover={'black'}>Clique aqui</Button>
                <Button  color="white" variant={'outline'}>Clique aqui</Button>
                <Button  color="white" variant={'outline'}>Clique aqui</Button>
                <Button  color="white" variant={'outline'}>Clique aqui</Button>
            </Flex>
        </Flex>
    ) 
}

export default Header;