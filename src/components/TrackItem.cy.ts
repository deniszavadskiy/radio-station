import TrackItem from './TrackItem.vue'

describe('<TrackItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(TrackItem)
  })
})