

type Product = {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]


export function ProductCategoryRow({ category }: { category: string }) {
  return (
    <>
      <tr>
        <th colSpan={2}>{category}</th>
      </tr>
    </>
  );
}

export function ProductRow({ product }: { product: Product}) {
    const name = product.stocked ? product.name :
    <span style={{ color: "red" }}>
        {product.name}
    </span>

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
}

export function ProductTable({ products }: { products: Product[]}) {
const rows: JSX.Element[] = [];
let lastCategory: string | null = null;

products.forEach((product) => {
    if(product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
    }
    rows.push(<ProductRow product={product} key={product.name} />)
})

return (
<>
    <table>
        <thead>
        <tr>

            <th>Name</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
    </table>
    </>
)

}


export function SearchBar() {
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <label>
                <input type="checkbox" />
                {" "}
                Only show products in stock
            </label>
        </form>
    )
}