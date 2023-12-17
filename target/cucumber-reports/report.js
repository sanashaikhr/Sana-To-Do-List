$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SanaToDoListScenarios.feature");
formatter.feature({
  "line": 2,
  "name": "Test lightweight to-do list webapp Functionality.",
  "description": "",
  "id": "test-lightweight-to-do-list-webapp-functionality.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ToDoListTest"
    }
  ]
});
formatter.scenario({
  "line": 70,
  "name": "Verify that when user try to add a task with leading spaces then application should add the task by removing all leading and trailing spaces",
  "description": "",
  "id": "test-lightweight-to-do-list-webapp-functionality.;verify-that-when-user-try-to-add-a-task-with-leading-spaces-then-application-should-add-the-task-by-removing-all-leading-and-trailing-spaces",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 69,
      "name": "@leadingspaces"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "User launch given lightweight to-do list webapp",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "Verify the webapp home page",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User add a \"      task_1    \" to todo list",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User should be able to add the task by removing leading and traling spaces",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_launch_given_lightweight_to_do_list_webapp()"
});
formatter.result({
  "duration": 7871965600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.verify_the_webapp_home_page()"
});
formatter.result({
  "duration": 30590500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "      task_1    ",
      "offset": 12
    }
  ],
  "location": "stepDefinitions.user_add_a_to_todo_list(String)"
});
formatter.result({
  "duration": 5373023700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_be_able_to_add_the_task_by_removing_leading_and_traling_spaces()"
});
formatter.result({
  "duration": 871829400,
  "status": "passed"
});
});