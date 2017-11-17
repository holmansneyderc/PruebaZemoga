var React = require('react');

require('./css/addItem.css');

var Footer = React.createClass({
    render: function(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <span>Is there anyone else you would want us to add</span>
                <input type="submit" value="Submit a Name" />
            </form>
        );
    },

    //Custom functions
    handleSubmit: function(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    }
});

module.exports = Footer;
