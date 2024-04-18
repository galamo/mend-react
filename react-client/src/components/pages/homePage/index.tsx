import React, { useState, useTransition, useDeferredValue } from "react";
import tinycolor from "tinycolor2";

export default function Home() {
  const [showTransition, setShowTransition] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setShowTransition(!showTransition);
        }}
      >
        Toggle Examples
      </button>
      {showTransition ? <ShowUseTransition /> : <ShowUseDefferedValue />}
    </>
  );
}

function ShowUseTransition() {
  return (
    <>
      <h1>ShowUseTransition</h1>
      <ProductList />
    </>
  );
}
function ShowUseDefferedValue() {
  return (
    <>
      <h1>ShowUseDefferedValue</h1>;
      <ColorSelector />
    </>
  );
}

const products = Array.from({ length: 30000 }, (_, index) => ({
  id: index + 1,
  name: `Product ${Math.floor(Math.random() * 50000) + 1}`,
  price: Math.floor(Math.random() * 10000) + 1,
}));

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSearchChange = (e) => {
    startTransition(() => {
      setSearchTerm(e.target.value);
    });
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        onChange={handleSearchChange}
        placeholder="Search by name"
        style={{ left: "45%", top: "10px", position: "relative" }}
        // value={searchTerm}
      />
      {isPending && <span> Still updating the products.. </span>}
      <ul
        style={{
          listStyleType: "none",
          position: "relative",
          marginTop: "100px",
        }}
      >
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            style={{
              marginBottom: "5px",
              backgroundColor: "#f5f5f5",
              padding: "10px",
            }}
          >
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ColorBox = React.memo(function ColorBox(props) {
  const { start, spin, onClick, id } = props;
  const color = tinycolor(start).spin(spin).toString();

  return (
    <div
      onClick={onClick}
      data-id={id}
      style={{
        width: "50px",
        height: "50px",
        background: color,

        display: "inline-block",
        margin: "5px",
      }}
    >
      {id}
    </div>
  );
});

function ColorPalette(props) {
  const { start } = props;

  const colors = [];
  for (let i = -360; i < 360; i++) {
    colors.push(<ColorBox start={start} spin={i} id={i} />);
  }
  return colors;
}

export function ColorSelector() {
  const [ticks, setTicks] = useState(0);
  const [color, setColor] = useState("#000000");
  const dcolor = useDeferredValue(color);

  return (
    <div>
      <button onClick={() => setTicks((v) => v + 1)}>
        Click Me ... {ticks}
      </button>
      <div>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <ColorPalette start={dcolor} />
    </div>
  );
}
