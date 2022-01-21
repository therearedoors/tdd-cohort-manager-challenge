class Cohort {
  constructor (name) {
    this.name = name
    this.students = []
  }

  addStudent (student) {
    this.students.push(student)
  }

  removeStudent (student) {
    const updated = this.students.filter(e => e.id !== student.id)
    if (updated.length === this.students.length) {
      throw new Error('Student not in cohort.')
    }
    this.students = updated
  }
}

module.exports = Cohort
