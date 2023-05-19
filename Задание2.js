let x = 1
let result;
switch (typeof x) {
  case "number":
    result = "x - число";
    break;
  case "string":
    result = "x - строка";
    break;
  case "boolean":
    result = "x - логический тип";
    break;
  default:
    result = "Тип x не определен";
}
console.log(result);