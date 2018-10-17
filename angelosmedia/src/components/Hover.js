var HoverTest = React.createClass({
    getInitialState: function(){
        return {
            hover: false
        };
    },
    hoverOn: function(){
      this.setState({ hover: true });
    },
    hoverOff: function(){ 
      this.setState({ hover: false });    
    },
    render: function() {
        return (
          <i 
            className={ this.state.hover ? "fa fa-heart" : "fa fa-heart-o"} 
            onMouseEnter={this.hoverOn} 
            onMouseLeave={this.hoverOff}
          > 
           {" "} My class is: { this.state.hover ? "fa-heart" : "fa-heart-o"}
          </i>
        );
    }
});