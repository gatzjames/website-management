var AppActions = require( '../../actions/app.actions.js' );

var AddButton = React.createClass({
    handleClick: function(){
        AppActions.isModalVisible(true, {});
    },
    render: function(){
        return (
            <div className="btn btn-primary" onClick={this.handleClick}>
                <i className="fa fa-plus"></i>
            </div>
        );
    }

});

module.exports = AddButton;