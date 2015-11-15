import React, { Component } from 'react'
import ToDo from './ToDo'
import User from './User'
import ToDoInput from './ToDoInput'
import Timer from './Timer'
import Footer from './Footer'
import { INCOMPLETE } from '../constants/States'

class MainSection extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { todo, user, timer, actions, view } = this.props;
        var count = todo.reduce((count, item) =>
            (item.status === INCOMPLETE && item.isArchive === false ? ++count : count), 0);

        return (
            <div className="page__content">
                <div className="content-box">
                    <div className="content-box__timer">
                        <Timer timer={timer} tickTimer={actions.tickTimer} />
                    </div>
                    <div className="content-box__list">
                        <User user={user} changeNameUser={actions.changeNameUser} />
                        <ToDoInput addTodo={actions.addTodo} />
                        <div className="tasks-list">
                            {todo.map(item =>
                                <ToDo key={item.key} todo={item} {...actions} />
                            )}
                        </div>
                        <Footer view={view}
                                count={count}
                                changeView={actions.changeView} />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainSection
