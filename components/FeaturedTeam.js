'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function SplitScreen() {
  return (
    <Stack bgGradient="linear(to-bl, red.400, orange.300)" minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex rounded={4} m={16} shadow={'xl'} bg="white" p={8} flex={1} align={'center'} justify={'center'}>
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
                bg: 'red.400',
                zIndex: -1,
              }}>
              Featured Team
            </Text>
            <br />{' '}
            <Text color={'red.400'} as={'span'}>
              The Goats!
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
					A band of underdogs, forged an unbreakable bond from sheer randomness, the Goats clinched their league title with a series of electrifying come-from-behind victories. Their story isn't just about basketball; it's a testament to the power of teamwork and unexpected synergy.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
							as="a"
              rounded={'4'}
              bg={'red.400'}
              color={'white'}
							cursor={'pointer'}
              _hover={{
                bg: 'red.500',
              }}
							onClick={(e) => {
								e.preventDefault();
								const sectionElement = document.getElementById('leagues');
								if (sectionElement) {
									window.scrollTo({
										top: sectionElement.offsetTop,
										behavior: 'smooth'
									});
								}
							}}	
						>
              Find Your Roster!
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        />
      </Flex>
    </Stack>
  )
}