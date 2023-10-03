import type { Track } from '@/services/radio.service';
import TracksHistory from './TracksHistory.vue'

const { _ } = Cypress;

const tracks: Track[] = [
  {
    "artist": "The Ian Carey Project",
    "duration": "00:02:56",
    "iTunesTrackUrl": "https://music.apple.com/gb/album/get-shaky-radio-edit/1461539963?i=1461540926&uo=4",
    "imageUrl": "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/07/f9/6a/07f96ae4-8386-fad1-2bf4-0d77fa8a7bb0/source/450x450bb.jpg",
    "status": "history",
    "time": "2023-10-03T19:19:30Z",
    "title": "Get Shaky"
  },
  {
    "artist": "Anne-Marie, Niall Horan",
    "duration": "00:02:43",
    "iTunesTrackUrl": "https://music.apple.com/gb/album/our-song/1566144679?i=1566144680&uo=4",
    "imageUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/2e/dd/152edd89-0c10-46af-dc38-084615675110/190296670121.jpg/450x450bb.jpg",
    "status": "history",
    "time": "2023-10-03T19:15:35Z",
    "title": "Our Song"
  },
  {
    "artist": "David Guetta",
    "duration": "00:03:12",
    "iTunesTrackUrl": "https://music.apple.com/gb/album/turn-me-on-david-guetta-and-laidback-luke-remix-feat/693215889?i=693215891&uo=4",
    "imageUrl": "https://is3-ssl.mzstatic.com/image/thumb/Music4/v4/a7/1f/a5/a71fa5ea-5a7e-f4c0-12a8-964bc8f2da3e/5099960221551_1500x1500_300dpi.jpg/450x450bb.jpg",
    "status": "history",
    "time": "2023-10-03T19:12:22Z",
    "title": "Turn Me on (Feat Nicki Minaj)"
  },
  {
    "artist": "Girls Aloud",
    "duration": "00:03:39",
    "iTunesTrackUrl": "https://itunes.apple.com/gb/album/jump-for-my-love/id14738471?i=14738473&uo=4",
    "imageUrl": "http://is5.mzstatic.com/image/thumb/Music/v4/cd/7e/10/cd7e10a7-e76f-6a80-e8fc-891cfd7abcb6/source/450x450bb.jpg",
    "status": "history",
    "time": "2023-10-03T19:08:47Z",
    "title": "Jump"
  },
]

describe('<TracksHistory />', () => {
  it('renders', () => {
    cy.mount(TracksHistory, {
      props: {
        tracks,
      }
    });
  })

  it('shows tracks in descending order', () => {
    cy.mount(TracksHistory, {
      props: {
        tracks,
      }
    });

    const getTrackStartTimes = (trackStartTimes: JQuery<HTMLElement>) => trackStartTimes.map((index, el) => el.textContent);

    cy.get('[data-cy=track-start-time]')
      .then(getTrackStartTimes)
      .then((dates) => console.log(dates))
  })
})