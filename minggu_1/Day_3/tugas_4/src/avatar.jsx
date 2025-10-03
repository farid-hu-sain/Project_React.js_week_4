function Avatar(props) {
  return (
    <img
      src={props.user.avatarUrl}
      alt={props.user.name}
      style={{ width: "50px", borderRadius: "50%" }}
    />
  );
}
export default Avatar;
