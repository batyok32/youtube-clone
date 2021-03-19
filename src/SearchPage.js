import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow 
                image = "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                channel = "Clever Programmer"
                verified 
                subs="660K"
                noOfVideos={382}
                description="lorem"
            />
            <hr/>
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want"
                timestap="59seconds ago"
                channel="Clever Programmer"
                title="Let s build youtube clone"
                image="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want"
                timestap="59seconds ago"
                channel="Clever Programmer"
                title="Let s build youtube clone"
                image="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want"
                timestap="59seconds ago"
                channel="Clever Programmer"
                title="Let s build youtube clone"
                image="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want"
                timestap="59seconds ago"
                channel="Clever Programmer"
                title="Let s build youtube clone"
                image="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want"
                timestap="59seconds ago"
                channel="Clever Programmer"
                title="Let s build youtube clone"
                image="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            />
        </div>
    )
}

export default SearchPage
