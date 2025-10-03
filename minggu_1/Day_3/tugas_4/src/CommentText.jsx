function CommentText(props) {
  return (
    <div>
      <p>{props.text}</p>
      <small>{props.date}</small>
    </div>
  );
}
export default CommentText;
