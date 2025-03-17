import { useState } from 'react';
import { userState, useEffect } from 'react';
import * as trackService from './services/trackService.js';
import TrackList from './components/TrackList/TrackList.jsx';
import TrackDetail from './components/TrackDetail/TrackDetail.jsx';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState =(null);

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
  }, []);

  const handleSelect = (track) => {
    setSelected(track);
  };

  return (
    <>
      <TrackList tracks={tracks} handleSelect={handleSelect} />
    </>
  );
};

export default App;
