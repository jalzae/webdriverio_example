import { remote } from 'webdriverio'

const browser = await remote({
  capabilities: {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: process.env.CI ? ['headless', 'disable-gpu'] : []
    }
  }
})

await browser.url('https://duckduckgo.com')

const inputElem = await browser.$('#search_form_input_homepage')
await inputElem.setValue('WebdriverIO')

const submitBtn = await browser.$('#search_button_homepage')
await submitBtn.click()