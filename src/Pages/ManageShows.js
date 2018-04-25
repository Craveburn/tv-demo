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
        shows: [
            {
                name: 'Breaking Bad',
                rating: 5,
                previewImg: 'https://ia.media-imdb.com/images/M/MV5BZDNhNzhkNDctOTlmOS00NWNmLWEyODQtNWMxM2UzYmJiNGMyXkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UY268_CR4,0,182,268_AL_.jpg'
            }
        ]
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
    render() {
        // console.log(this.state)
        return (
            <div className="manageShows">
                <section className="viewAllShows">
                    <header><h1>All Shows</h1></header>
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