import '@/assets/main.css';
import TrackItem from '@/components/TrackItem.vue';
import type { Track } from '@/services/radio.service';

describe('<TrackItem />', () => {
  beforeEach(function () {
    cy.fixture<Track[]>('tracks').then(tracks => {
      this.historyTrack = tracks.find(({ status }) => status === 'history');
    })
  })

  it('renders', function () {
    cy.mount(TrackItem, {
      props: {
        track: this.historyTrack
      }
    })
  })

  it('has all required information', function () {
    cy.mount(TrackItem, {
      props: {
        track: this.historyTrack
      }
    })

    cy.get('[data-cy=track-image]').should('have.attr', 'src').and('equal', this.historyTrack.imageUrl)
    cy.get('[data-cy=track-title]').should('have.text', this.historyTrack.title)
    cy.get('[data-cy=track-artist]').should('have.text', this.historyTrack.artist)
    cy.get('[data-cy=track-duration]').should('have.text', this.historyTrack.duration)
    cy.get('[data-cy=track-start-time]').should('have.text', new Date(this.historyTrack.time).toLocaleTimeString())
  })
})