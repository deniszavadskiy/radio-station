import '@/assets/main.css';
import RadioApp from '@/components/RadioApp.vue'
import type { Track } from '@/services/radio.service'

describe('<RadioApp />', () => {
  beforeEach(function () {
    cy.fixture<Track[]>('tracks').then((tracks) => {
      this.tracks = tracks;
    }).then(() => {
      cy.mount(RadioApp, {
        props: {
          tracks: this.tracks
        }
      })
    })
  })

  it('has playing track', function () {
    cy.get('[data-cy=now-playing]').should('be.visible')
  });

  it('has history tracks list', function () {
    cy.get('[data-cy=history-tracks]').should('be.visible')
  })
})