class Tweet extends React.Component {
  render() {
    return (
          <li> {this.props.name} {this.props.body}</li>
    )
  }
}