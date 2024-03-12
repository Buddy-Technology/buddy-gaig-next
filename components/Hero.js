'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'80vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1480099225005-2513c8947aec?q=80&w=3206&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'}  spacing={3}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1}
            fontSize={useBreakpointValue({ base: '3xl', md: '6xl' })}>
            Find Leagues Near You
          </Text>
					<Text
            color={'white'}
						mb="4"
            fontWeight={400}
            fontSize={useBreakpointValue({ base: '3xl', md: '2xl' })}>
            Join the league and we’ll help you Roster Up!
          </Text>
          <Stack direction={'row'}>
            <Button
							as="a"
              bg={'red.400'}
              rounded={4}
              color={'white'}
              _hover={{ bg: 'red.500' }}
							cursor={'pointer'}
							onClick={(e) => {
								e.preventDefault();
								const leaguesElement = document.getElementById('leagues');
								if (leaguesElement) {
									window.scrollTo({
										top: leaguesElement.offsetTop,
										behavior: 'smooth'
									});
								}
							}}
						>
              Find a Roster
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}