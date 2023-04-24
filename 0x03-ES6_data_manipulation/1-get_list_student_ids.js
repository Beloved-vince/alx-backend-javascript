/**
 * This function retrieve list from a specific location.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - what to retrieve
* @param {String} city - Location to retrieve.
* @author Beloved-Vince
* @returns
*/
export default function getStudentsByLocation(students, city) {
 if (students instanceof Array) {
   return students.filter((student) => student.location === city);
 }
 return [];
}