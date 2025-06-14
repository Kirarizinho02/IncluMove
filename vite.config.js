import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //supressão de warnings devido a nossa utilização de variáveis globais do scss (import)
  //e uma discordância entre a biblioteca do sass e bootstrap (mixed-decls, color-functions e global-builtin)
  css: {
    preprocessorOptions: {
      scss: { 
        silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import']
      }
    }
  },
})
