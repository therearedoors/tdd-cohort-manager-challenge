const Cohort = require("../src/cohort.js")

describe("Cohort", () => {

    let cohort

    beforeEach(() => {
        cohort = new Cohort
    });
    
    it("can add a new student to the cohort", () => {
        const student = {
                id: 1,
                firstName: "Harry",
                lastName: "Potter",
                githubUserName: "boywholived",
                email: "HarryPotter@hogwarts.edu"
            }
        const expected = [student];
        cohort.addStudent(student);
        const result = cohort.students;
        expect(result).toEqual(expected);
    });
});