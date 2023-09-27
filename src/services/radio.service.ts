const serverURL = 'http://localhost:3000';

export interface Track {
  artist: string;
  title: string;
  duration: string;
  iTunesTrackUrl: string;
  imageUrl: string;
  status: 'history' | 'playing';
  time: string;
}

export async function fetchTracks(): Promise<{ nowplaying: Track[] }> {
  try {
    const response = await fetch(`${serverURL}/fetch-radio-data`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { nowplaying: [] };
  }
}
