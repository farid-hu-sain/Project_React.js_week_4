import CommentText from "./CommentText.jsx";
import UserInfo from "./UserInfo.jsx";

function Commentt(props) {
  return (
    <div>
      <UserInfo user={props.user} />
      <CommentText text={props.text} date={props.date} />
    </div>
  );
}
export default Commentt;
