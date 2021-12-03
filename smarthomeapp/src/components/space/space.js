import React from "react";
import "./space.css";

class Space extends React.Component {
  state = {
    loading: true,
    states: [],
  };

  async componentDidMount() {
    const url =
      "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
    const res = await fetch(url);
    const data = await res.json();
    this.setState({ states: data, loading: false });
    console.log(data);
  }

  render() {
    return (
      <div>
        <h1>My spaces</h1>
        <div class="container">
          {this.state.states.map((item, i) => (
            <div class="card">
              <img
                src="https://atlas-content-cdn.pixelsquid.com/assets_v2/192/1929330455627175284/jpeg-600/G03.jpg"
                alt=""
                width="120"
              />
              <div class="normal-align">
                <p class="title">{item.name}</p>
                <p>{item.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Space;
