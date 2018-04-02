// @flow
function convertColorsToHex(color: string) {
  const colorName = color.toLowerCase();
  let hexColor: "";
  switch (colorName) {
    case "red":
      hexColor = "#d63031";
      break;
    case "pink":
      hexColor = "#fd79a8";
      break;
    case "green":
      hexColor = "#00b894";
      break;
    case "black":
      hexColor = "#2d3436";
      break;
    case "gray":
      hexColor = "#636e72";
      break;
    default:
      hexColor = "#000";
      break;
  }
  return hexColor;
}

export default convertColorsToHex;
