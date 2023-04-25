/**
 * WEAK MAP OF API CALLS MADE
 */
export const weakMap = new WeakMap();

/**
 * END POINT MAX NUMBER
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * 
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - 
 * @author Beloved-Vince
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}