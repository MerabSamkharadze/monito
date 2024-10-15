import ProductCard from "./ProductCard";

export default function ProductsList() {
  const products = [
    {
      id: "1",
      name: "Reflex Plus Adult Cat Food Salmon",
      product: "Food",
      size: "1.5 kg",
      price: 25,
    },
    {
      id: "2",
      name: "Royal Canin Feline Health Nutrition",
      product: "Food",
      size: "1.5 kg",
      price: 30,
    },
    {
      id: "3",
      name: "Purina Pro Plan Adult Cat Food Chicken",
      product: "Food",
      size: "1.5 kg",
      price: 28,
    },
    {
      id: "4",
      name: "Hill's Science Diet Adult Cat Food",
      product: "Food",
      size: "1.5 kg",
      price: 32,
    },
    {
      id: "5",
      name: "Iams ProActive Health Indoor Cat Food",
      product: "Food",
      size: "1.5 kg",
      price: 26,
    },
    {
      id: "6",
      name: "Blue Buffalo Wilderness Adult Cat Food",
      product: "Food",
      size: "1.5 kg",
      price: 35,
    },
    {
      id: "7",
      name: "Wellness CORE Grain-Free Cat Food",
      product: "Food",
      size: "1.5 kg",
      price: 40,
    },
    {
      id: "8",
      name: "Orijen Cat & Kitten Dry Food",
      product: "Food",
      size: "1.8 kg",
      price: 50,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {products.map((product) => {
        return (
          <ProductCard
            name={product.name}
            sex={product.product}
            age={product.size}
            key={product.id}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
