$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SanaToDoListScenarios.feature");
formatter.feature({
  "line": 3,
  "name": "Test lightweight to-do list webapp Functionality.",
  "description": "",
  "id": "test-lightweight-to-do-list-webapp-functionality.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@ToDoListTest"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "01. Verify that user is able to launch To do list application successfully",
  "description": "",
  "id": "test-lightweight-to-do-list-webapp-functionality.;01.-verify-that-user-is-able-to-launch-to-do-list-application-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@VerifyToDoListPage"
    },
    {
      "line": 5,
      "name": "@Priority1"
    },
    {
      "line": 5,
      "name": "@SmokeTest"
    },
    {
      "line": 5,
      "name": "@PositiveScenario"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User launch given lightweight to-do list webapp",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Verify the webapp home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_launch_given_lightweight_to_do_list_webapp()"
});
formatter.result({
  "duration": 8151096700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.verify_the_webapp_home_page()"
});
formatter.result({
  "duration": 17293100,
  "status": "passed"
});
formatter.after({
  "duration": 121239700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "02. Verify that user is able to add a task successfully",
  "description": "",
  "id": "test-lightweight-to-do-list-webapp-functionality.;02.-verify-that-user-is-able-to-add-a-task-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@AddItem"
    },
    {
      "line": 11,
      "name": "@PositiveScenario"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User launch given lightweight to-do list webapp",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Verify the webapp home page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User add a \"\u003cItemName\u003e\" to todo list",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify the \"\u003cItemName\u003e\" is successfully added to todo list",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "test-lightweight-to-do-list-webapp-functionality.;02.-verify-that-user-is-able-to-add-a-task-successfully;",
  "rows": [
    {
      "cells": [
        "ItemName"
      ],
      "line": 19,
      "id": "test-lightweight-to-do-list-webapp-functionality.;02.-verify-that-user-is-able-to-add-a-task-successfully;;1"
    },
    {
      "cells": [
        "item_1"
      ],
      "line": 20,
      "id": "test-lightweight-to-do-list-webapp-functionality.;02.-verify-that-user-is-able-to-add-a-task-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "02. Verify that user is able to add a task successfully",
  "description": "",
  "id": "test-lightweight-to-do-list-webapp-functionality.;02.-verify-that-user-is-able-to-add-a-task-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@ToDoListTest"
    },
    {
      "line": 11,
      "name": "@AddItem"
    },
    {
      "line": 11,
      "name": "@PositiveScenario"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User launch given lightweight to-do list webapp",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Verify the webapp home page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User add a \"item_1\" to todo list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify the \"item_1\" is successfully added to todo list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.user_launch_given_lightweight_to_do_list_webapp()"
});
formatter.result({
  "duration": 6527284900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.verify_the_webapp_home_page()"
});
formatter.result({
  "duration": 15402200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "item_1",
      "offset": 12
    }
  ],
  "location": "stepDefinitions.user_add_a_to_todo_list(String)"
});
formatter.result({
  "duration": 5321720500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "item_1",
      "offset": 12
    }
  ],
  "location": "stepDefinitions.verify_the_is_successfully_added_to_todo_list(String)"
});
formatter.result({
  "duration": 125264600,
  "status": "passed"
});
formatter.after({
  "duration": 175439400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "03. Verify that user is able to close a task by pressing X button",
  "description": "",
  "id": "test-lightweight-to-do-list-webapp-functionality.;03.-verify-that-user-is-able-to-close-a-task-by-pressing-x-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@CloseTask"
    },
    {
      "line": 22,
      "name": "@PositiveScenario"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User launch given lightweight to-do list webapp",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Verify the webapp home page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User add three tasks to todo list",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User closes one task",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the total count of incomplete tasks should be two",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_launch_given_lightweight_to_do_list_webapp()"
});
formatter.result({
  "duration": 6595717200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.verify_the_webapp_home_page()"
});
formatter.result({
  "duration": 16493100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_add_three_tasks_to_todo_list()"
});
formatter.result({
  "duration": 626364000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_closes_one_task()"
});
formatter.result({
  "duration": 6092620500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.the_total_count_of_incomplete_tasks_should_be_two()"
});
formatter.result({
  "duration": 121845600,
  "status": "passed"
});
formatter.after({
  "duration": 174873300,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "04. Verify that user is able to mark or un mark a task a completed",
  "description": "",
  "id": "test-lightweight-to-do-list-webapp-functionality.;04.-verify-that-user-is-able-to-mark-or-un-mark-a-task-a-completed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@markedcompleted"
    },
    {
      "line": 30,
      "name": "@PositiveScenario"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User launch given lightweight to-do list webapp",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Verify the webapp home page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User add three tasks to todo list",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User markes one task",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the total count of incomplete tasks should be two",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User un markes one task",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "the total count of incomplete tasks should be three",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_launch_given_lightweight_to_do_list_webapp()"
});
formatter.result({
  "duration": 6594590200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.verify_the_webapp_home_page()"
});
formatter.result({
  "duration": 15920500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_add_three_tasks_to_todo_list()"
});
formatter.result({
  "duration": 658065900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_markes_one_task()"
});
formatter.result({
  "duration": 6143461200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.the_total_count_of_incomplete_tasks_should_be_two()"
});
formatter.result({
  "duration": 120417300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_un_markes_one_task()"
});
formatter.result({
  "duration": 6109065300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.the_total_count_of_incomplete_tasks_should_be_three()"
});
formatter.result({
  "duration": 87718400,
  "status": "passed"
});
formatter.after({
  "duration": 194427700,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "05. Verify that User should get an error whern Accessing an invalid URL",
  "description": "",
  "id": "test-lightweight-to-do-list-webapp-functionality.;05.-verify-that-user-should-get-an-error-whern-accessing-an-invalid-url",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@invalidURL"
    },
    {
      "line": 40,
      "name": "@NegativeScenario"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "the user attempts to access an invalid URL like \"https://todomvc.com/examples/angular3/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "the user should be redirected to an error page or a 404 page not found",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://todomvc.com/examples/angular3/",
      "offset": 49
    }
  ],
  "location": "stepDefinitions.the_user_attempts_to_access_an_invalid_URL_like(String)"
});
formatter.result({
  "duration": 1414164300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 52
    }
  ],
  "location": "stepDefinitions.the_user_should_be_redirected_to_an_error_page_or_a_page_not_found(int)"
});
formatter.result({
  "duration": 21358600,
  "status": "passed"
});
formatter.after({
  "duration": 71407400,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "06. Verify that user should not be able to add a empty  task",
  "description": "",
  "id": "test-lightweight-to-do-list-webapp-functionality.;06.-verify-that-user-should-not-be-able-to-add-a-empty--task",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@addingblanktask"
    },
    {
      "line": 45,
      "name": "@NegativeScenario"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "User launch given lightweight to-do list webapp",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "Verify the webapp home page",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User try to add empty task",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user should not be able to add empty task",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_launch_given_lightweight_to_do_list_webapp()"
});
formatter.result({
  "duration": 6657833000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.verify_the_webapp_home_page()"
});
formatter.result({
  "duration": 18730000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_try_to_add_empty_task()"
});
formatter.result({
  "duration": 4246531500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_not_be_able_to_add_empty_task()"
});
formatter.result({
  "duration": 10055539300,
  "status": "passed"
});
formatter.after({
  "duration": 185036000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 53,
  "name": "07. Verify that when user try to edit an existing task with empty value then user should be getting an error message",
  "description": "",
  "id": "test-lightweight-to-do-list-webapp-functionality.;07.-verify-that-when-user-try-to-edit-an-existing-task-with-empty-value-then-user-should-be-getting-an-error-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@editwithemptystring"
    },
    {
      "line": 52,
      "name": "@NegativeScenario"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "User launch given lightweight to-do list webapp",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "Verify the webapp home page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User add a \"\u003ctask\u003e\" to todo list",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User edits the existing task with empty string",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User should be getting an error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "test-lightweight-to-do-list-webapp-functionality.;07.-verify-that-when-user-try-to-edit-an-existing-task-with-empty-value-then-user-should-be-getting-an-error-message;",
  "rows": [
    {
      "cells": [
        "task"
      ],
      "line": 61,
      "id": "test-lightweight-to-do-list-webapp-functionality.;07.-verify-that-when-user-try-to-edit-an-existing-task-with-empty-value-then-user-should-be-getting-an-error-message;;1"
    },
    {
      "cells": [
        "task 1"
      ],
      "line": 62,
      "id": "test-lightweight-to-do-list-webapp-functionality.;07.-verify-that-when-user-try-to-edit-an-existing-task-with-empty-value-then-user-should-be-getting-an-error-message;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 62,
  "name": "07. Verify that when user try to edit an existing task with empty value then user should be getting an error message",
  "description": "",
  "id": "test-lightweight-to-do-list-webapp-functionality.;07.-verify-that-when-user-try-to-edit-an-existing-task-with-empty-value-then-user-should-be-getting-an-error-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@editwithemptystring"
    },
    {
      "line": 2,
      "name": "@ToDoListTest"
    },
    {
      "line": 52,
      "name": "@NegativeScenario"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "User launch given lightweight to-do list webapp",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "Verify the webapp home page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User add a \"task 1\" to todo list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User edits the existing task with empty string",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User should be getting an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_launch_given_lightweight_to_do_list_webapp()"
});
formatter.result({
  "duration": 6607570200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.verify_the_webapp_home_page()"
});
formatter.result({
  "duration": 15787100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "task 1",
      "offset": 12
    }
  ],
  "location": "stepDefinitions.user_add_a_to_todo_list(String)"
});
formatter.result({
  "duration": 5278248400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_edits_the_existing_task_with_empty_string()"
});
formatter.result({
  "duration": 6208693900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_be_getting_an_error_message()"
});
formatter.result({
  "duration": 67000,
  "status": "passed"
});
formatter.after({
  "duration": 180540600,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "08. Verify that when user try to add a task with leading spaces then application should add the task by removing all leading and trailing spaces",
  "description": "",
  "id": "test-lightweight-to-do-list-webapp-functionality.;08.-verify-that-when-user-try-to-add-a-task-with-leading-spaces-then-application-should-add-the-task-by-removing-all-leading-and-trailing-spaces",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 65,
      "name": "@leadingspaces"
    },
    {
      "line": 65,
      "name": "@NegativeScenario"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "User launch given lightweight to-do list webapp",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "Verify the webapp home page",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User add a \"      task_1    \" to todo list",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User should be able to add the task by removing leading and traling spaces",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_launch_given_lightweight_to_do_list_webapp()"
});
formatter.result({
  "duration": 6617798700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.verify_the_webapp_home_page()"
});
formatter.result({
  "duration": 16921400,
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
  "duration": 5291862600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_be_able_to_add_the_task_by_removing_leading_and_traling_spaces()"
});
formatter.result({
  "duration": 78964800,
  "status": "passed"
});
formatter.after({
  "duration": 180623100,
  "status": "passed"
});
});