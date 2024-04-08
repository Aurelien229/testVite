import { Input } from "./components/forms/input.jsx";
import { Checkbox } from "./components/forms/checkbox.jsx";
import { ProductRow } from "./components/products/productRow.jsx";
import { ProductCategoryRow } from "./components/products/productCategoryRow.jsx";
import { useState } from "react";


const PRODUCTS = [
  { category: "Fruits", price: "1€", stocked: true, name: "Apple "},
  { category: "Fruits", price: "1€", stocked: true, name: "Dragonfruit "},
  { category: "Fruits", price: "2€", stocked: false, name: "Passionfruit "},
  { category: "Vegetables", price: "2€", stocked: true, name: "Spinach "},
  { category: "Vegetables", price: "4€", stocked: false, name: "Pumpkin "},
  { category: "Vegetables", price: "1€", stocked: true, name: "Peas "}
];

function App() {

  const [showStockedOnly, SetShowStockedOnly] = useState(false)
  const [search, SetSearch] = useState("")

  const visibleProducts = PRODUCTS.filter(product => {
      if (showStockedOnly && !product.stocked) {
        return false
      }

      if (search && !product.name.includes(search)) {
        return false
      }

      return true
  })
  return (
    <div className="container mx-auto my-3">
      <SearchBar
      search={search}
      onSearchChange={SetSearch}

      showStockedOnly={showStockedOnly} 
      onStockedOnlyChange={SetShowStockedOnly}
      />
      <ProductTable products={visibleProducts} />
    </div>
  );
}

function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange}) {
  return (
    <div>
      <Input
        value={search}
        onChange={onSearchChange}
        placeholder="Rechercher..."

      />
      <Checkbox
        id="stocked"
        checked={showStockedOnly}
        onChange={onStockedOnlyChange}
        label="Produits en stock"

      />
    </div>
  );
}

function ProductTable({ products }) {

  const rows = []
  let lastCategory = null

  for (let product of products) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow key={product.category} name={product.category}/>)
      }
      lastCategory = product.category
      rows.push(<ProductRow product={product} key={product.name}/>)
  }
  return (
    <table className="w-full bg-white border border-gray-200 divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Nom</th>
          <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Prix</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-blue-200">
  {rows.map((row, index) => {
    if (row.type === ProductRow) {
      const style = row.props.product.stocked ? undefined : { color: "red" };

      return (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap" style={style}>{row.props.product.name}</td>
          <td className="px-6 py-4 whitespace-nowrap">{row.props.product.price}</td>
        </tr>
      );
    } else if (row.type === ProductCategoryRow) {
      return (
        <tr key={index}>
          <td colSpan="2" className="bg-blue-50 px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase">{row.props.name}</td>
        </tr>
      );
    }
    return null;
  })}
</tbody>

    </table>
  );
  
  
  
  
}

export default App;
