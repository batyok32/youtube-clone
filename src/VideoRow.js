import React from 'react'
import "./VideoRow.css"

function VideoRow({views, subs, description, timestap, channel, title, image}) {
    return (
        <div className="videoRow">
            <img src={image} alt={channel}/>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                    {channel} * {" "}
                    <span className="videoRow__subs">
                        <span className="videoRow__subsNumber">{subs}</span> 
                    </span>{" "} 
                    {views} views * {timestap}</p>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
