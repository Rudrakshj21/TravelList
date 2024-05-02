export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding some items...</em>
      </p>
    );
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = +((numPackedItems / numItems) * 100).toFixed(0);
  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          💼You have {numItems} items list , and you already packed{" "}
          {numPackedItems} ({percentage} %)
        </em>
      ) : (
        <em>You got everything! Ready to go ✈️</em>
      )}
    </footer>
  );
}
