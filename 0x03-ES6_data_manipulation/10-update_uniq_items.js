/**
 *  a function named updateUniqueItems that 
 * returns an updated map for all items with initial quantity at 1.
 * It should accept a map as an argument. The map it accepts for argument is similar 
 * to the map you create in the previous task.
 * @param {Map<String, number>} map 
 * @author Beloved-Vince
 */
export default function updateUniqueItems(map) {
    if (!(map instanceof Map)) {
      throw new Error('Cannot process');
    }
    map.forEach((value, key) => {
      if (value === 1) {
        map.set(key, 100);
      }
    });
  }