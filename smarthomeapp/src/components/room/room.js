import React from "react";
import "./room.css";
import img4 from "../../img/img4.png";
import img5 from "../../img/img5.png";
import img6 from "../../img/img6.png";
import Pie from "./pie";
import { FormattedMessage } from "react-intl";

class Room extends React.Component {
  state = {
    rooms: [],
    rClicked: false,
    cRoom: [],
    online: true,
  };

  async componentDidMount() {
    if (!window.navigator.onLine) {
      this.setState({ online: false });
    } else {
      const url =
        "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
      const res = await fetch(url);
      const data = await res.json();
      this.setState({ rooms: data });
    }
  }

  handleClick(sRooms, roomID) {
    this.setState({ rClicked: true, cRoom: sRooms[roomID] });
  }

  render() {
    const imgs = [img4, img5, img6];
    const sRoom = this.state.rooms.filter(
      (item) => this.props.idRooms === item.homeId
    );

    return (
      <div>
        <h1 className="left">
          <FormattedMessage id="MyRooms" />
        </h1>
        {window.navigator.onLine === true ? (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="grid-container">
                    {sRoom.map((item, i) => (
                      <div
                        className="card-room clicked"
                        onClick={() => {
                          this.handleClick(sRoom, i);
                        }}
                        key={i}
                      >
                        <div className="normal-align">
                          <p className="title">{item.name}</p>
                        </div>
                        <img src={imgs[i]} alt="" width="120" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-6">
                  {this.state.rClicked === true && (
                    <table id="customers">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>ID</th>
                          <th>
                            <FormattedMessage id="Device" />
                          </th>
                          <th>
                            <FormattedMessage id="Value" />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.cRoom.devices.map((item, i) => (
                          <tr key={item.id}>
                            <td>{i + 1}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.desired.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
            <Pie pData={sRoom} />
          </div>
        ) : (
          <h1>
            <FormattedMessage id="Loading" />
          </h1>
        )}
      </div>
    );
  }
}

export default Room;
