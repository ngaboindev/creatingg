import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { Dict } from '@chakra-ui/utils';

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'brand.500',
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: '8px',
      },
    },
  },
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.500',
  },
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: '#f0f5ff',
        100: '#e5edff',
        200: '#cddbfe',
        300: '#b4c6fc',
        400: '#8da2fb',
        500: '#6875f5',
        600: '#5850ec',
        700: '#5145cd',
        800: '#42389d',
        900: '#362f78',
      },
    },
    fonts: {
      heading: `Inter, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    components: {
      Button: {
        baseStyle: {
          rounded: '8px',
        },
        variants: {
          primary: (props: Dict<any>) => ({
            ...brandRing,
            color: mode('white', 'gray.600')(props),
            backgroundColor: mode('brand.500', 'brand.300')(props),

            _hover: {
              backgroundColor: mode('brand.600', 'brand.400')(props),
            },

            _active: {
              backgroundColor: mode('brand.700', 'brand.500')(props),
            },
          }),
        },
      },
      Input: {
        ...inputSelectStyles,
      },
      Select: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: 'none',
            ...brandRing,
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox'],
  }),
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select'],
  })
);

export default theme;
