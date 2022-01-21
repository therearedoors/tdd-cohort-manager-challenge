const Cohort = require("../src/cohort.js")

describe("Cohort", () => {

    let cohort
    const harry = {
        id: 1,
        firstName: "Harry",
        lastName: "Potter",
        githubUserName: "boywholived",
        email: "HarryPotter@hogwarts.edu"
    }

    beforeEach(() => {
        cohort = new Cohort

    });
    
    it("can add a new student to the cohort", () => {

        const expected = [harry];
        cohort.addStudent(harry);
        const result = cohort.students;
        expect(result).toEqual(expected);
    });

    it("can remove a student from the cohort", () => {
        const expected = []
        cohort.addStudent(harry);
        cohort.removeStudent(harry);
        const result = cohort.students;
        expect(result).toEqual(expected);
    })

    it("throws an error if the student isn't in the cohort", () => {
        const expected = new Error("Student not in cohort.")
        
        const result = function() {cohort.removeStudent(harry)};
        expect(result).toThrow(expected);
    })

});