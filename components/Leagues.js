'use client'

import {
	Box,
	Container,
	Flex,
	Heading,
	Icon,
	Stack,
	Text,
	Link,
} from '@chakra-ui/react'

import Card from '@components/Card';
import { useState } from 'react';

const leagues = [
	{
		imageURL: 'https://images.unsplash.com/photo-1538432091670-e6b79bd9bffa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		name: 'Aurora Archers',
		sport: 'Archery',
		price: '$150',
		copy: 'Join the Aurora Archers league for a shot at precision and camaraderie under the open sky.'
	},
	{
		imageURL: 'https://plus.unsplash.com/premium_photo-1676634832256-e697d849f554?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		name: 'Crimson Cannons',
		sport: 'Basketball',
		price: '$200',
		copy: 'Dribble and dunk your way through the season with the Crimson Cannons. Teamwork makes the dream work!'
	},
	{
		imageURL: '',
		name: 'Neptune Navigators',
		sport: 'Sailing',
		price: '$300',
		copy: 'Set sail with the Neptune Navigators and conquer the waves in thrilling regattas and team races.'
	},
	{
		imageURL: '',
		name: 'Galactic Guardians',
		sport: 'Ultimate Frisbee',
		price: '$120',
		copy: 'Soar high and aim far with the Galactic Guardians. Ultimate frisbee like you’ve never experienced before!'
	},
	{
		imageURL: '',
		name: 'Mystic Mavericks',
		sport: 'Lacrosse',
		price: '$180',
		copy: 'Dodge, pass, and score with the Mystic Mavericks, where speed and strategy win the game.'
	},
	{
		imageURL: '',
		name: 'Thunder Tacticians',
		sport: 'Football',
		price: '$250',
		copy: 'Charge down the field with the Thunder Tacticians and experience the electrifying thrill of victory.'
	},
	{
		imageURL: '',
		name: 'Blizzard Blasters',
		sport: 'Ice Hockey',
		price: '$275',
		copy: 'Hit the ice with the Blizzard Blasters. It’s not just about the goals, it’s about the glory!'
	},
	{
		imageURL: '',
		name: 'Solar Sprinters',
		sport: 'Track Relay',
		price: '$100',
		copy: 'Race against time with the Solar Sprinters. Speed, endurance, and teamwork in every lap.'
	},
	{
		imageURL: 'https://images.unsplash.com/photo-1558253917-0edb67da60e5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		name: 'Vortex Voyagers',
		sport: 'Rowing',
		price: '$220',
		copy: 'Row in rhythm with the Vortex Voyagers. Unity and strength propel us forward.'
	},
	{
		imageURL: '',
		name: 'Quasar Quidditch',
		sport: 'Quidditch',
		price: '$160',
		copy: 'Take flight with the Quasar Quidditch league. Fantasy becomes reality in this magical sport.'
	}
];


const postalCodes = [
	'E14 5NQ',
	"10001", // New York, USA
	"W1A 1AA", // London, UK
	"75001", // Paris, France
	"1000", // Brussels, Belgium
	"1011", // Amsterdam, Netherlands
	"00100", // Rome, Italy
	"10430", // Bangkok, Thailand
	"110001", // New Delhi, India
	"2000", // Sydney, Australia
	"1000", // Sofia, Bulgaria
	"H3Z 2A7", // Montreal, Canada
	"100-0001", // Tokyo, Japan
	"119019", // Moscow, Russia
	"7100", // Santa Fe, Argentina
	"1004", // Lagos, Nigeria
	"00150", // Helsinki, Finland
	"01001-000", // São Paulo, Brazil
	"11564", // Cairo, Egypt
	"04826", // Seoul, South Korea
	"28001", // Madrid, Spain
	"1000", // Brussels, Belgium
	"11411", // Riyadh, Saudi Arabia
	"1632", // Manila, Philippines
	"00101", // Nairobi, Kenya
	"050021", // Almaty, Kazakhstan
	"1066", // Budapest, Hungary
	"0001", // Oslo, Norway
	"1010", // Vienna, Austria
	"1650", // Johannesburg, South Africa
	"1007", // Zurich, Switzerland
];

function getRandomElementsFromArray(originalArray, numberOfElements) {
  // Create a copy of the array to avoid mutation
  let arrayCopy = [...originalArray];

  // Shuffle the copied array
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]]; // Swap elements
  }

  // Return the sliced array based on the requested number of elements
  return arrayCopy.slice(0, numberOfElements);
}


export default function gridListWith() {
	const [postalCode, setPostalCode] = useState(postalCodes[0]);
	const newPostalCode = () => {
		const _newPostalCode = postalCodes[Math.floor(Math.random() * postalCodes.length)];
		setPostalCode(_newPostalCode);
	};
	return (
		<Box p={4} my={8} id="leagues">
			<Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
				<Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
					Leagues Near You
				</Heading>
				<Text color={'gray.600'} userSelect="none" fontSize={{ base: 'sm', sm: 'md' }}>
					We've found 3 leagues near you in
					<Link color="red.500" mx={1} textDecoration="underline" onClick={newPostalCode}>
						{postalCode}
					</Link>
					ready to roster.
				</Text>
			</Stack>

			<Container maxW={'8xl'} mt={12}>
				<Flex flexWrap="wrap" gridGap={6} justify="center">
					{getRandomElementsFromArray(leagues, 3).map((el, i) => {

						return (
							<Card {...el} />
						);
					})}


				</Flex>
			</Container>
		</Box>
	)
}