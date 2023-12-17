package pageobject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;



public class TodolistHomePage {
	//private static final String ItemName = null;
	private WebDriver driver;
	
	public static String url;
	
	@FindBy(linkText ="todos")
	private WebElement todosElement;
	
	@FindBy(xpath = "//input[contains(@class,'todo')]")
	private WebElement todosListTextBox;
	
	@FindBy(xpath = "//label[contains(text(),'1')]")
	private WebElement listItem;
	
	@FindBy(xpath = "//button[@class='destroy']")
	private WebElement destroyitem1;
	
	@FindBy(xpath = "//input[@class='toggle']")
	private WebElement markscomplete;
	
	@FindBy(xpath = "//button[@class='clear-completed']")
	private WebElement clearcompletes;
	
	@FindBy(xpath = "//*[@class='todo-list']//label")
	private WebElement taskedit;
	
	
	public TodolistHomePage(WebDriver driver) {
		this.driver = driver;
		driver.manage().window().maximize();
		PageFactory.initElements(driver, this);
	
	}

	public boolean isLaunched() {
		return driver.getTitle().toString().contains("TodoMVC");
	}
	
	public void clikOnLinkOntdekdecollective() {
		todosElement.click();
	}

	public void setItemName(String ItemName) {
		todosListTextBox.click();
		todosListTextBox.sendKeys(ItemName);
		todosListTextBox.sendKeys(Keys.ENTER);
	}
	
	public void addblanktask() throws InterruptedException {
		todosListTextBox.click();
		todosListTextBox.sendKeys(Keys.SPACE);
		todosListTextBox.sendKeys(Keys.ENTER);
		Thread.sleep(4000);
	}
	
	public void addThreeTask() {
		todosListTextBox.click();
		todosListTextBox.sendKeys("Task 1");
		todosListTextBox.sendKeys(Keys.ENTER);
		todosListTextBox.click();
		todosListTextBox.sendKeys("Task 2");
		todosListTextBox.sendKeys(Keys.ENTER);
		todosListTextBox.click();
		todosListTextBox.sendKeys("Task 3");
		todosListTextBox.sendKeys(Keys.ENTER);
	}
	
	public boolean verifyListItem(String ItemName) {
		boolean flag;
		if(driver.findElement(By.xpath("//label[contains(text(),'"+ItemName+"')]")).isDisplayed()) {
			flag=true;
			System.out.println(driver.findElement(By.xpath("//label[contains(text(),'"+ItemName+"')]")).getText());
		}
		else flag = false;
		return flag;
	}
	
	public void completesTask1() throws InterruptedException {
		Thread.sleep(3000);
		
		WebElement completesTask = driver.findElement(By.xpath("//button[@class='destroy']"));     
		String javascript = "arguments[0].click()";      
		JavascriptExecutor jsExecutor = (JavascriptExecutor) driver;        
		jsExecutor.executeScript(javascript, completesTask);
		
		//destroyitem1.click();
		Thread.sleep(3000);
	}
	
	public void unCheckcompletesTask1() throws InterruptedException {
		Thread.sleep(3000);
		
		WebElement completesTask = driver.findElement(By.xpath("//button[@class='destroy']"));     
		String javascript = "arguments[0].click()";      
		JavascriptExecutor jsExecutor = (JavascriptExecutor) driver;        
		jsExecutor.executeScript(javascript, completesTask);
		
		//destroyitem1.click();
		Thread.sleep(3000);
	}
	
	public void markscomplete() throws InterruptedException {
		Thread.sleep(3000);
		markscomplete.click();
		Thread.sleep(3000);
	}
	
	public void clearcomplete() throws InterruptedException {
		Thread.sleep(3000);
		clearcompletes.click();
		Thread.sleep(3000);
	}
	
	public void taskedit() throws InterruptedException {
		Thread.sleep(3000);
		Actions actions = new Actions(driver);
		actions.doubleClick(taskedit).perform();
		
		Thread.sleep(3000);
//		actions.click(taskedit).perform();;
//		
//		taskedit.clear();
//		taskedit.sendKeys(Keys.SPACE);
//		taskedit.sendKeys(Keys.ENTER);
	}
	
	public boolean verifypendingitem() {
		boolean flag;
		if(driver.findElement(By.xpath("//footer//strong")).getText().equals("2")) {
			flag=true;
			System.out.println(driver.findElement(By.xpath("//footer//strong")).getText());
		}
		else flag = false;
		return flag;
	}
	
	public boolean verifypendingitemafteruncheck() {
		boolean flag;
		if(driver.findElement(By.xpath("//footer//strong")).getText().equals("3")) {
			flag=true;
			System.out.println(driver.findElement(By.xpath("//footer//strong")).getText());
		}
		else flag = false;
		return flag;
	}
	
	public boolean verifyifblanktaskisnotadded() {
		
		try {
			
			return driver.findElement(By.xpath("//*[@class='todo-list']")).isDisplayed();
			
		}catch(Exception e) {
			
			return true;
		}
		
		
	}
	
	public String verifyitem() {
		
		return driver.findElement(By.xpath("//label")).getText();
	}
	
}
