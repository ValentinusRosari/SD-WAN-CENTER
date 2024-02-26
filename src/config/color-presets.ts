import { useTheme } from 'next-themes';

export const presetLight = {
  lighter: '#f1f1f1',
  light: '#666666',
  default: '#111111',
  dark: '#000000',
  foreground: '#ffffff',
};

export const presetDark = {
  lighter: '#222222',
  light: '#929292',
  default: '#f1f1f1',
  dark: '#ffffff',
  foreground: '#111111',
};

// defaults from global css line 38
export const DEFAULT_PRESET_COLORS = {
  lighter: '#ff4c48',
  light: '#ff2624',
  default: '#b31312',
  dark: '#670000',
  foreground: '#ffffff',
};

export const DEFAULT_PRESET_COLOR_NAME = 'Red';

export const usePresets = () => {
  const { theme } = useTheme();

  return [
    {
      name: DEFAULT_PRESET_COLOR_NAME,
      colors: DEFAULT_PRESET_COLORS,
    },
    {
      name: 'Black',
      colors: {
        lighter: theme === 'light' ? presetLight.lighter : presetDark.lighter,
        light: theme === 'light' ? presetLight.light : presetDark.light,
        default: theme === 'light' ? presetLight.default : presetDark.default,
        dark: theme === 'light' ? presetLight.dark : presetDark.dark,
        foreground:
          theme === 'light' ? presetLight.foreground : presetDark.foreground,
      },
    },

    /*{
      name: 'Black',
      colors: {
        lighter: '#222222',
        light: '#929292',
        default: '#f1f1f1',
        dark: '#ffffff',
        foreground: '#111111',
      },
    },*/
  ];
};
