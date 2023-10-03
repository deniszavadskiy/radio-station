import RadioApp from './RadioApp.vue'

describe('<RadioApp />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(RadioApp)
  })
})