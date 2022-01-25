const CohortManager = require("../src/cohortmanager.js")
const Cohort = require("../src/cohort.js")

describe("CohortManager", () => {

    let cohortManager
    const harry = {
        id: 1,
        firstName: "Harry",
        lastName: "Potter",
        githubUserName: "boywholived",
        email: "HarryPotter@hogwarts.edu"
    }
    const harrytwo = {
        id: 2,
        firstName: "Harry",
        lastName: "Potter",
        githubUserName: "boywholived",
        email: "HarryPotter@hogwarts.edu"
    }
    const larry = {
        id: 2,
        firstName: "Larry",
        lastName: "Potter",
        githubUserName: "anotherboywholived",
        email: "LarryPotter@hogwarts.edu"
    }

beforeEach(() => {
    cohortManager = new CohortManager
});

it("can create a new Cohort", () => {
    const expected = [new Cohort("Griffindor")];
    cohortManager.create("Griffindor");
    const result = cohortManager.cohorts;
    expect(result).toEqual(expected);
    });

    it("can find a cohort by name", () => {
        const expected = new Cohort("Griffindor");
        cohortManager.create("Griffindor");
        const result = cohortManager.get("Griffindor");
        expect(result).toEqual(expected);
    });

    it("throws an error if it can't find a cohort with that name", () => {
        const expected = new Error("Cohort not found.")
        cohortManager.create("Griffindor");
        const result = function() {cohortManager.get("Slytherin")};
        expect(result).toThrow(expected);
    });

    it("can remove a cohort from the list", () => {
    const expected = [];
    cohortManager.create("Griffindor");
    cohortManager.remove("Griffindor");
    const result = cohortManager.cohorts
    expect(result).toEqual(expected);
    });

    it("throws an error if it doesn't contain a cohort of that name", () => {
        const expected = new Error("No cohort of this name.");
        const result = function() {cohortManager.remove("Griffindor")};
        expect(result).toThrow(expected);
    });

    it("can find a student by ID", () => {
        const expected = harry;
        cohortManager.create("Griffindor");
        cohortManager.addStudentToCohort(harry, "Griffindor");
        const result = cohortManager.findByID(1);
        expect(result).toEqual(expected);
    });

    it("throws an error if no Cohort name is passed during creation", () => {
        const expected = new Error("Cohort requires a name.");
        const result = function () {cohortManager.create("");}
        expect(result).toThrow(expected);
    });

    it("throws an error when trying to create a cohort with a duplicate name", () => {
        const expected = new Error("Cohort name already in use.");
        cohortManager.create("Griffindor");
        const result = function () {cohortManager.create("Griffindor");}
        expect(result).toThrow(expected);
    });

    it("throws an error when trying to add students with same ID", () => {
        const expected = new Error("Student is already in Griffindor cohort.")
        cohortManager.create("Griffindor");
        cohortManager.create("Slytherin");
        cohortManager.addStudentToCohort(harry,"Griffindor")
        const result = function() {cohortManager.addStudentToCohort(harry, "Slytherin");}
        expect(result).toThrow(expected);
    });

    it ("can search for students by name and return all matches", () => {
        const expectedOne = [harry, larry]
        const expectedTwo = [larry]
        cohortManager.create("Griffindor");
        cohortManager.create("Slytherin");
        cohortManager.addStudentToCohort(harry,"Griffindor");
        cohortManager.addStudentToCohort(larry,"Slytherin");
        const resultOne = cohortManager.getStudentsByName("Potter");
        const resultTwo = cohortManager.getStudentsByName("Larry");
        expect(resultOne).toEqual(expectedOne);
        expect(resultTwo).toEqual(expectedTwo);
    });

});