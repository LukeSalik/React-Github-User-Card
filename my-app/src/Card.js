import React from "react";
function Card(props) {
  return (
    <div key={props.id}>
      <div>
        <div>{props.login}</div>
        <img src={props.avatar_url} />
        <div>{props.location}</div>
      </div>
    </div>
  );
}
export default Card;
