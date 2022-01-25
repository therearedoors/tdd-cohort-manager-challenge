class Cohort {
  constructor (name) {
    this.name = name
    this.students = []
    this.capacity = 24
  }

  addStudent (student, ID) {
    if (this.students.length === this.capacity) {
      throw new Error('Cohort is full.')
    }
    student.id = ID
    this.students.push(student)
  }

  removeStudent (ID) {
    const updated = this.students.filter(e => e.id !== ID)
    if (updated.length === this.students.length) {
      throw new Error('Student not in cohort.')
    }
    this.students = updated
  }

  findStudentByID (ID) {
    return this.students.find(student => student.id === ID)
  }

  getStudentsByName (name) {
    return this.students.filter(student => student.firstName === name || student.lastName === name)
  }
}

module.exports = Cohort
