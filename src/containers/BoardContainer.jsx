// React;
import React, { Component } from 'react';
// Redux;
import { connect } from 'react-redux';
import { increaseCounter, fetchData } from '../actions'

class BoardContainer extends Component {

    componentDidMount() {
        this.props.fetchData('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Los+Angeles&sort=newest&api-key=94aed5b8d9514e3b8f3b48885239f951')
    }

    render() {
        return (
            <div>
                <p>{this.props.data}</p>
                <h1>Counter: {this.props.counter}</h1>
                <button onClick={this.props.increaseCounter}>Increase Me</button>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        counter: store.counterReducer.counter,
        data: store.counterReducer.item
    }
}

const mapDispatchToProps = (dispatch) => ({
    increaseCounter: () => {
        dispatch(increaseCounter())
    },
    fetchData: (api) => {
        dispatch(fetchData(api))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer)