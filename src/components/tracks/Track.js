import React from "react";
import {Link} from "react-router-dom";
//import Lyrics from "./Lyrics";
import Moment from "react-moment";
const Track = (props) =>{

    const {track} = props;
    return(
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{track.artist_name}</h5>
                    <p className="card-text">
                        <strong><i className="fas fa-play"></i> Track: </strong>{track.track_name}
                        <br/>
                        <strong><i className="fas fa-compact-disc"></i> Album: </strong>{track.album_name}
                        <br/>
                        <strong><i className="fas fa-star"></i> Rating: </strong>{track.track_rating}
                        <br/>
                        <strong><i className="fas fa-calendar"></i> Released: </strong>
                        <span>
                          <Moment format="MM/DD/YYYY">
                            {track.first_release_date}
                          </Moment>
                        </span>
                    </p>
                    <Link className="btn btn-dark btn-block"
                          to={`lyrics/track/${track.track_id}`}> View Lyrics <i className="fas fa-chevron-right"></i>
                    </Link>
                    {/*<Lyrics  trackID = {track.track_id}/>*/}
                </div>
            </div>
        </div>
    );
}
export default Track;