package DOL.qa.pages;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import DOL.qa.util.DOLTestBaseClass;

public class LoginPage extends DOLTestBaseClass{
//Page Factory - OR;
	//I Agree Button
	@FindBy(xpath="/html[1]/body[1]/div[4]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]")
	static
	WebElement IAgreeButton;
	
	//Username Field
	@FindBy(xpath="/html[1]/body[1]/div[4]/div[1]/form[2]/div[1]/div[1]/input[1]")
	static
	WebElement Username;
	
	//PW Field
	@FindBy(xpath="/html[1]/body[1]/div[4]/div[1]/form[2]/div[2]/div[1]/input[1]")
	static
	WebElement Password;
	
	//Sign In Button
	@FindBy(xpath="/html[1]/body[1]/div[4]/div[1]/form[2]/div[3]/div[1]/div[2]/input[1]")
	static
	WebElement SignInButton;
	
	public LoginPage() {
	PageFactory.initElements(driver, this);
	}
	//Actions
	public static void LoginActions(String username, String password) throws IOException, InterruptedException {
		try {
		
		Thread.sleep(4000);
		IAgreeButton.click();
		Thread.sleep(2000);
		Username.sendKeys(username);
		Password.sendKeys(password);
		
		///Set the Date
		SimpleDateFormat formatdate = new SimpleDateFormat("MM-dd-yyyy HH_mm_ss");
		Date systemDate = new Date();
		String date = formatdate.format(systemDate);
		System.out.println(date);
		
		TakesScreenshot ScreenshotLogin = (TakesScreenshot)driver;
		java.io.File source = ScreenshotLogin.getScreenshotAs(OutputType.FILE);
		FileHandler.copy(source, new File("C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\Screenshots for Login\\screenshotLogin"+date+".jpg"));
		
		Thread.sleep(4000);
		SignInButton.click();
		driver.navigate().to("https://cmptst2.dol.gov/suite/sites/outreach");
		Thread.sleep(4000);
		TakesScreenshot ScreenshotOutreachHome = (TakesScreenshot)driver;
		java.io.File source2 = ScreenshotOutreachHome.getScreenshotAs(OutputType.FILE);
		FileHandler.copy(source2, new File("C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\Screenshots for Login\\OutreachHomeScreen"+date+".jpg"));
		} catch(IOException e) {
			e.getMessage();	
			SimpleDateFormat formatdate = new SimpleDateFormat("MM-dd-yyyy HH_mm_ss");
			Date systemDate = new Date();
			String date = formatdate.format(systemDate);
			TakesScreenshot ScreenshotLoginError = (TakesScreenshot)driver;
			java.io.File source2 = ScreenshotLoginError.getScreenshotAs(OutputType.FILE);
			FileHandler.copy(source2, new File("C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\Screenshots for Login\\screenshotLogin1Error"+date+".jpg"));
			
	}
}
	}
	
	


