import React, { Component } from 'react'
import './News.css'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
       this.updateComponent();
    }
    async updateComponent() {
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=10`;
        this.props.setProgress(10);
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    fetchMoreData = async () => {

        this.setState({
            page: this.state.page + 1
        })

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=10`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    };


    handlePrevClick = async () => {

        this.setState({
            page: this.state.page - 1
        })
        this.updateComponent();
    }
    handleNextClick = async () => {

        this.setState({
            page: this.state.page + 1
        })
        this.updateComponent();
    }

    capitalFirstLetter = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1, text.length);
    }
    render() {
        document.title = "FreshNews - " + this.props.category;
        return (

            <>
                <div className="container">

                    <h1>FreshNews : Top {this.capitalFirstLetter(this.props.category)} News</h1>

                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                        <div className="row">

                            {this.state.articles.map((element) => {
                                return <NewsItem key={element.url} title={element.title} description={element.description} urlToImage={!element.urlToImage ? "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/10/2021_10$largeimg_1221599546.jpg" : element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} />
                            })}

                        </div>
                    </InfiniteScroll>
                </div>
                {/* 
 
                <div className="btns">
                    <button className="btn" onClick={this.handlePrevClick} disabled={this.state.page <= 1} style={{ background: this.disabled ? 'grey' : "black" }}>
                        &larr;Previous
                    </button>
                    <button className="btn" onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 10)} style={{ background: this.disabled ? "grey" : "black" }}>
                        Next&rarr;
                    </button>
                </div>

                */}
            </>
        )
    }
}
