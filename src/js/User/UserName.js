(function() {
    'use strict';

    var ENTER_KEY = 13;

    var UserName = React.createClass({

        getInitialState: function() {
            return {
                userName: localStorage.getItem('user'),
                type: 'link'
            };
        },

        changeToInput: function() {
            this.setState({
                userName: this.state.userName,
                type: 'input'
            });
        },

        componentDidUpdate: function() {
            React.findDOMNode(this.refs.userName).focus();
        },

        acceptChanges: function(e) {
            if (e.which === ENTER_KEY) {
                var newName = e.target.value;
                this.setState({
                    userName: newName,
                    type: 'link'
                });
                localStorage.setItem('user', newName);
            }
        },

        hideInput: function() {
            this.setState({
                userName: this.state.userName,
                type: 'link'
            });
        },

        render: function() {
            var html = <span>
                           <span className={this.state.type === 'input' ? ' g-hidden' : ''}
                                 onClick={this.changeToInput}>
                               {
                                   this.state.userName ? this.state.userName : 'username'
                               }
                           </span>
                           <input
                               className={this.state.type === 'link' ? 'g-hidden' : ''}
                               ref="userName"
                               onKeyUp={ this.acceptChanges }
                               onBlur={ this.hideInput }
                               autofocus={ true }>
                           </input>
                       </span>;


            return (
                <span className="user">
                    {'Hello, '}
                    {html}
                </span>
            );
        }

    });

    module.exports = UserName;
})();
