var React = require('react');

require('./css/addItem.css');

var Inc = React.createClass({
    render: function(){
        return(
            <header id="topnav">
                <div className="content-nav">
                  <div className="inner">
                    <div className="titlerule">Rule of Thumb.</div>
                    <nav role='navigation'>
                      <ul>
                        <li><a href="#">Past Trials</a></li>
                        <li><a href="#">How It Works</a></li>
                        <li><a href="#">Log in / Sing up</a></li>
                        <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                      </ul>
                    </nav>  
                  </div>
                </div>
                <div className="cbig-box">
                    <div className="big-box">
                        <div className="box">
                            <p>What's yout opinion on</p>
                            <h2>Pope Francis?</h2>
                             <p>He's talcking tough on clergy sexual abuse, bur is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>
                            <i className="fa fa-wikipedia-w" aria-hidden="true"></i>
                            <span>More information</span>
                            <h4>What's Your Veredict?</h4>
                           
                            </div>
                            <div className="box-share">
                                <div className=" a">
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>    
                                </div>
                                <div className=" b">
                                <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="infoheader">
                    <div className="infoa">CLOSING IN</div>
                    <div className="infob"><span>22</span> days</div>
                </div>
            </header>
        );
    },

    //Custom functions
    handleSubmit: function(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    }
});

module.exports = Inc;
