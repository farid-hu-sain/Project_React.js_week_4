export default function SlowComponent() {
  console.log("Slow Component Render");

  const items = [];
  for (let i = 0; i < 100000; i++) {
    items.push(<li key={i}>{i}</li>);
  }

  return (
    <>
      <p>Komponen Lambat — render 100.000 elemen list</p>
      <ul>{items}</ul>
    </>
  );
}
