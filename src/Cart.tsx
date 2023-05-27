export default function cart({ items }:any) {
  console.log(items, "cart");
  return (
    <>
      <h4
        style={{
          position: "absolute",
          right: "5%",
          top: "5%"
        }}
      >
        Cart: {items.length}
      </h4>
      {items.map((info:any) => (
        <p>{info.name}</p>
      ))}
    </>
  );
}
