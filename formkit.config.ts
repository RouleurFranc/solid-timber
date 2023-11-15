import { nl } from '@formkit/i18n'
import { generateClasses } from '@formkit/themes'
import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import solidTimerTheme from './tailwind-theme.js'

export default defineFormKitConfig({
  config: {
    classes: generateClasses(solidTimerTheme),
  },
  icons: {
    ...genesisIcons,
  },
  locales: { nl },
  locale: 'nl',
})