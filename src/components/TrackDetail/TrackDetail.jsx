const TrackDetail = (props) => {
    if (!props.selected) {
        return (
            <div>
                <h1>NO DETAILS</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>{props.selected.name}</h1>
            <h2>Artist: {props.selected.artist}</h2>
        </div>
    );
};

export default TrackDetail;