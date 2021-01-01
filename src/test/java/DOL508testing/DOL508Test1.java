package DOL508testing;

import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.io.FileHandler;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;

public class DOL508Test1 {
  public void DOLTEST() {
  }
  @BeforeMethod
  public void beforeTest() {
	  System.out.println("----start of test------");
	  
	  
  }
@Test
public void Test() throws InterruptedException, IOException {
System.out.println("----land on site------");
WebDriver driver;
driver = new FirefoxDriver();
driver.manage().window().maximize();
driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
driver.get("https://cmpdev2.dol.gov/suite/sites/whdcms");
Thread.sleep(4000);
driver.findElement(By.xpath("//input[@type='button']")).click();
Thread.sleep(4000);
driver.findElement(By.xpath("//input[@id='un']")).click();

driver.findElement(By.xpath("//input[@id='un']")).sendKeys("testuser2@dol.gov");
Thread.sleep(4000);
driver.findElement(By.xpath("//input[@id='pw']")).click();
driver.findElement(By.xpath("//input[@id='pw']")).sendKeys("QWERTy123!!$");
Thread.sleep(4000);
System.out.println("----obtain screenshot1------");

TakesScreenshot screenshot1 = (TakesScreenshot)driver;
java.io.File source = screenshot1.getScreenshotAs(OutputType.FILE);
FileHandler.copy(source, new File("/Users/z-Puri-Sumit/Documents/DOLTestCases/TESTPROJECT/src/test/java/DOL508testing/screenshot.jpg"));

driver.findElement(By.xpath("/html[1]/body[1]/div[4]/div[1]/form[2]/div[3]/div[1]/div[2]/input[1]")).click();
Thread.sleep(4000);
System.out.println("----obtain screenshot of Top Portion of Home Page(screenshot.2)------");
TakesScreenshot screenshot2 = (TakesScreenshot)driver;
java.io.File source2 = screenshot2.getScreenshotAs(OutputType.FILE);
FileHandler.copy(source2, new File("/Users/z-Puri-Sumit/Documents/DOLTestCases/TESTPROJECT/src/test/java/DOL508testing/screenshot2.jpg"));

//scroll down the page
JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("window.scrollBy(0,document.body.scrollHeight)");
Thread.sleep(4000);

System.out.println("----obtain screenshot of Home Page(screenshot.3)------");
TakesScreenshot screenshot3 = (TakesScreenshot)driver;
java.io.File source3 = screenshot3.getScreenshotAs(OutputType.FILE);
FileHandler.copy(source3, new File("/Users/z-Puri-Sumit/Documents/DOLTestCases/TESTPROJECT/src/test/java/DOL508testing/screenshot3.jpg"));

//Scroll back to top of page and click the first column.
JavascriptExecutor js2 = (JavascriptExecutor) driver;
js2.executeScript("window.scrollTo(0,0)");
Thread.sleep(4000);
driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/table[1]/thead[1]/tr[1]/th[2]/div[1]")).click();


System.out.println("----obtain screenshot of Message Column(screenshot.4)------");
TakesScreenshot screenshot4 = (TakesScreenshot)driver;
java.io.File source4 = screenshot4.getScreenshotAs(OutputType.FILE);
FileHandler.copy(source4, new File("/Users/z-Puri-Sumit/Documents/DOLTestCases/TESTPROJECT/src/test/java/DOL508testing/screenshot4.jpg"));

//Click Tab to highlight next column(CaseID)
Thread.sleep(4000);
driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/table[1]/thead[1]/tr[1]/th[3]/div[1]")).click();
System.out.println("----obtain screenshot of CaseID Column(screenshot.5)------");
TakesScreenshot screenshot5 = (TakesScreenshot)driver;
java.io.File source5 = screenshot5.getScreenshotAs(OutputType.FILE);
FileHandler.copy(source5, new File("/Users/z-Puri-Sumit/Documents/DOLTestCases/TESTPROJECT/src/test/java/DOL508testing/screenshot5.jpg"));

//Click Tab to highlight next column(TradeName)
driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/table[1]/thead[1]/tr[1]/th[4]/div[1]")).click();

//Obtain Screenshot for next column called TradeName
System.out.println("----obtain screenshot of TradeName Column(screenshot.6)------");
TakesScreenshot screenshot6 = (TakesScreenshot)driver;
java.io.File source6 = screenshot6.getScreenshotAs(OutputType.FILE);
FileHandler.copy(source6, new File("/Users/z-Puri-Sumit/Documents/DOLTestCases/TESTPROJECT/src/test/java/DOL508testing/screenshot6.jpg"));

//Click Tab to highlight next column(CaseStatus)
driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/table[1]/thead[1]/tr[1]/th[5]/div[1]")).click();

//Obtain Screenshot for next column called CaseStatus
System.out.println("----obtain screenshot of Case Status Column(screenshot.7)------");
TakesScreenshot screenshot7 = (TakesScreenshot)driver;
java.io.File source7 = screenshot7.getScreenshotAs(OutputType.FILE);
FileHandler.copy(source7, new File("/Users/z-Puri-Sumit/Documents/DOLTestCases/TESTPROJECT/src/test/java/DOL508testing/screenshot7.jpg"));

//Click Tab to highlight next column(Date Received)
driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/table[1]/thead[1]/tr[1]/th[6]/div[1]")).click();

//Obtain Screenshot for next column called Date Received
System.out.println("----obtain screenshot of Date Received Column(screenshot.8)------");
TakesScreenshot screenshot8 = (TakesScreenshot)driver;
java.io.File source8 = screenshot8.getScreenshotAs(OutputType.FILE);
FileHandler.copy(source8, new File("/Users/z-Puri-Sumit/Documents/DOLTestCases/TESTPROJECT/src/test/java/DOL508testing/screenshot8.jpg"));

Thread.sleep(4000);
//Click on the Search Case field
driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]")).click();

//Obtain Screenshot for Search Case Field
System.out.println("----obtain screenshot of Search Case field------");
TakesScreenshot screenshot9 = (TakesScreenshot)driver;
java.io.File source9 = screenshot9.getScreenshotAs(OutputType.FILE);
FileHandler.copy(source9, new File("/Users/z-Puri-Sumit/Documents/DOLTestCases/TESTPROJECT/src/test/java/DOL508testing/screenshot9.jpg"));

//Click on the Search Button
driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]")).click();

//Obtain Screenshot for Search Button
System.out.println("----obtain screenshot of Search Button------");
TakesScreenshot screenshot10 = (TakesScreenshot)driver;
java.io.File source10 = screenshot10.getScreenshotAs(OutputType.FILE);
FileHandler.copy(source10, new File("/Users/z-Puri-Sumit/Documents/DOLTestCases/TESTPROJECT/src/test/java/DOL508testing/screenshot10.jpg"));

//Case Status drop-down
driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/span[1]/span[1]")).click();

//Obtain Screenshot for Case Status Dropdown
System.out.println("----obtain screenshot of Case Search Drop Down------");
TakesScreenshot screenshot11 = (TakesScreenshot)driver;
java.io.File source11 = screenshot11.getScreenshotAs(OutputType.FILE);
FileHandler.copy(source11, new File("/Users/z-Puri-Sumit/Documents/DOLTestCases/TESTPROJECT/src/test/java/DOL508testing/screenshot11.jpg"));

//Registration Act drop-down
driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]")).click();

//Obtain Screenshot for Registration Act Dropdown
System.out.println("----obtain screenshot of Registration Act Drop Down------");
TakesScreenshot screenshot12 = (TakesScreenshot)driver;
java.io.File source12 = screenshot12.getScreenshotAs(OutputType.FILE);
FileHandler.copy(source12, new File("/Users/z-Puri-Sumit/Documents/DOLTestCases/TESTPROJECT/src/test/java/DOL508testing/screenshot12.jpg"));

//Investigation tool drop-down
driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/span[2]")).click();

//Obtain Screenshot for Investigation Tool Dropdown
System.out.println("----obtain screenshot of Investigation Tool Drop Down------");
TakesScreenshot screenshot13 = (TakesScreenshot)driver;
java.io.File source13 = screenshot13.getScreenshotAs(OutputType.FILE);
FileHandler.copy(source13, new File("/Users/z-Puri-Sumit/Documents/DOLTestCases/TESTPROJECT/src/test/java/DOL508testing/screenshot13.jpg"));

}

 
@AfterMethod
  public void afterTest() {
 System.out.println("---drop-----");

  }

}
