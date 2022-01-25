const Cohort = require('./cohort')

class CohortManager {
  constructor (cohorts = []) {
    this.cohorts = cohorts
    this.nextID = 0
  }

  generateID () {
    this.nextID++
    return this.nextID
  }

  create (name) {
    if (!name) {
      throw new Error('Cohort requires a name.')
    }
    if (this.cohorts.find(cohort => cohort.name === name)) {
      throw new Error('Cohort name already in use.')
    }
    this.cohorts.push(new Cohort(name))
  }

  get (name) {
    const cohort = this.cohorts.find(e => e.name === name)
    if (!cohort) {
      throw new Error('Cohort not found.')
    }
    return cohort
  }

  remove (name) {
    const updated = this.cohorts.filter(e => e.name !== name)
    if (updated.length === this.cohorts.length) {
      throw new Error('No cohort of this name.')
    }
    this.cohorts = updated
  }

  addStudentToCohort (student, cohortName) {
    this.cohorts.forEach(cohort => {
      if (cohort.students.includes(student)) {
        throw new Error(`Student is already in ${cohort.name} cohort.`)
      }
    })
    const cohort = this.get(cohortName)
    cohort.addStudent(student, this.generateID())
  }

  findByID (ID) {
    const student = this.cohorts.reduce((target, cohort) => cohort.findStudentByID(ID), undefined)
    if (!student) {
      throw new Error('No student with this ID.')
    }
    return student
  }

  getStudentsByName (name) {
    return this.cohorts.reduce((current, cohort) => [...current, ...cohort.getStudentsByName(name)], [])
  }
}
module.exports = CohortManager
