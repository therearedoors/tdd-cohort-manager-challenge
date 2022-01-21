class Cohort {
  constructor (name) {
    this.name = name
    this.students = []
  }

  addStudent (student) {
    this.students.push(student)
  }

  removeStudent (student) {
    this.students = this.students.filter(e => e.id !== student.id)
  }
}

module.exports = Cohort
