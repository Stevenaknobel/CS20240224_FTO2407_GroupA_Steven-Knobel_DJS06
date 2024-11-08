// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//Basic Tasks

//1. **ForEach Basics**: Use `forEach` to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".
// Log each name
names.forEach(name => {
  console.log(name);
});

// Log each province
provinces.forEach(province => {
  console.log(province);
});

// Log each name with matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

//2. **Uppercase Transformation**: Use `map` to create a new array of province names in all uppercase. Log the new array to the console.
const provincesUppercase = provinces.map(province => province.toUpperCase());
console.log(provincesUppercase);

//3. **Name Lengths**: Create a new array using `map` that contains the length of each name.
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

//4. **Sorting**: Use `sort` to alphabetically sort the provinces. 
const alphabeticalProvinces = [...provinces].sort();
console.log(alphabeticalProvinces);

//5. **Filtering Cape**: Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.
const filterOutCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filterOutCapeProvinces.length);

//6. **Finding 'S'**: Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.
const nameContainsS = names.map(name => name.toLowerCase().includes('s'));
console.log(nameContainsS);

//7. **Creating Object Mapping**: Use `reduce` to transform the names array into an object mapping names to their respective provinces.
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

console.log(nameProvinceMap);

//Advanced Tasks

//1. **Log Products**: Iterate over the products array, logging each product name.
products.forEach(product => console.log(product.product));

//2. **Filter by Name Length**: Filter out products with names longer than 5 characters.
const filteredProductsByLength = products.filter(product => product.product.length <= 5);
console.log(filteredProductsByLength);

//3. **Price Manipulation**: Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.
const totalPrice = products
  .filter(product => String(product.price).trim() !== '' && !isNaN(product.price))
  .map(product => parseFloat(product.price))
  .reduce((total, price) => total + price, 0);

console.log(totalPrice);

//4. **Concatenate Product Names**: Use `reduce` to concatenate all product names into a single string.
const productNames = products.reduce((acc, product) => acc + product.product + ' ', '');
console.log(productNames.trim());

//5. **Find Extremes in Prices**: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
//6. **Object Transformation**: Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values.