'use client';

// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import '@styles/globals.css';

function Application({ Component, pageProps }) {
  return (
	<ChakraProvider>
		<Component {...pageProps} />
	</ChakraProvider>
	)
}

export default Application
