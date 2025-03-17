import { useState } from 'react';

const TrackForm = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        artist: '',
    });

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt) => {
      evt.preventDefault();
      props.handleAddTrack(formData);
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"> Name </label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <label htmlFor="artist"> Artist </label>
          <input
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            required
          />
          <button type='submit'>Add New Track</button>
        </form>
      </div>
    );
}