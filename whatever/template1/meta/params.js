
// The very important parameter that is the project name reversed
function computed_parameters(m) {
  var name = m["name"];
  var reversed = name.split("").reverse().join("");
  return { reversed_name: reversed };
}
