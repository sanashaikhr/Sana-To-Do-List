@ToDoListTest
Feature: Test lightweight to-do list webapp Functionality.
    
    @VerifyToDoListPage @Priority1 @SmokeTest
	Scenario: 01. Verify that user is able to launch To do list application successfully
    Given User launch given lightweight to-do list webapp
    Then Verify the webapp home page
  	
  	
  	@AddItem 
  	Scenario Outline: 02. Verify that user is able to add a task successfully 
    Given User launch given lightweight to-do list webapp
    When Verify the webapp home page
    Then User add a "<ItemName>" to todo list
    And Verify the "<ItemName>" is successfully added to todo list
    
    Examples:
    | ItemName   |
    | item_1 |
    
    @CloseTask
    Scenario: Verify that user is able to close a task by pressing X button 
    Given User launch given lightweight to-do list webapp
    And Verify the webapp home page
    And User add three tasks to todo list
    When User closes one task 
    Then the total count of incomplete tasks should be two

	@markedcompleted
 	Scenario: Verify that user is able to mark or un mark a task a completed
    Given User launch given lightweight to-do list webapp
    And Verify the webapp home page
    And User add three tasks to todo list
    When User markes one task 
    Then the total count of incomplete tasks should be two
    When User un markes one task 
    Then the total count of incomplete tasks should be three
    




	
	  @invalidURL
  	Scenario: Verify that User should get an error whern Accessing an invalid URL
    Given the user attempts to access an invalid URL like "https://todomvc.com/examples/angular3/"
    Then the user should be redirected to an error page or a 404 page not found
	
	  @addingblanktask
  	Scenario: Verify that user should not be able to add a empty  task 
    Given User launch given lightweight to-do list webapp
    And Verify the webapp home page
    And User try to add empty task
    Then user should not be able to add empty task
    
    @editwithemptystring
    Scenario Outline: Verify that when user try to edit an existing task with empty value then user should be getting an error message
    Given User launch given lightweight to-do list webapp
    And Verify the webapp home page
    And User add a "<task>" to todo list
    And User edits the existing task with empty string
    Then User should be getting an error message 
    
    Examples:
    | task   |
    | task 1 |
    
    
    @leadingspaces
    Scenario: Verify that when user try to add a task with leading spaces then application should add the task by removing all leading and trailing spaces 
    Given User launch given lightweight to-do list webapp
    And Verify the webapp home page
    And User add a "      task_1    " to todo list
    Then User should be able to add the task by removing leading and traling spaces  
    
    
	
  	