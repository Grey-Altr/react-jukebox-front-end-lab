const NowPlaying = ({ trackPlayingId, tracks }) => {
    const trackPlaying = tracks.find(track => track._id === trackPlayingId);

    return trackPlaying ? (
        <div>
            <h2>Now Playing</h2>
            <h3>{trackPlaying.title}</h3>
            <h3>{trackPlaying.artist}</h3>
        </div>
    ) : null ;
};

export default NowPlaying;