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
    const ron = {
        firstName: "Ron",
        lastName: "Weasley",
        githubUserName: "percyweasley",
        email: "RonWeasley@hogwarts.edu"
    }


    beforeEach(() => {
        cohort = new Cohort

    });
    
    it("can add a new student to the cohort", () => {

        const expected = [harry];
        cohort.addStudent(harry,1);
        const result = cohort.students;
        expect(result).toEqual(expected);
    });

    it("can remove a student from the cohort by ID", () => {
        const expected = []
        cohort.addStudent(harry,1);
        cohort.removeStudent(1);
        const result = cohort.students;
        expect(result).toEqual(expected);
    })

    it("throws an error if the student isn't in the cohort", () => {
        const expected = new Error("Student not in cohort.")
        const result = function() {cohort.removeStudent(harry)};
        expect(result).toThrow(expected);
    });

    it("gives each student an ID", () => {
        const expected = 2;
        cohort.addStudent(harry,1);
        cohort.addStudent(ron,2);
        const result = cohort.students[1]['id']
        expect(result).toEqual(expected);
    });

    it("throws an error when trying to add a student beyond capacity", () => {
        const expected = new Error("Cohort is full.");
        for (let i = 1; i<=24; i++){
            cohort.addStudent(harry,i);
        }
        const result = function () {cohort.addStudent(harry,25);}
        expect(result).toThrow(expected);
    });
});