import React, { Component } from 'react'
import './NewsItem.css'
export default class NewsItem extends Component {
    render() {
        let {title,description,urlToImage,url,author,publishedAt} = this.props;
        return (
            <div className="card">
                <img src={urlToImage} alt="" />
                <h3>{title}</h3>
                <p>{description}</p>
                <p className="articleInfo">Author- {!author?"Uknown":author} and published- {publishedAt}</p>
                <a href={url} target="-blank">Read More</a>
            </div>
        )
    }
}
