import '@/assets/main.css';
import type { Track } from '@/services/radio.service';
import TracksHistory from '@/components/TracksHistory.vue';

describe('<TracksHistory />', () => {
  beforeEach(function () {
    cy.fixture<Track[]>('tracks').then((tracks) => {
      this.historyTracks = tracks.filter(({ status }) => status === 'history');
    });
  });

  it('renders', function () {
    cy.mount(TracksHistory, {
      props: {
        tracks: this.historyTracks
      }
    });
  });

  it('shows tracks in a descending order', function () {
    cy.mount(TracksHistory, {
      props: {
        tracks: this.historyTracks
      }
    });

    const isDescendingOrder = (arr: string[]) =>
      arr.every((element, index, array) => index === 0 || element <= array[index - 1]);

    const getTrackStartTimes = (trackStartTimes: JQuery<HTMLElement>) =>
      trackStartTimes.map((index, el) => el.textContent);

    cy.get('[data-cy=track-start-time]')
      .then(getTrackStartTimes)
      .then((dates) => dates.toArray())
      .then((dates) => {
        expect(isDescendingOrder(dates), 'History tracks list has a descending order').to.be.true;
      });
  });
});
