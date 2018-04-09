// @flow
export const gnomesAPI = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";
export function convertColorsToHex(color: string) {
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

export function filterGnomesBy(array, orderByFilter) {
  if (!Array.isArray(array)) {
    return null;
  }

  if (orderByFilter.toLowerCase() === "Oldest".toLowerCase()) {
    return array.sort((a, b) => b.age - a.age);
  } else if (orderByFilter.toLowerCase() === "Youngest".toLowerCase()) {
    return array.sort((a, b) => a.age - b.age);
  } else if (orderByFilter.toLowerCase() === "Heaviest".toLowerCase()) {
    return array.sort((a, b) => b.weight - a.weight);
  } else if (orderByFilter.toLowerCase() === "lightest".toLowerCase()) {
    return array.sort((a, b) => a.weight - b.weight);
  } else if (orderByFilter.toLowerCase() === "Most Popular".toLowerCase()) {
    return array.sort((a, b) => b.friends.length - a.friends.length);
  } else if (orderByFilter.toLowerCase() === "Less Popular".toLowerCase()) {
    return array.sort((a, b) => a.friends.length - b.friends.length);
  } else if (orderByFilter.toLowerCase() === "Reset".toLowerCase()) {
    return array.sort((a, b) => a.id - b.id);
  } else if (orderByFilter.toLowerCase() === "hair color".toLowerCase()) {
    /* eslint-disable */
    // Temporally while working on this
    alert("WORKING ON IT");
    /* eslint-enable */
  }

  return array;
}

export function setCookie(name, value, exdays) {
  const now = new Date();
  now.setTime(now.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${now.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

// borrowed from w3schools
export function getCookie(cname) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i + 1) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
