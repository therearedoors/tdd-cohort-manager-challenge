// Add your domain model below


The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name /
- Search for a cohort by cohort name /
- Add student to a specific cohort /
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Return errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.


Objects | Properties | Messages | Notes | Scenario | Output | Example
------- | ---------- | -------- | ----- | -------- | ------ | -------
| CohortManager | cohortList @array of class instances | create cohort | | | pushes cohort (class instance) to cohortList | |
| | | findCohortByName | | found | cohort instance | |
| | | | | not found | error | ERROR: "Cohort not found" |
| | | removeCohort | | found | removes cohort from cohortList | |
| | | | | not found | error | ERROR: "No cohort of this name." |
| Cohort | name @string | addStudent | adds an id | | pushes student (object) to studentList | |
| | | removeStudent | | found | removes student from studentList | |
| | | | | not found | error | ERROR: "Student not in cohort" |

5 METHODS, 9 TESTS

- Search for student by student ID
- Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit.
- Cohorts can't have the same name, and can't exist without a name
- The same student can't exist in multiple cohorts.
- A student can't be removed from a cohort if it wasn't present in the first place.
- Search for students by name (first and last) and return all matching results

Your program should be composed of at least two classes

Objects | Properties | Messages | Notes | Scenario | Output | Example
------- | ---------- | -------- | ----- | -------- | ------ | -------
| CohortManager | cohort @class instance | create cohort | | | | |
| | capacity | findCohortByName | checks for name | found | cohort instance | |
| | | | | not found | error | ERROR: "Cohort not found" |
| | | | | name already used | error | ERROR: "Cohort name already in use." |
| Cohort | name @string | searchByName | | | | |
| | student list @arr | addStudent | can't add past capacity | found | | |
| | | | | not found | error | ERROR: "Student not found"
| | | | | student already in another cohort | error | ERROR: `Student is in Cohort ${name}`
| | | removeStudent | | found | | | |
| | | | | not found in Cohort | error | ERROR: "Student not in cohort" |
| | | findStudentById | | | student object | |
| | | findStudentByFirstName | | student(s) found | array of students | |
| | | | | not found | error | ERROR: "No students found." |
| | | findStudentByLastName | | student(s) found | array of students | |
| | | | | not found | error | ERROR: "No students found." |
| Students JSON | id @number | | | | | |
