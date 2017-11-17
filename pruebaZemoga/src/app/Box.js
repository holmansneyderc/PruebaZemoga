var React = require('react');
var ReactDom = require('react-dom');

//CSS requires
require('./css/todoItem.css');

//Create Box component
var Box = React.createClass({
    render: function(){
        return(
                <div className="todo-item">
                    <div className="contentimg">
                        <img ref="thisItem" src={this.props.item.photo} />
                    </div>
                    <div className="contentbox">
                        <h1  ref="thisItem">{this.props.item.name}</h1>
                        <span className="item-name" ref="thisItem">{this.props.item.date} month ago in Politics</span><br/>
                        <span className="item-name" ref="thisItem">{this.props.item.description}</span>
                        <span className="item-name" ref="thisItem">{this.props.item.like}</span>
                        <div className="bt-box">
                           <div className="picture"> <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>    </div>
                            <div className="pictureb"> <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>  </div>
                        </div>
                    </div>

                   
                </div>

        );
    },

    //Custom functions
    handleDelete: function(){
        this.props.onDelete(this.props.item);
    }
});

module.exports = Box;
