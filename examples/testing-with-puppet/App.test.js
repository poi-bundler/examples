import assert from 'assert'
import App from './App'

describe('App', () => {
  it('says hello', () => {
    assert(App.textContent === 'hello')
  })
})
