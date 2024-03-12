import { extendTheme } from '@chakra-ui/react';
import components from './components';
import colors from './colors';
import globalStyles from './globalStyles';

const theme = extendTheme({
	styles: {
		global: globalStyles,
	},
	colors,
	components,
});

export default theme;