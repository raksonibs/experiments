const Bar = React.createClass({
    render() {
        return (
            <div className="bar">{this.props.title}</div>
        )
    }
});

export {
    Bar
};

export default Bar;