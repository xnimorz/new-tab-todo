/** @jsx React.DOM */
!function() {
    'use strict';

    var app = document.querySelector('.app');

    var UserName = require('./User/UserName');
    var manager = require('./Managers/ToDosManager');
    var ToDoesList = require('./ToDos/ToDoesList');
    var CurrentTime = require('./Timer/CurrentTime');

    React.render(
        <div className="page__content">
            <div className="content-box">
                <div className="content-box__timer">
                    <CurrentTime/>
                </div>
                <div className="content-box__list">
                    <UserName/>
                    <ToDoesList manager={manager}/>
                </div>
            </div>
        </div>,
        app
    );

}();
