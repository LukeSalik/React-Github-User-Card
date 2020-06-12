import React from "react";
import axios from "axios";
import Card from "./Card";

class CardData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      followers: [],
    };
  }

  componentDidMount() {
    // axios calls for user and followers
    axios
      .get("https://api.github.com/users/LukeSalik")
      .then((res) => {
        console.log(res.data);
        this.setState({ user: res.data });
      })
      .catch((err) => console.log(err));

    axios
      .get("https://api.github.com/users/LukeSalik/followers")
      .then((res) => {
        this.setState({ followers: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { login = "", avatar_url = "", location = "" } = this.state.user;
    return (
      <div>
        <div>
          <Card login={login} avatar_url={avatar_url} location={location} />
        </div>
        {this.state.followers.map((follow) => {
          return (
            <Card
              login={follow.login}
              avatar_url={follow.avatar_url}
              location={follow.location}
            />
          );
        })}
      </div>
    );
  }
}

export default CardData;
