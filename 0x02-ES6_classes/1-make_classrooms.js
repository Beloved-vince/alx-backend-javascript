import ClassRoom from './0-classroom';

/**
 *  return an array of 3 ClassRoom objects with the sizes 19, 20, and 34
 *{@link ClassRoom}
 * @returns An array of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}