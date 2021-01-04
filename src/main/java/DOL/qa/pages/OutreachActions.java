package DOL.qa.pages;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import DOL.qa.util.DOLTestBaseClass;

public class OutreachActions extends DOLTestBaseClass{
	//Page Factory - OR;
	//CreateNewEventButton
	@FindBy(xpath="/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/button[1]")
	static
	WebElement CreateNewEventButton;
	
	//EventTitle
	@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/input[1]")
	static
	WebElement EventTitleField;
	
	//EventTypeField
	@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]")
	static
	WebElement EventType;
	
	//PrimaryAudienceField
	@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]")
	static
	WebElement PrimaryAudience;
	
	//SecondaryAudienceField
	@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/span[1]/span[1]")
	static
	WebElement SecondaryAudience;
	
	//ProgramArea
	@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]")
	static
	WebElement ProgramArea;
	
	//PrimarySubject
	@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]")
	static
	WebElement PrimarySubject;
	
	//SecondarySubject
	@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]")
	static
	WebElement SecondarySubject;
	
	//SaveButton
	@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]")
	static
	WebElement SaveButton;
	//SaveandContinueButton
	@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/button[1]")
	static
	WebElement SaveandContinueButton;
public OutreachActions() {
	PageFactory.initElements(driver, this);
}
	public static void ClickEventButton () throws InterruptedException, IOException{
		try {
	Thread.sleep(4000);
	CreateNewEventButton.click();
	Thread.sleep(2000);
	///Set the Date
			SimpleDateFormat formatdate = new SimpleDateFormat("MM-dd-yyyy HH.mm.ss");
			Date systemDate = new Date();
			String date = formatdate.format(systemDate);
	
	TakesScreenshot ScreenshotCreateNewEvent = (TakesScreenshot)driver;
	java.io.File source3 = ScreenshotCreateNewEvent.getScreenshotAs(OutputType.FILE);
	FileHandler.copy(source3, new File("C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\OutreachActions screenshots\\AfterClickingCreateEventButton"+date+".jpg"));
	Thread.sleep(2000);
		} catch(IOException e) {
			e.getMessage();	
			SimpleDateFormat formatdate = new SimpleDateFormat("MM-dd-yyyy HH.mm.ss");
			Date systemDate = new Date();
			String date = formatdate.format(systemDate);
			TakesScreenshot ScreenshotCreateNewEventError = (TakesScreenshot)driver;
			java.io.File source5 = ScreenshotCreateNewEventError.getScreenshotAs(OutputType.FILE);
			FileHandler.copy(source5, new File("C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\OutreachActions screenshots\\AfterClickingCreateEventButtonErrorScreen"+date+".jpg"));
			Thread.sleep(2000);
	}
}
		
	public static void EnterEventDetails(String EventTitle) throws InterruptedException, IOException {
	try {
		Thread.sleep(2000);
	EventTitleField.sendKeys(EventTitle);
	
	//Dropdown #1
	EventType.click();
	Actions act = new Actions(driver);
	act.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ENTER).perform();
	Thread.sleep(2000);
	//Dropdown #2
	
	PrimaryAudience.click();
	Actions act2 = new Actions(driver);
	act2.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ENTER).perform();
	//Dropdown #3
	Thread.sleep(2000);
	PrimaryAudience.click();
	Actions act3 = new Actions(driver);
	act3.sendKeys(Keys.TAB).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ENTER).perform();
	
	//Dropdown #4
	Thread.sleep(2000);
	ProgramArea.click();
	Actions act4 = new Actions(driver);
	act4.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ENTER).perform();
	Thread.sleep(2000);
	//Dropdown #5
	PrimarySubject.click();
	Actions act5 = new Actions(driver);
	act5.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ENTER).perform();
		
	//Dropdown #6
	Thread.sleep(2000);
	PrimarySubject.click();
	Actions act6 = new Actions(driver);
	act6.sendKeys(Keys.TAB).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ENTER).perform();
	
	SaveButton.click();
		//Take Screenshot
		
		Thread.sleep(4000);
		///Set the Date
		SimpleDateFormat formatdate = new SimpleDateFormat("MM-dd-yyyy HH.mm.ss");
		Date systemDate = new Date();
		String date = formatdate.format(systemDate);
		
		TakesScreenshot ScreenshotEventsDetails = (TakesScreenshot)driver;
		java.io.File source4 = ScreenshotEventsDetails.getScreenshotAs(OutputType.FILE);
		FileHandler.copy(source4, new File("C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\OutreachActions screenshots\\AfterFillingofEventsDetailsSection(CreateEventForm)"+date+".jpg"));
		
		//SaveButton gets Clicked on the Events Detail Section
		//SaveandContinueButton.click();
		Thread.sleep(4000);
	} catch(IOException e) {
		e.getMessage();	
		SimpleDateFormat formatdate = new SimpleDateFormat("MM-dd-yyyy HH.mm.ss");
		Date systemDate = new Date();
		String date = formatdate.format(systemDate);
		TakesScreenshot ScreenshotEventsDetailsError = (TakesScreenshot)driver;
		java.io.File source6 = ScreenshotEventsDetailsError.getScreenshotAs(OutputType.FILE);
		FileHandler.copy(source6, new File("C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\OutreachActions screenshots\\AfterFillingofEventsDetailsSection(CreateEventForm)ErrorScreen"+date+".jpg"));
}
}
	
	}
	


