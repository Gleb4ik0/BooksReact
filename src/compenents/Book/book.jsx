import "./book.css";
export default function Book(props) {
  const { name, discripsen, img } = props;
  return (
    <main className="book">
      <img src={img} />
      <h3>{name}</h3>
      <p>{discripsen}</p>
    </main>
  );
}
