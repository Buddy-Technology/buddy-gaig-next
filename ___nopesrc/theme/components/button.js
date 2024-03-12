import { defineStyleConfig } from '@chakra-ui/react';
// import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const Button = defineStyleConfig({
	baseStyle: {
		size: '1em',
		borderRadius: 6,
		transition: 'background-color 0.3s ease-out',
		_disabled: {
			opacity: 0.4,
			cursor: 'not-allowed',
		},
	},
	sizes: {
		sm: {
			fontSize: 'sm',
			px: '8px',
			py: '6px',
		},
		md: {
			fontSize: 'md',
			px: '12px',
			py: '8px',
		},
		lg: {
			fontSize: 'lg',
			px: '13.5px',
			py: '9px',
		},
	},
	variants: {
		// props: StyleFunctionProps
		primary: () => ({
			bg: 'primary.500',
			color: 'neutral.50',
			_hover: {
				bg: 'primary.600',
				_disabled: {
					bg: 'primary.500',
				},
			},
			_focus: {
				bg: 'primary.700',
				boxShadow: '0px 0px 0px 2px #FFFFFF, 0px 0px 0px 5px rgba(220, 86, 72, 0.5)',
			},
			_pressed: {
				bg: 'primary.700',
			},
			_active: {
				bg: 'primary.700',
			},
			_loading: {
				_hover: {
					bg: 'primary.500', // loading sets opacity to 0.4, and bg to 'initial.' This effectively stops a hover background change.
				},
			},
		}),
		secondary: () => ({
			bg: 'neutral.50',
			color: 'primary.500',
			_hover: {
				bg: 'primary.50',
			},
			_focus: {
				bg: 'primary.50',
				boxShadow: '0px 0px 0px 2px #FFFFFF, 0px 0px 0px 5px rgba(220, 86, 72, 0.5)',
			},
			_pressed: {
				bg: 'primary.100',
			},
			_active: {
				bg: 'primary.100',
			},
		}),
		outline: () => ({
			bg: 'neutral.50',
			color: 'neutral.700',
			borderColor: 'neutral.400',
			borderWidth: '1px',
			borderStyle: 'solid',
			_hover: {
				bg: 'neutral.100',
			},
			_focus: {
				bg: 'neutral.100',
				boxShadow: '0px 0px 0px 2px #FFFFFF, 0px 0px 0px 5px rgba(220, 86, 72, 0.5)',
			},
			_pressed: {
				bg: 'neutral.200',
			},
			_active: {
				bg: 'neutral.200',
			},
		}),
		link: () => ({
			bg: 'transparent',
			color: 'primary.500',
			size: '1em',
			lineHeight: 1.5,
			fontWeight: 500,
			padding: 0,
			_hover: {
				color: 'primary.600',
				textDecoration: 'none',
			},
			_pressed: {
				color: 'primary.700',
				textDecoration: 'none',
			},
			_active: {
				color: 'primary.700',
				textDecoration: 'none',
			},
			_focus: {
				color: 'primary.600',
				textDecoration: 'none',
			},
			_focusVisible: {
				boxShadow: '0px 0px 0px 2px #FFFFFF, 0px 0px 0px 5px rgba(220, 86, 72, 0.5)',
			},
		}),
	},
	defaultProps: {
		size: 'md', // default is md
		variant: 'primary', // default is solid
	},
});

export default Button;