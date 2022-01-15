# Cohort Manager

```
___|       |                |     \  |                                   ___ \   _ \___ \ ___ \  
|      _ \  __ \   _ \   __| __|  |\/ |  _` | __ \   _` |  _` |  _ \  __|    ) | |   |  ) |   ) |
|     (   | | | | (   | |    |    |   | (   | |   | (   | (   |  __/ |      __/  |   | __/   __/  
\____|\___/ _| |_|\___/ _|   \__| _|  _|\__,_|_|  _|\__,_|\__, |\___|_|    _____|\___/_____|_____|
                                                        |___/                                    
```

### Setup

1. Fork this repository to your GitHub account
2. Clone your forked repository to your machine
3. Change directory into the project.
4. Install the project dependencies

```sh
$ npm ci
```

### Description

You should be able to run this in your JS console (using your node REPL, or browser console). For any assumptions made, represent this in your domain model.

**NB** This is a TDD challenge - evidence your work by committing for each passing test and its source code.

### Acceptance Criteria

#### Standard
```
The Cohort Manager should be able to support the following interactions

- Search for cohort by cohort name
- Search for student by student ID
- Create a cohort with a cohort name
- Remove a Cohort by cohort name
- Add student to a specific cohort
- Remove student from a specific cohort
- Return errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.
```

#### Extended
```
- Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit.
- Cohorts can't have the same name, and can't exist without a name
- The same student can't exist in multiple cohorts.
- A student can't be removed from a cohort if it wasn't present in the first place.
- Search for students by name (first and last) and return all matching results

Your program should be composed of at least two classes
```

#### Bonus
```
- Send a text message to yourself whenever a student is successfully added or removed to a cohort
Use: https://www.twilio.com/docs/sms/quickstart/node
```


### Tests
You can run all the test manually whenever you want:
```sh
$ npm test
```

This will run two sets of tests.

### Linter Tests
Using `npm test` will first run a set of tests that make sure your code satisfies specific stylistic rules - make sure you resolve these problems as you go.

You can also run the linter manually whenever you want and autocorrect where it's possible:
```sh
npx eslint src --fix
```

### Functional Tests
The second set of tests that will run are functional. They test the behaviour of the programs you write.

You can also run the tests manually whenever you want
```sh
npx jasmine # run all the tests
# or
npx jasmine spec/path/to/specfile # run a set of tests in a spec file
```
