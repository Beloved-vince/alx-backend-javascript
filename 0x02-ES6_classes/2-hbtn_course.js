/**
 * Implement a class named HolbertonCourse
 */
export default class HolbertonCourse {
    /**
     * new link @see {@link HolbertonCourse}.
     *
     * @param {String} name - Course name.
     * @param {Number} length - Duration (in months)
     * @param {String[]} students - Students registered for the course.
     */
    constructor(name, length, students) {
      this.name = name;
      this.length = length;
      this.students = students;
    }
  
    /**
     * Return Course name
     */
    get name() {
      return this._name;
    }
  
    /**
     * Set course name
     */
    set name(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = value;
    }
  
    /**
     * return course length
     */
    get length() {
      return this._length;
    }
  
    /**
     * set course length
     */
    set length(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Length must be a number');
      }
      this._length = value;
    }
  
    /**
     * Gets the names of students in this course.
     */
    get students() {
      return this._students;
    }
  
    /**
     * Sets the names of students in this course.
     */
    set students(value) {
      if (!(value instanceof Array)) {
        throw new TypeError('Students must be an array of strings');
      }
      if (!value.every((student) => typeof student === 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
      this._students = value;
    }
  }