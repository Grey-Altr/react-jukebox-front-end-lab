import { useState } from 'react';
import { userState, useEffect } from 'react';
import * as trackService from './services/trackService.js';
import TrackList from './components/TrackList/TrackList.jsx';

const App = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const fetchedTracks = await trackService.index();
        if (fetchedTracks.err) {
          throw new Error(fetchedTracks.err);
        }
        setTracks(fetchedTracks);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTracks();
  }, [])

  return (
    <>
      <TrackList tracks={tracks} />
    </>
  );
};

export default App;
