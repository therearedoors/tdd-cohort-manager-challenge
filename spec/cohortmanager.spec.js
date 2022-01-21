const CohortManager = require("../src/cohortmanager.js")
const Cohort = require("../src/cohort.js")

describe("CohortManager", () => {

    let cohortManager

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
});