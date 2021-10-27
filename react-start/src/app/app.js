
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
    let tbodyData = this.state.items;
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="wrapper">
          <div className="mainContainer">
            <div className="typeContainer" id="mainContainer">
              <p className="mainText">New Arrivals</p>
              <p>More than 400+ new members</p>
            </div>
            <div className="buttonContainer">
              <button className="reportBtn">New Report</button>
            </div>
            <div className="buttonContainer">
              <button className="createBtn">Create</button>
            </div>

          </div>

          <table>
            <tr id="table-header">
              <th>PRODUCTS</th>
              <th>EARNINGS</th>
              <th>COMISSION</th>
              <th>COMPANY</th>
              <th>RATING</th>
              <th></th>
            </tr>
            {this.state.items.map(item =>
              <tr key={item.id}>
                
                <td className="about-member">
                  <h3>{item.name}{item.lastName}</h3>
                  <p>{item.nameDescr}</p>
                </td>
                <td className="earnings">
                  <h3>{item.earnings + "$"}</h3>
                  <p>{item.paid}</p>
                </td>
                <td className="comission">
                  <h3>{item.comission + "$"}</h3>
                  <p>{item.paid}</p>
                </td>
                <td className="company">
                  <h3>{item.company}</h3>
                  <p>{item.job}</p>
                </td>
                <td className="rating">
                  <h3>{item.rating }</h3>
                  <p>{item.ratingDescr}</p>
                </td>
                <td>
                <button className="offerBtn">View Offer</button>
                </td>
              </tr>
            )}
          </table>

        </div>
      );
    }

  }
}


export default MyComponent;

