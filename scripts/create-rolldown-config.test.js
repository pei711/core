import { expect, it } from 'vitest'
import { createConfigsForPackage } from './create-rolldown-config.js'

it('enables SSR branches in browser runtime builds', () => {
  const [config] = createConfigsForPackage({
    target: 'vue',
    commit: 'test',
    formats: ['esm-browser-runtime'],
    devOnly: true,
    localDev: true,
  })

  expect(config.transform.define.__SSR__).toBe('true')
})
