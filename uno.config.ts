
import presetWebFonts from '@unocss/preset-web-fonts'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, presetUno, type PresetUnoTheme, presetTypography } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig<PresetUnoTheme>({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        "display": ['Julius Sans One'],
        "sans": ['Inter'],
      },
    }),
    presetTypography(),
  ],
  theme: {
    colors: {
      primary: 'blue-600',
      "primary-foreground": '#FFF',
      foreground: '#000000',
      "foreground-foreground": '#FFF',
      muted: '#D0CDCD',
      background: '#ffffff',
    },
    container: {
      center: true,
      maxWidth: {
        '2xl': '1200px',
        'xl': '1050px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
        'xs': '480px'
      }
    }
  },
  shortcuts: [
    ["text-title-1", "font-display text-4 md:text-8 font-800 leading-12 tracking-0.2px"],
    ["text-title-2", "font-display text-2 md:text-6 font-800 leading-12 tracking-0.2px"],
    ["text-body", "font-sans text-4 font-400 leading-6 tracking-0.2px"],
    ["text-body-md", "font-sans text-4 md:text-5 font-400 leading-6 tracking-0.2px"],
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives()
  ]
})