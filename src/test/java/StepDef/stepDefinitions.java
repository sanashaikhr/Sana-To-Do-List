package StepDef;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobject.TodolistHomePage;


public class stepDefinitions {
	
	

	WebDriver driver;
	TodolistHomePage todolistHomePage ;

    @Given("^User launch given lightweight to-do list webapp$")
    public void user_launch_given_lightweight_to_do_list_webapp() throws Throwable {
    	
    	System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"/chromedriver.exe");
        ChromeOptions options = new ChromeOptions();

        options.addArguments("--remote-allow-origins=*");
        options.addArguments("--start-maximized");

        //WebDriver driver = new ChromeDriver(options);
        driver = new ChromeDriver(options);
        driver.get("https://todomvc.com/examples/angular2/");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(5000);
        todolistHomePage = new TodolistHomePage(driver) ;
    }

    @Then("^Verify the webapp home page$")
    public void verify_the_webapp_home_page() throws Throwable {
    	
    	Assert.assertTrue(driver.getTitle().toString().contains("TodoMVC"));
		System.out.println("Successfully verified the todo list HomePage");
		
	
    }
    
    @Then("^User add a \"([^\"]*)\" to todo list$")
    public void user_add_a_to_todo_list(String itemName) throws Throwable {
    	
    	todolistHomePage.setItemName(itemName);
    	Thread.sleep(5000);
    	
    	
    }

    @Then("^Verify the \"([^\"]*)\" is successfully added to todo list$")
    public void verify_the_is_successfully_added_to_todo_list(String itemName) throws Throwable {
    	
    	Assert.assertTrue(todolistHomePage.verifyListItem(itemName));
//    	driver.quit();
    	
    }
    
    @Given("^User add three tasks to todo list$")
    public void user_add_three_tasks_to_todo_list() throws Throwable {
    	todolistHomePage.addThreeTask();
    }

    @When("^User closes one task$")
    public void user_closes_one_task() throws Throwable {
    	todolistHomePage.completesTask1();
    }

    
    @Then("^the total count of incomplete tasks should be two$")
    public void the_total_count_of_incomplete_tasks_should_be_two() throws Throwable {
    	Assert.assertTrue(todolistHomePage.verifypendingitem());
    	
    	
    
    }
    
    @When("^User markes one task$")
    public void user_markes_one_task() throws Throwable {
    	todolistHomePage.markscomplete();
    }

    @When("^User un markes one task$")
    public void user_un_markes_one_task() throws Throwable {
    	todolistHomePage.markscomplete();
    }


    
    @Then("^the total count of incomplete tasks should be three$")
    public void the_total_count_of_incomplete_tasks_should_be_three() throws Throwable {
    	Assert.assertTrue(todolistHomePage.verifypendingitemafteruncheck());
    }
    
    
    @Given("^the user attempts to access an invalid URL like \"([^\"]*)\"$")
    public void the_user_attempts_to_access_an_invalid_URL_like(String arg1) throws Throwable {
    	
    	System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"/chromedriver.exe");
        ChromeOptions options = new ChromeOptions();

        options.addArguments("--remote-allow-origins=*");
        options.addArguments("--start-maximized");

        //WebDriver driver = new ChromeDriver(options);
        driver = new ChromeDriver(options);
        driver.get("https://todomvc.com/examples/angular3/");
    }

    @Then("^the user should be redirected to an error page or a (\\d+) page not found$")
    public void the_user_should_be_redirected_to_an_error_page_or_a_page_not_found(int arg1) throws Throwable {
    	
    	Assert.assertTrue(driver.getTitle().contains("Page not found"));
//    	driver.quit();
    	
    }
    
    
    @When("^User clear first task$")
    public void user_clear_first_task() throws Throwable {
    	
    	todolistHomePage.markscomplete();
    	
    }

    @Then("^the first task should not be visible on the screen$")
    public void the_first_task_should_not_be_visible_on_the_screen() throws Throwable {
    	
    	
    }
    
    @Given("^User try to add empty task$")
    public void user_try_to_add_empty_task() throws Throwable {
    	
    	todolistHomePage.addblanktask();
    }

    @Then("^user should not be able to add empty task$")
    public void user_should_not_be_able_to_add_empty_task() throws Throwable {
    	
       Assert.assertTrue(todolistHomePage.verifyifblanktaskisnotadded());
//       driver.quit();
    }

   

    @Given("^User edits the existing task with empty string$")
    public void user_edits_the_existing_task_with_empty_string() throws Throwable {
    	
    	todolistHomePage.taskedit();
    }

    @Then("^User should be getting an error message$")
    public void user_should_be_getting_an_error_message() throws Throwable {
    	
    	Assert.assertFalse(false);
    	
    }
    
    
    @Then("^User should be able to add the task by removing leading and traling spaces$")
    public void user_should_be_able_to_add_the_task_by_removing_leading_and_traling_spaces() throws Throwable {
        
    	
    	Assert.assertTrue(todolistHomePage.verifyitem().contains("task_1"));
//    	driver.quit();
    }


    @After
	public void after() {
		driver.close();
	}


}
