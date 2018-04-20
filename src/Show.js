import React, { Component } from 'react'
import ReactPropTypes from 'prop-types'

export default class Show extends Component {
    static propTypes = {
        name: ReactPropTypes.string.isRequired,
        rating: ReactPropTypes.number.isRequired,
        previewImg: ReactPropTypes.string.isRequired,
    }
    render() {
        return (
            <article>
                <header>
                    <h3>{this.props.name}</h3>
                </header>
                <p>{this.props.rating}</p>
                <img src={this.props.previewImg} alt='unknown' />
            </article>
        )
    }
}