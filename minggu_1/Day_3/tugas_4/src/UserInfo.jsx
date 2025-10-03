import Avatar from "./avatar.jsx";

function UserInfo(props) {
  return (
    <div>
      <Avatar user={props.user} />
      <p>{props.user.name}</p>
    </div>
  );
}
export default UserInfo;
