package DOLCreateEvent.qa.stepdefinitions;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import DOL.qa.pages.LoginPage;
import DOL.qa.pages.OutreachActions;
import DOL.qa.util.DOLTestBaseClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class CreateEventStepsDuplicate extends DOLTestBaseClass {
	// testing testing testing testing testing testing testing testing

	@FindBy(xpath = "/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/input[1]")
	static WebElement LocationNameField1;

	@FindBy(xpath = "/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/input[1]")
	static WebElement AddressLine1;

	@FindBy(xpath = "/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/input[1]")
	static WebElement City;

	@FindBy(xpath = "/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[6]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/input[1]")
	static WebElement Zip;

	@FindBy(xpath = "/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/input[1]")
	static WebElement PrimaryPhone1;

	@FindBy(xpath = "/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/input[1]")
	static WebElement Email;

	@FindBy(xpath = "/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/input[1]")
	static WebElement Website;

	@FindBy(xpath = "/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/div[2]/div[1]/textarea[1]")
	static WebElement SpecialInstruction1;

	@FindBy(xpath = "/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]")
	static WebElement SaveButton;

	@Given("^Event Manager opens browser\\.$")
	public void event_Manager_opens_browser() throws Throwable {
		driver = new FirefoxDriver();
		PageFactory.initElements(driver, this);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		driver.get("https://cmptst2.dol.gov/suite/");
	}

	@Then("^Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module\\.$")
	public void event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module()
			throws Throwable {
		try {
			Thread.sleep(4000);
			driver.findElement(By.xpath("/html[1]/body[1]/div[4]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]"))
					.click();
			Thread.sleep(4000);
			driver.findElement(By.xpath("/html[1]/body[1]/div[4]/div[1]/form[2]/div[1]/div[1]/input[1]"))
					.sendKeys("testuser@ecfdot1.com");
			driver.findElement(By.xpath("/html[1]/body[1]/div[4]/div[1]/form[2]/div[2]/div[1]/input[1]"))
					.sendKeys("@Qwertyio#11");

			SimpleDateFormat formatdate = new SimpleDateFormat("MM-dd-yyyy HH_mm_ss");
			Date systemDate = new Date();
			String date = formatdate.format(systemDate);
			System.out.println(date);

			TakesScreenshot ScreenshotLogin = (TakesScreenshot) driver;
			java.io.File source = ScreenshotLogin.getScreenshotAs(OutputType.FILE);
			FileHandler.copy(source,
					new File(
							"C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\Screenshots for Login\\screenshotLogin"
									+ date + ".jpg"));

			Thread.sleep(4000);
			// Sign-In Button
			driver.findElement(By.xpath("/html[1]/body[1]/div[4]/div[1]/form[2]/div[3]/div[1]/div[2]/input[1]"))
					.click();
			driver.navigate().to("https://cmptst2.dol.gov/suite/sites/outreach");

			Thread.sleep(4000);
			TakesScreenshot ScreenshotOutreachHome = (TakesScreenshot) driver;
			java.io.File source2 = ScreenshotOutreachHome.getScreenshotAs(OutputType.FILE);
			FileHandler.copy(source2,
					new File(
							"C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\Screenshots for Login\\OutreachHomeScreen"
									+ date + ".jpg"));
		} catch (IOException e) {
			e.getMessage();
			SimpleDateFormat formatdate = new SimpleDateFormat("MM-dd-yyyy HH_mm_ss");
			Date systemDate1 = new Date();
			String date1 = formatdate.format(systemDate1);
			TakesScreenshot ScreenshotLoginError1 = (TakesScreenshot) driver;
			java.io.File source1 = ScreenshotLoginError1.getScreenshotAs(OutputType.FILE);
			FileHandler.copy(source1,
					new File(
							"C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\Screenshots for Login\\screenshotLogin1Error"
									+ date1 + ".jpg"));

		}
	}

	@Then("^Event Manager clicks the Create New Event button\\.$")
	public void event_Manager_clicks_the_Create_New_Event_button() throws Throwable {
		try {
			Thread.sleep(4000);
			driver.findElement(By
					.xpath("/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/button[1]"))
					.click();
			Thread.sleep(2000);

			/// Set the Date
			SimpleDateFormat formatdate = new SimpleDateFormat("MM-dd-yyyy HH.mm.ss");
			Date systemDate = new Date();
			String date = formatdate.format(systemDate);

			TakesScreenshot ScreenshotCreateNewEvent = (TakesScreenshot) driver;
			java.io.File source3 = ScreenshotCreateNewEvent.getScreenshotAs(OutputType.FILE);
			FileHandler.copy(source3,
					new File(
							"C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\OutreachActions screenshots\\AfterClickingCreateEventButton"
									+ date + ".jpg"));
			Thread.sleep(2000);
		} catch (IOException e) {
			e.getMessage();
			SimpleDateFormat formatdate = new SimpleDateFormat("MM-dd-yyyy HH.mm.ss");
			Date systemDate = new Date();
			String date = formatdate.format(systemDate);
			TakesScreenshot ScreenshotCreateNewEventError = (TakesScreenshot) driver;
			java.io.File source5 = ScreenshotCreateNewEventError.getScreenshotAs(OutputType.FILE);
			FileHandler.copy(source5,
					new File(
							"C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\OutreachActions screenshots\\AfterClickingCreateEventButtonErrorScreen"
									+ date + ".jpg"));
			Thread.sleep(2000);
		}
	}

	@Then("^Event Manager enters in Events Details Info by entering the (.*) field and clicks the Save button\\.$")
	public void event_Manager_enters_in_Events_Details_Info_by_entering_the_EventTitle_field_and_clicks_the_Save_button(
			String EventTitle) throws Throwable {
		try {
			// Entering of Event Title field
			Thread.sleep(2000);
			driver.findElement(By
					.xpath("/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/input[1]"))
					.sendKeys(EventTitle);

			// Dropdown #1

			driver.findElement(By
					.xpath("/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]"))
					.click();
			Actions act = new Actions(driver);
			act.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN)
					.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ENTER).perform();
			Thread.sleep(2000);

			// Dropdown #2

			driver.findElement(By
					.xpath("/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]"))
					.click();
			Actions act2 = new Actions(driver);
			act2.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN)
					.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ENTER).perform();

			// Dropdown #3
			Thread.sleep(2000);
			driver.findElement(By
					.xpath("/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]"))
					.click();
			Actions act3 = new Actions(driver);
			act3.sendKeys(Keys.TAB).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ENTER).perform();

			// Dropdown #4
			Thread.sleep(2000);
			driver.findElement(By
					.xpath("/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]"))
					.click();
			Actions act4 = new Actions(driver);
			act4.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN)
					.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ENTER).perform();
			Thread.sleep(2000);

			// Dropdown #5
			driver.findElement(By
					.xpath("/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]"))
					.click();
			Actions act5 = new Actions(driver);
			act5.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN)
					.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ENTER).perform();

			// Dropdown #6
			Thread.sleep(2000);
			driver.findElement(By
					.xpath("/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]"))
					.click();
			Actions act6 = new Actions(driver);
			act6.sendKeys(Keys.TAB).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ENTER).perform();

			Thread.sleep(4000);
			/// Set the Date
			SimpleDateFormat formatdate2 = new SimpleDateFormat("MM-dd-yyyy HH.mm.ss");
			Date systemDate2 = new Date();
			String date2 = formatdate2.format(systemDate2);

			TakesScreenshot ScreenshotEventsDetails2 = (TakesScreenshot) driver;
			java.io.File source2 = ScreenshotEventsDetails2.getScreenshotAs(OutputType.FILE);
			FileHandler.copy(source2,
					new File(
							"C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\OutreachActions screenshots\\AfterFillingofEventsDetailsSection(CreateEventForm)"
									+ date2 + ".jpg"));

			// Take Screenshot
			driver.findElement(By
					.xpath("/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]"))
					.click();

			// SaveButton gets Clicked on the Events Detail Section
			// SaveandContinueButton.click();
			Thread.sleep(4000);
		} catch (IOException e) {
			e.getMessage();
			SimpleDateFormat formatdate = new SimpleDateFormat("MM-dd-yyyy HH.mm.ss");
			Date systemDate = new Date();
			String date = formatdate.format(systemDate);
			TakesScreenshot ScreenshotEventsDetailsError = (TakesScreenshot) driver;
			java.io.File source6 = ScreenshotEventsDetailsError.getScreenshotAs(OutputType.FILE);
			FileHandler.copy(source6,
					new File(
							"C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\OutreachActions screenshots\\AfterFillingofEventsDetailsSection(CreateEventForm)ErrorScreen"
									+ date + ".jpg"));
		}
	}

	@Then("^Event Manager fills out the Location Name Field (.*),Address Line Field (.*) of Type Details Section first part$")
	public void event_Manager_fills_out_the_Type_Details_Section_by_entering_LNF_ALF(String LNF, String ALF)
			throws Throwable {
		try {
			// TypeDetailsButton
			Thread.sleep(2000);
			driver.findElement(By
					.xpath("/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/p[1]/span[1]/*"))
					.click();

			// LocationNameField
			Thread.sleep(2000);

			LocationNameField1.sendKeys(LNF);

			// AddressLine1 field files
			Thread.sleep(2000);
			AddressLine1.sendKeys(ALF);
		} catch (Exception e) {
			e.getMessage();
			SimpleDateFormat formatdate3 = new SimpleDateFormat("MM-dd-yyyy HH.mm.ss");
			Date systemDate3 = new Date();
			String date3 = formatdate3.format(systemDate3);
			TakesScreenshot ScreenshotTypeDetailsError = (TakesScreenshot) driver;
			java.io.File source3 = ScreenshotTypeDetailsError.getScreenshotAs(OutputType.FILE);
			FileHandler.copy(source3,
					new File(
							"C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\TypeDetailsScreen\\AfterFillingofTypeDetailsSectionErrorScreen"
									+ date3 + ".jpg"));
		}
	}

	@Then("^Event Manager fills out the (.*)city field,(.*)zip field of Type Details Section second part$")
	public void event_Manager_fills_out_the_Type_Details_Section_by_entering_CF_ZF(String CF, String ZF)
			throws Throwable {
		try {
			// TypeDetailsButton
			Thread.sleep(2000);
			// City Field
			Thread.sleep(2000);
			City.sendKeys(CF);

			// Zip Field filled
			Thread.sleep(2000);
			Zip.sendKeys(ZF);
			Thread.sleep(2000);

		} catch (Exception e) {
			e.getMessage();
			SimpleDateFormat formatdate4 = new SimpleDateFormat("MM-dd-yyyy HH.mm.ss");
			Date systemDate4 = new Date();
			String date4 = formatdate4.format(systemDate4);
			TakesScreenshot ScreenshotTypeDetailsError = (TakesScreenshot) driver;
			java.io.File source4 = ScreenshotTypeDetailsError.getScreenshotAs(OutputType.FILE);
			FileHandler.copy(source4,
					new File(
							"C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\TypeDetailsScreen\\AfterFillingofTypeDetailsSectionErrorScreen"
									+ date4 + ".jpg"));
		}
	}

	@Then("^Event Manager fills out the (.*)Primary Phone field, (.*)Email Field of the Type Details Section third part$")
	public void event_Manager_fills_out_the_Type_Details_Section_by_entering_PP_EF(String PP, String EF)
			throws Throwable {
		try {

			// Entering in the state Field
			Zip.click();
			Actions act = new Actions(driver);
			act.sendKeys(Keys.TAB).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN)
					.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN)
					.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN)
					.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN)
					.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN)
					.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN)
					.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN)
					.sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ENTER)
					.perform();
			Thread.sleep(2000);

			// Primary Phone
			PrimaryPhone1.sendKeys(PP);

			// Email Field
			Email.sendKeys(EF);

			SaveButton.click();
		} catch (Exception e) {
			e.getMessage();
			SimpleDateFormat formatdate = new SimpleDateFormat("MM-dd-yyyy HH.mm.ss");
			Date systemDate5 = new Date();
			String date5 = formatdate.format(systemDate5);
			TakesScreenshot ScreenshotTypeDetailsError5 = (TakesScreenshot) driver;
			java.io.File source5 = ScreenshotTypeDetailsError5.getScreenshotAs(OutputType.FILE);
			FileHandler.copy(source5,
					new File(
							"C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\TypeDetailsScreen\\AfterFillingofTypeDetailsSectionErrorScreen"
									+ date5 + ".jpg"));
		}
	}

	@Then("^Event Manager fills out (.*)Website Field,(.*)Special Instructions field of the Type Details Section fourth part$")
	public void event_Manager_fills_out_the_Type_Details_Section_by_entering_WF_SI(String WF, String SI)
			throws Throwable {
		try {

			// Website field
			Website.sendKeys(WF);

			// Instruction field
			SpecialInstruction1.sendKeys(SI);

			SimpleDateFormat formatdate5 = new SimpleDateFormat("MM-dd-yyyy HH.mm.ss");
			Date systemDate6 = new Date();
			String date6 = formatdate5.format(systemDate6);
			TakesScreenshot ScreenshotTypeDetails6 = (TakesScreenshot) driver;
			java.io.File source6 = ScreenshotTypeDetails6.getScreenshotAs(OutputType.FILE);
			FileHandler.copy(source6,
					new File(
							"C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\TypeDetailsScreen\\AfterFillingofTypeDetailsSectionScreen"
									+ date6 + ".jpg"));

			SaveButton.click();
		} catch (Exception e) {
			e.getMessage();
			SimpleDateFormat formatdate7 = new SimpleDateFormat("MM-dd-yyyy HH.mm.ss");
			Date systemDate7 = new Date();
			String date7 = formatdate7.format(systemDate7);
			TakesScreenshot ScreenshotTypeDetailsError7 = (TakesScreenshot) driver;
			java.io.File source7 = ScreenshotTypeDetailsError7.getScreenshotAs(OutputType.FILE);
			FileHandler.copy(source7,
					new File(
							"C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\TypeDetailsScreen\\AfterFillingofTypeDetailsSectionErrorScreen"
									+ date7 + ".jpg"));
		}
	}

	@Then("^Event Manager Exits$")
	public void event_Manager_Exits() throws Throwable {
		driver.quit();
	}

}
