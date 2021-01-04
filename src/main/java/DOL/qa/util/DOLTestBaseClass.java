package DOL.qa.util;

import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;



public class DOLTestBaseClass {
	public static WebDriver driver;
	public static Properties prop;
	public DOLTestBaseClass() {
		try {
			prop = new Properties();
			FileInputStream fis = new FileInputStream("C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\config\\config.properties");
			prop.load(fis);
			
		} catch(IOException e) {
				e.getMessage();	
		}
	}
	public static void Initialization(){
		String browserName = prop.getProperty("browser");
		
		if(browserName.equals("firefox")) {
		System.setProperty("webdriver.gecko.driver","C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\geckodriver.exe");
		driver= new FirefoxDriver();
		}
		else if(browserName.equals("msedgedriver")){
			System.setProperty("webdriver.msedge.driver","C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\msedgedriver87.exe");	
		driver= new EdgeDriver();
		}
		
		driver.manage().window().maximize();

		driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
		driver.get(prop.getProperty("url"));
		
	}
}
	
	


