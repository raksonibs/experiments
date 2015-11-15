class Main extends React.Component {
   render() {
    return ( 
      <div className="container">
        <h1> Test </h1>
      </div>
    )
   }
 }

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
    )
}

$(documentReady)