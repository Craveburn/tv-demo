import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ReactPropTypes from 'prop-types'
import './ViewShows.css'
import Show from '../Show'

export default class ViewShows extends Component {
    static propTypes = {
        allShows: ReactPropTypes.array.isRequired
    }
    renderShows = () => {
        const nonMaShows = this.props.allShows.filter((show) => {
            return show.rating < 5
        } )
        return nonMaShows.map((show) => {
            return <Show name={show.name} rating={show.rating} previewImg={show.previewImg} />
        })
    }
    render() {
        return (
            <main className="viewShows">
                <section className="availableShows">
                    <header><h3>Available Shows</h3> </header>
                    {this.renderShows()}
                    <Link to="/ManageShows">Manage Shows</Link>
                </section>
                <section className="currentShow">

                </section>
            </main>
        )
    }
}