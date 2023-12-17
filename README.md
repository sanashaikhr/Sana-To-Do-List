# ToDoListTest - Test Scenario Descriptions

This README provides an overview of the test scenarios covered by the `@ToDoListTest` feature in the lightweight ToDo list web application.

## Positive Scenarios
### Verify that the user is able to launch the ToDo list application successfully
- **Tags:** `@VerifyToDoListPage @Priority1 @SmokeTest`
- **Steps:**
  1. Given User launch given lightweight to-do list webapp
  2. Then Verify the webapp home page

### Verify that the user is able to add a task successfully
- **Tags:** `@AddItem`
- **Scenario Outline:**
  - **Steps:**
    1. Given User launch given lightweight to-do list webapp
    2. When Verify the webapp home page
    3. Then User add a "<ItemName>" to todo list
    4. And Verify the "<ItemName>" is successfully added to todo list
  - **Examples:**
    - | ItemName   |
      | item_1 |

### Verify that the user is able to close a task by pressing the X button
- **Tags:** `@CloseTask`
- **Steps:**
  1. Given User launch given lightweight to-do list webapp
  2. And Verify the webapp home page
  3. And User add three tasks to todo list
  4. When User closes one task
  5. Then the total count of incomplete tasks should be two

### Verify that the user is able to mark or unmark a task as completed
- **Tags:** `@markedcompleted`
- **Steps:**
  1. Given User launch given lightweight to-do list webapp
  2. And Verify the webapp home page
  3. And User add three tasks to todo list
  4. When User marks one task
  5. Then the total count of incomplete tasks should be two
  6. When User unmarks one task
  7. Then the total count of incomplete tasks should be three

## Negative Scenarios

### Verify that the user should get an error when accessing an invalid URL
- **Tags:** `@invalidURL`
- **Steps:**
  1. Given the user attempts to access an invalid URL like "https://todomvc.com/examples/angular3/"
  2. Then the user should be redirected to an error page or a 404 page not found

### Verify that the user should not be able to add an empty task
- **Tags:** `@addingblanktask`
- **Steps:**
  1. Given User launch given lightweight to-do list webapp
  2. And Verify the webapp home page
  3. And User tries to add an empty task
  4. Then the user should not be able to add an empty task

### Verify that the user should get an error message when trying to edit an existing task with an empty value
- **Tags:** `@editwithemptystring`
- **Scenario Outline:**
  - **Steps:**
    1. Given User launch given lightweight to-do list webapp
    2. And Verify the webapp home page
    3. And User add a "<task>" to todo list
    4. And User edits the existing task with an empty string
    5. Then User should be getting an error message
  - **Examples:**
    - | task   |
      | task 1 |

### Verify that the application should add a task with leading spaces by removing all leading and trailing spaces
- **Tags:** `@leadingspaces`
- **Steps:**
  1. Given User launch given lightweight to-do list webapp
  2. And Verify the webapp home page
  3. And User add a "      task_1    " to todo list
  4. Then User should be able to add the task by removing leading and trailing spaces

## Framework Details
The ToDoList automation framework is designed to test the ToDoList web application using BDD (Behavior-Driven Development) with Cucumber, Page Object Pattern, and Page Factory Pattern.

### BDD (Cucumber)
- This framework follows the BDD approach, allowing easy collaboration between stakeholders and developers.
- Feature files express scenarios in natural language using Gherkin syntax.

### Page Object Pattern (POM)
- The Page Object Pattern is implemented to enhance code reusability and maintainability.
- Each web page is represented by a corresponding Page Object, encapsulating the interaction logic.

### Page Factory Pattern (PFP)
- Page Factory is utilized to initialize WebElement elements in the Page Objects, enhancing performance and readability.

### Reporting
- Default HTML reports generated by the Cucumber framework provide comprehensive test execution reports.
- Reports include details about passed and failed scenarios, step definitions, and feature execution times.

## Technology Stack
- **Language:** Java
- **Build Tool:** Maven
- **Automation API:** Selenium WebDriver
- **Browser:** Chrome (Version 120)
- **Chrome Driver:** Must be installed before running the project

## Tags
- The `@ToDoListTest` tag is assigned to all relevant scenarios for easy categorization and execution.

## Setup Instructions
1. **Clone the Repository:**
   ```
   git clone <repository_path>
   ```

2. **Install Chrome Driver:**
   - Download the appropriate ChromeDriver version compatible with Chrome 120.
   - Add the ChromeDriver executable to your system's PATH.

3. **Run the Tests:**
   ```
   mvn clean test
   ```

4. **View Reports:**
   - Open the `target/cucumber-reports/index.html` file in a web browser to view the test execution reports.

## Additional Notes
- Make sure Chrome browser is installed on your machine.
- Ensure that the Chrome browser version matches the ChromeDriver version.

Happy testing!
