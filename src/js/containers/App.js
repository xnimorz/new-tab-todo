import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MainSection from '../components/MainSection'
import * as Actions from '../actions/actions'

class App extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { todo, user, timer, actions, view } = this.props;
        return (
            <div>
                <MainSection todo={todo} user={user} timer={timer} view={view} actions={actions} />
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        todo: state.todo,
        timer: state.timer,
        user: state.user,
        view: state.view
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
