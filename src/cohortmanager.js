const Cohort = require('./cohort')

class CohortManager {
  constructor (cohorts = []) {
    this.cohorts = cohorts
  }

  create (name) {
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
}
module.exports = CohortManager
