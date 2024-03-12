'use client';

import Image from 'next/image'
import {
	Box,
	Center,
	Heading,
	Text,
	Stack,
	Link,
	useColorModeValue,
} from '@chakra-ui/react';

export default function card({
	imageURL, name, sport, price, copy,
}) {
	return (
		<Center py={6}>
			<Box
				maxW={'345px'}
				w={'full'}
				// eslint-disable-next-line react-hooks/rules-of-hooks
				bg={useColorModeValue('white', 'gray.900')}
				boxShadow={'2xl'}
				rounded={'md'}
				p={6}
				overflow={'hidden'}>
				<Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
					<Image
						src={
							imageURL || 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
						}
						fill
						alt="Example"
					/>
				</Box>
				<Stack>
					<Text
						color={'green.500'}
						textTransform={'uppercase'}
						fontWeight={800}
						fontSize={'sm'}
						letterSpacing={1.1}>
						{sport}
					</Text>
					<Heading
						// eslint-disable-next-line react-hooks/rules-of-hooks
						color={useColorModeValue('gray.700', 'white')}
						fontSize={'2xl'}
						fontFamily={'body'}>
						{name}
					</Heading>
					<Text h={100} color={'gray.500'}>
						{copy}
					</Text>
				</Stack>
				<Stack mt={6} direction={'row'} spacing={4} align={'center'}>
					<Stack direction={'row'} alignItems="center" w="full" spacing={4} fontSize={'sm'} justifyContent="space-between">
						<Text fontSize={'xl'} fontWeight={900}>{price}</Text>
						<Link>Roster Up</Link>
					</Stack>
				</Stack>
			</Box>
		</Center>
	)
}