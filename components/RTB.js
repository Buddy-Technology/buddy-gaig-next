'use client'

import {
	Box,
	chakra,
	Flex,
	SimpleGrid,
	Stat,
	StatLabel,
	StatNumber,
	useColorModeValue,
	Link,
} from '@chakra-ui/react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import { MdOutlineSportsBasketball } from "react-icons/md";
import { GiAmericanFootballPlayer } from "react-icons/gi";
import { FaPeopleLine } from "react-icons/fa6";



function extractNumberFromString(str) {
	const numericPart = str.replace(/[^0-9]/g, ''); // Remove everything that is not a digit
	return parseInt(numericPart, 10); // Convert the numeric string to an integer
}

function StatsCard({ title, stat, icon }) {
	return (
		<Stat
			textColor={"white"}
			px={{ base: 2, md: 4 }}
			py={'7'}
			shadow={'xl'}
			border={'1px solid'}
			borderColor={useColorModeValue('gray.800', 'gray.500')}
			bgGradient="linear(to-bl, red.400, orange.300)"
			rounded={'lg'}
			my={24}
		>
			<Flex justifyContent={'space-between'}>
				<Box pl={{ base: 2, md: 4 }}>
					<StatLabel fontWeight={'medium'} isTruncated>
						{title}
					</StatLabel>
					<StatNumber fontSize={'2xl'} fontWeight={'medium'}>
						<VisibilitySensor>
							{({ isVisible }) => (
								<CountUp
									start={0}
									end={extractNumberFromString(isVisible ? stat : "0")}
									duration={1.5}
								>
									{({ countUpRef, start }) => (
										<span ref={countUpRef} />

									)}
								</CountUp>
							)}
						</VisibilitySensor>
					</StatNumber>
				</Box>
				<Box
					my={'auto'}
					alignContent={'center'}>
					{icon}
				</Box>
			</Flex>
		</Stat>
	)
}

export default function BasicStatistics() {
	return (
		<Box maxW="7xl" mx={'auto'} pt={12} px={{ base: 2, sm: 12, md: 17 }}>
			<chakra.h1 textAlign={'center'} fontSize={'4xl'} py={4} fontWeight={'bold'}>
				Wherever you are, there's a roster to join.
			</chakra.h1>
			<SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
				<StatsCard title={'Leagues'} stat={'1,785'} icon={<MdOutlineSportsBasketball size={'3em'} />} />
				<StatsCard title={'Teams'} stat={'12,312'} icon={<FaPeopleLine size={'3em'} />} />
				<StatsCard title={'Players'} stat={'88,912'} icon={<GiAmericanFootballPlayer size={'3em'} />} />
			</SimpleGrid>
			<Box
				w="full"
				mb={12}
				display="flex"
				justifyContent="center"
			>
				<Link
					fontSize="2xl"
					href="#leagues"
					fontWeight="bold"
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
					Find Your League Now
				</Link>
			</Box>
		</Box>
	)
}