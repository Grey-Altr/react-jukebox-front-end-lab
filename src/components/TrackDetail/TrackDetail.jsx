const TrackDetail = (props) => {
    if (!props.selected) {
        return (
            <div>
                <h3>NO DETAILS</h3>
            </div>
        );
    }

    return (
        <div>
            <h3>Title: {props.selected.title}</h3>
            <h3>Artist: {props.selected.artist}</h3>
            <div>
                <button onClick={() => props.handleFormView(props.selected)}>
                    Edit Track
                </button>
                <button onClick={() => props.handleDeleteTrack(props.selected._id)}>
                    Delete Track
                </button>
            </div>
        </div>
    );
};

export default TrackDetail;