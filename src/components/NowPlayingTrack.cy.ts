import NowPlayingTrack from './NowPlayingTrack.vue'

describe('<NowPlayingTrack />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(NowPlayingTrack)
  })
})