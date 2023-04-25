/**
 * Checks if a set contains each element in an array.
 * @param {Set} set - UNique items.
 * @param {*} array - The array of items.
 * @author Beloved-Vince
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
    return array.every((value) => set.has(value));
  }