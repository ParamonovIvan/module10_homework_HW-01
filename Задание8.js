let vegetable = new Map([
  ["potato", "brown"],
  ["carrot", "orange"],
  ["tomato", "red"],
  ["peas", "green"],
]);
for (let [key, value] of vegetable) {
  console.log(`Ключ - ${key}, значение - ${value}`);
}
