import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue
} from '@chakra-ui/react';

export default function SplitScreen() {
    return(
        <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex flex={1} display={{base: 'flex', md: 'none'}} >
                <Image
                alt={'Login Image'}
                h={'95%'}
                w={'auto'}
                src={'/hero-image.png'}
                />
            </Flex>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    <Text
                    as={'span'}
                    position={'relative'}
                    _after={{
                        content: "''",
                        width: 'full',
                        height: useBreakpointValue({ base: '20%', md: '30%' }),
                        position: 'absolute',
                        bottom: 1,
                        left: 0,
                        bgGradient: useColorModeValue('linear(to-r, teal.400,green.400)','linear(to-r, red.400,pink.400)'),
                        zIndex: -1,
                    }}>
                    Package
                    </Text>
                    <br />{' '}
                    <Text bgGradient={useColorModeValue('linear(to-r, teal.400,green.400)','linear(to-r, red.400,pink.400)')} as={'span'} bgClip="text" >
                    Your Dreams
                    </Text>{' '}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                    The project board is an exclusive resource for contract work. It's
                    perfect for freelancers, agencies, and moonlighters.
                </Text>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                    <Button
                    as={'a'}
                    bgGradient={useColorModeValue('linear(to-r, teal.400,green.400)','linear(to-r, red.400,pink.400)')}
                    color={'white'}
                    href={'/products'}
                    _hover={{
                        bgGradient: useColorModeValue('linear(to-r, teal.500,green.500)','linear(to-r, red.500,pink.500)'),
                    }}>
                    Shop Now
                    </Button>
                    <Button as={'a'} href={'/contact'} >Get In Touch</Button>
                </Stack>
                </Stack>
            </Flex>
            <Flex flex={1} display={{base: 'none', md: 'flex'}} justifyItems={'center'} alignItems={'center'} >
                <Image
                alt={'Hero Image'}
                h={'85%'}
                w={'auto'}
                src={'/hero-image.png'}
                />
            </Flex>
        </Stack>
    )
}