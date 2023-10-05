import '@/assets/main.css';
import NowPlayingTrack from '@/components/NowPlayingTrack.vue';
import type { Track } from '@/services/radio.service';

describe('<NowPlayingTrack />', () => {
  beforeEach(function () {
    cy.fixture<Track[]>('tracks').then((tracks) => {
      this.nowPlayingTrack = tracks.find(({ status }) => status === 'playing');
    });
  });

  it('renders', function () {
    cy.mount(NowPlayingTrack, {
      props: {
        track: this.nowPlayingTrack
      }
    });
  });

  it('has progress bar', function () {
    cy.mount(NowPlayingTrack, {
      props: {
        track: this.nowPlayingTrack
      }
    });

    cy.get('[data-cy=progress-bar]').should('have.attr', 'value').and('equal', '100');
  });
});
