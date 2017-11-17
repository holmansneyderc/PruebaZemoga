var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, browserHistory, Link } from 'react-router';

//Module requires
var Box = require('./box');
var Footer = require('./footer');
var About = require('./about');
var Inc = require('./inc');

//CSS requires
require('./css/index.css');


//SETUP ROUTING
var App = React.createClass({
    render: function(){
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={TodoComponent}></Route>
                <Route path={"/about"} component={About}></Route>
            </Router>
        );
    }
});

//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: [{photo: './app/img/Kanye_West.jpg', name: 'Kanye West', date: '1', theme: 'Entertainment', description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.', like: '64'},
                    {photo: './app/img/mark.jpg', name: 'Mark Zuckerberg', date: '1', theme: 'Entertainment', description: 'Thank you for voting!', like: '36'},
                    {photo: './app/img/Cristina.jpg', name: 'Cristina Fernández de Kitchner', date: '1', theme: 'Politics', description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.', like: '36'},
                    {photo: './app/img/Malala.jpg', name: 'Malala Yousafzai', date: '1', theme: 'Entertainment', description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.', like: '64'}]
        }
    }, //getInitialState
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(<Box key={index} item={item} onDelete={this.onDelete} />);
        }.bind(this));
        return(
            
            <div id="todo-list">
                <Inc onAdd={this.onAdd} />
                 <div className="wrapper-box">
                 <div className="descp">
                    <div className="descpa">Speak out. Be heard.<br /><span>Be counted</span></div>
                    <div className="descpb">Rule of Thumb is crowd court of publick opinion where anyone and everyone can speak out andspeak freely. It's easy: You share your opinion, we abalyze abd out the data in public report</div>
                    <div className="descpc">x</div>
                    </div>
                </div>
               
                <div className="wrapper-box">
                    <div className="wrapper-boxc">
                        {todos}
                    </div>
                </div>
                <div className="wrapper-box">

                    <Footer onAdd={this.onAdd} />
                </div>
               
            </div>
        );
    } //render
});
ReactDOM.render(<App />, document.getElementById('wrapper'));
