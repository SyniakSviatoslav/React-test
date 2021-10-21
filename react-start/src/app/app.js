
import React from 'react';
import './styles.css';



class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' })
  };
  
    fetch("https://615c91e3c29813001773625b.mockapi.io/exhibits")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }

      )

  }

  render() {
    console.log(this.state)
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="wrapper">
          
            {items.map(item => (
              <div className="container">
                <li key={item.id}>
                </li>
                <div className="typeContainer">
                  <p className="mainText">{item.name} {item.lastName}</p>
                  <p>{item.nameDescr}</p>
                </div>
                <div className="typeContainer">
                  <p className="mainText">{item.earnings}$</p>
                  <p>{item.paid}</p>
                </div>
                <div className="typeContainer">
                  <p className="mainText">{item.comission}$</p>
                  <p>{item.paid}</p>
                </div>
                <div className="jobContainer">
                  <p className="mainText">{item.company}</p>
                  <p>{item.job}</p>
                </div>
                <div className="typeContainer">
                  <p className="mainText">{item.rating}</p>
                  <p>{item.ratingDesc}</p>
                </div>
                <div className="buttonContainer">
                  <button className="offerBtn">View Offer</button>
                </div>

              </div>


            ))}
        </div>

      );
    }

  }
}

export default MyComponent;



// class App extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0
//       }
//     }

//     increase = () => {
//       this.setState({ count: this.state.count + this.props.step })
//     }
//     decrease = () => {
//       this.setState({ count: this.state.count - this.props.step })
//     }
//     render() {
//       const { count } = this.state;
//       console.log(this.props)
//       return (
//         <>
//           <div className="wrapper">
//             <input placeholder="How much add or decrease" type="number" id="input"></input>
//             <button className="maxButton" type="button" onClick={this.increase}>+</button>
//             <p>{count}</p>
//             <button className="minButton" type="button" onClick={this.decrease}>-</button>
//           </div>
//         </>
//       )
//     }
//   }

//   export default App;

