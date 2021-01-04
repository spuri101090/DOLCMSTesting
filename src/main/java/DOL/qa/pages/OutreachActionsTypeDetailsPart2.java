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

public class OutreachActionsTypeDetailsPart2 extends DOLTestBaseClass{
	//Page Factory - OR;
		@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/p[1]/span[1]/*")
		static
		WebElement TypeDetailsButton;
		
		@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/input[1]")
		static
		WebElement LocationNameField1;
		
		@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/input[1]")
		static
		WebElement AddressLine1;
		
		@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/input[1]")
		static
		WebElement City;
		
		@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[6]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/input[1]")
		static
		WebElement Zip;
		
		@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/input[1]")
		static
		WebElement PrimaryPhone1;
		
		@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/input[1]")
		static
		WebElement Email;
		
		@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/input[1]")
		static
		WebElement Website;
		
		@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/div[2]/div[1]/textarea[1]")
		static
		WebElement SpecialInstruction1;
		
		@FindBy(xpath="/html[1]/body[1]/div[2]/div[4]/div[1]/div[1]/appian-action-dialog[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]")
		static
		WebElement SaveButton;
		
		public OutreachActionsTypeDetailsPart2() {
			PageFactory.initElements(driver, this);
		}
		
		public static void TypeDetailsTab(String LocationNameField,String AddressLine1field,String CityField,String ZipField,String PrimaryPhone,String EmailField,String WebsiteField, String SpecialInstruction) throws InterruptedException, IOException { 
			try {
				//TypeDetailsButton
				Thread.sleep(2000);
				TypeDetailsButton.click();
				//LocationNameField
				Thread.sleep(2000);
				
				LocationNameField1.sendKeys(LocationNameField);
				
				//AddressLine1 field files
				Thread.sleep(2000);
				AddressLine1.sendKeys(AddressLine1field);
				
				//City Field
				Thread.sleep(2000);
				City.sendKeys(CityField);
				
				//Zip Field filled
				Thread.sleep(2000);
				Zip.sendKeys(ZipField);
				Thread.sleep(2000);
				
				//Entering in the state Field
				Zip.click();
				Actions act = new Actions(driver);
				act.sendKeys(Keys.TAB).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ENTER).perform();
				Thread.sleep(2000);
				
				//Primary Phone
				PrimaryPhone1.sendKeys(PrimaryPhone);
				
				//Email Field
				Email.sendKeys(EmailField);
				
				//Website field
				Website.sendKeys(WebsiteField);
				
				//Instruction field
				SpecialInstruction1.sendKeys(SpecialInstruction);
				
				SimpleDateFormat formatdate = new SimpleDateFormat("MM-dd-yyyy HH.mm.ss");
				Date systemDate = new Date();
				String date = formatdate.format(systemDate);
				TakesScreenshot ScreenshotTypeDetails = (TakesScreenshot)driver;
				java.io.File source2 = ScreenshotTypeDetails.getScreenshotAs(OutputType.FILE);
				FileHandler.copy(source2, new File("C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\TypeDetailsScreen\\AfterFillingofTypeDetailsSectionScreen"+date+".jpg"));	
			
			
				SaveButton.click();
			} catch(Exception e) {
			e.getMessage();	
			SimpleDateFormat formatdate = new SimpleDateFormat("MM-dd-yyyy HH.mm.ss");
			Date systemDate = new Date();
			String date = formatdate.format(systemDate);
			TakesScreenshot ScreenshotTypeDetailsError = (TakesScreenshot)driver;
			java.io.File source = ScreenshotTypeDetailsError.getScreenshotAs(OutputType.FILE);
			FileHandler.copy(source, new File("C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\TypeDetailsScreen\\AfterFillingofTypeDetailsSectionErrorScreen"+date+".jpg"));	
		}
		} 
		
		
	
	}
		
		
		
	
		

