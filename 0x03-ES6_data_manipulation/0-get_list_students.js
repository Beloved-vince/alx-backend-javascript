/**
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students
* @author Beloved
* @returns
*/
export default function getListStudentIds(students) {
 if (students instanceof Array) {
   return students.map((student) => student.id);
 }
 return [];
}