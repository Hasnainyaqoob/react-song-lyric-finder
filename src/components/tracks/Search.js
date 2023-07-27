import React, {Component} from 'react';
import axios from "axios";
import {Consumer} from "../../context";
class Search extends Component {
    state = {
        TrackTitle:'',
    }
    findTrack = e =>{
        e.preventDefault();
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.TrackTitle}&page_size=3&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res =>
            {
                //console.log(res.data);
                //this.setState({track_list: res.data.message.body.track_list})
            })
            .catch(err => console.log(err));
    }
    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-4 text-center">
                                <i className="fas fa-music">Search a Track</i>
                            </h1>
                            <p className="lead text-center">Get the Lyrics for any Song</p>
                            <form onSubmit={this.findTrack}>
                                <div className="form-group">
                                    <input className="form-control form-control-lg" type="text" id="TrackTitle"
                                           name="TrackTitle" placeholder="Song Title..." value={this.state.TrackTitle} onChange={this.onChange}/>
                                </div>
                                <button className="btn btn-primary btn-lg btn-block mb-4" type="submit">Search Track Lyrics</button>
                            </form>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default Search;