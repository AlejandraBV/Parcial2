import React from "react";
import "./space.css";
import img0 from "../../img/img0.png";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import { FormattedMessage } from "react-intl";

class Space extends React.Component {
  state = {
    states: [],
    online: true,
  };

  async componentDidMount() {
    console.log(window.navigator.onLine);
    if (!navigator.onLine) {
      this.setState({ online: false });
      console.log("entré, stonks");
    } else {
      const url =
        "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
      const res = await fetch(url);
      const data = await res.json();
      this.setState({ states: data });
    }
  }

  render() {
    const imgs = [img0, img1, img2, img3];
    return (
      <div>
        <h1>
          <FormattedMessage id="MySpaces" />
        </h1>
        <div className="container">
          {this.state.online === true ? (
            this.state.states.map((item, i) => (
              <div
                className="card clicked"
                onClick={() => {
                  this.props.handleClick(item.id);
                }}
                key={item.id}
              >
                <img src={imgs[i]} alt="" width="120" />
                <div className="normal-align">
                  <p className="title">{item.name}</p>
                  <p>{item.address}</p>
                </div>
              </div>
            ))
          ) : (
            <h1>
              <FormattedMessage id="Loading" />
            </h1>
          )}
        </div>
      </div>
    );
  }
}

export default Space;
