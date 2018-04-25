import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ReactPropTypes from 'prop-types'
import Show from '../Show'
import './ManageShows.css'

export default class ManageShows extends Component {
static propTypes = {
    createShow: ReactPropTypes.func.isRequired
}
    state = {
        show: {
            name: '',
            rating: -1,
            previewImg: ''
        },
    }
    handleOnChange = (e) => {
        if (e.target.id === "nameInput") {
            this.setState({
                newShowName: e.target.value
            })
        } else if (e.target.id === "ratingInput") {
            this.setState({
                newShowRating: Number(e.target.value)
            })
        } else if (e.target.id === "imgInput") {
            this.setState({
                newShowPreviewImage: e.target.value
            })
        }
    }
    handleOnClick = () => {
        this.props.createShow({
            name: this.state.newShowName,
            rating: this.state.newShowRating,
            previewImg: this.state.newShowPreviewImage,
        })
    }
    renderShows = () => {
        return this.props.allShows.map((show, i) => {
            return (
                <Show key={i} name={show.name} rating={show.rating} previewImg={show.previewImg} />
            )
        })
    }
    getAverageRating = () => {
        const sumOfRatings = this.props.allShows.reduce((accumulator, show) => {
           return show.rating + accumulator
        }, 0)
        return sumOfRatings / this.props.allShows.length
    }
    render() {
        // console.log(this.state)
        return (
            <div className="manageShows">
                <section className="viewAllShows">
                    <header>
                        <h1>All Shows</h1>
                        <p>Average Rating: {this.getAverageRating()}</p>
                    </header>
                    <div>
                        {this.renderShows()}
                    </div>
                </section>
                <section className="createShow">
                    <header>
                        <h1>New Show</h1>
                    </header>
                    <div>
                        <div><label>Name:</label><input id="nameInput" onChange={this.handleOnChange} /></div>
                        <div><label>Rating:</label><input id="ratingInput" onChange={this.handleOnChange} /></div>
                        <div><label>Preview Image:</label><input id="imgInput" onChange={this.handleOnChange} /></div>
                        <button onClick={this.handleOnClick}>Create </button>
                    </div>
                    <Link to="/">Home</Link>
                </section>
            </div>
        )
    }
}