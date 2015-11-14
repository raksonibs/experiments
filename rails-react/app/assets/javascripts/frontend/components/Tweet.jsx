class Tweet extends React.Component {
  render() {
    return (
          <li> {this.props.name} {this.props.body}
          <time> {this.props.formatedDate} </time>
          </li>
    )
  }
}