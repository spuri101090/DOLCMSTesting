$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/2021/DOLCMSTesting-master/src/test/java/DOLCreateEvent/qa/Runner/DOLCreateEvent.qa.features");
formatter.feature({
  "line": 2,
  "name": "Event Manager Creates Events and only fills out the \"Event Details\" section.",
  "description": "",
  "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate creation of Events through filling of the \"Event Details\".",
  "description": "",
  "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Event Manager opens browser.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Event Manager clicks the Create New Event button.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Event Manager enters in Events Details Info by entering the \u003cEventTitle\u003e field and clicks the Save button.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Event Manager fills out the Location Name Field \u003cLNF\u003e,Address Line Field \u003cALF\u003e of Type Details Section first part",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Event Manager fills out the \u003cCF\u003ecity field,\u003cZF\u003ezip field of Type Details Section second part",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Event Manager fills out the \u003cPP\u003ePrimary Phone field, \u003cEF\u003eEmail Field of the Type Details Section third part",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Event Manager fills out the \u003cWF\u003eWebsite Field,\u003cSI\u003eSpecial Instructions field of the Type Details Section fourth part",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Event Manager Exits",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;",
  "rows": [
    {
      "cells": [
        "EventTitle",
        "LNF",
        "ALF",
        "CF",
        "ZF",
        "PP",
        "EF",
        "WF",
        "SI"
      ],
      "line": 17,
      "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;1"
    },
    {
      "cells": [
        "Testing for Sumit Puri1",
        "Testing for Sumit Puri1",
        "12544 Grey Lane",
        "Baltimore",
        "20844",
        "230-000-2233",
        "sp@yahoo.com",
        "www.google.com",
        "Testing for Sumit Puri"
      ],
      "line": 19,
      "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;2"
    },
    {
      "cells": [
        "Testing for Sumit Puri1",
        "Testing for Sumit Puri2",
        "12545 Grey Lane",
        "Rockville",
        "20844",
        "230-000-2234",
        "sp@yahoo.com",
        "www.yahoo.com",
        "Testing for Sumit Puri"
      ],
      "line": 20,
      "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;3"
    },
    {
      "cells": [
        "Testing for Sumit Puri1",
        "Testing for Sumit Puri3",
        "12546 Grey Lane",
        "Gaithersburg",
        "20844",
        "230-000-2235",
        "sp@yahoo.com",
        "www.hotmail.com",
        "Testing for Sumit Puri"
      ],
      "line": 21,
      "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;4"
    },
    {
      "cells": [
        "Testing for Sumit Puri1",
        "Testing for Sumit Puri4",
        "12547 Grey Lane",
        "Baltimore",
        "20844",
        "230-000-2236",
        "sp@yahoo.com",
        "www.google.com",
        "Testing for Sumit Puri"
      ],
      "line": 22,
      "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;5"
    },
    {
      "cells": [
        "Testing for Sumit Puri1",
        "Testing for Sumit Puri5",
        "12548 Grey Lane",
        "Rockville",
        "20844",
        "230-000-2237",
        "sp@yahoo.com",
        "www.yahoo.com",
        "Testing for Sumit Puri"
      ],
      "line": 23,
      "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;6"
    },
    {
      "cells": [
        "Testing for Sumit Puri1",
        "Testing for Sumit Puri6",
        "12549 Grey Lane",
        "Gaithersburg",
        "20844",
        "230-000-2238",
        "sp@yahoo.com",
        "www.hotmail.com",
        "Testing for Sumit Puri"
      ],
      "line": 24,
      "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;7"
    },
    {
      "cells": [
        "Testing for Sumit Puri1",
        "Testing for Sumit Puri7",
        "12550 Grey Lane",
        "Baltimore",
        "20844",
        "230-000-2239",
        "sp@yahoo.com",
        "www.google.com",
        "Testing for Sumit Puri"
      ],
      "line": 25,
      "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;8"
    },
    {
      "cells": [
        "Testing for Sumit Puri1",
        "Testing for Sumit Puri8",
        "12551 Grey Lane",
        "Rockville",
        "20844",
        "230-000-2240",
        "sp@yahoo.com",
        "www.yahoo.com",
        "Testing for Sumit Puri"
      ],
      "line": 26,
      "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;9"
    },
    {
      "cells": [
        "Testing for Sumit Puri1",
        "Testing for Sumit Puri9",
        "12552 Grey Lane",
        "Gaithersburg",
        "20844",
        "230-000-2241",
        "sp@yahoo.com",
        "www.hotmail.com",
        "Testing for Sumit Puri"
      ],
      "line": 27,
      "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Validate creation of Events through filling of the \"Event Details\".",
  "description": "",
  "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Event Manager opens browser.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Event Manager clicks the Create New Event button.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Event Manager enters in Events Details Info by entering the Testing for Sumit Puri1 field and clicks the Save button.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Event Manager fills out the Location Name Field Testing for Sumit Puri1,Address Line Field 12544 Grey Lane of Type Details Section first part",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Event Manager fills out the Baltimorecity field,20844zip field of Type Details Section second part",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Event Manager fills out the 230-000-2233Primary Phone field, sp@yahoo.comEmail Field of the Type Details Section third part",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Event Manager fills out the www.google.comWebsite Field,Testing for Sumit PuriSpecial Instructions field of the Type Details Section fourth part",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Event Manager Exits",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_opens_browser()"
});
formatter.result({
  "duration": 11785969400,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module()"
});
formatter.result({
  "duration": 8655853200,
  "error_message": "java.io.FileNotFoundException: C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\Screenshots for Login\\screenshotLogin1Error01-04-2021 09_10_38.jpg (The system cannot find the path specified)\r\n\tat java.io.FileOutputStream.open0(Native Method)\r\n\tat java.io.FileOutputStream.open(Unknown Source)\r\n\tat java.io.FileOutputStream.\u003cinit\u003e(Unknown Source)\r\n\tat java.io.FileOutputStream.\u003cinit\u003e(Unknown Source)\r\n\tat org.openqa.selenium.io.FileHandler.copyFile(FileHandler.java:138)\r\n\tat org.openqa.selenium.io.FileHandler.copy(FileHandler.java:117)\r\n\tat DOLCreateEvent.qa.stepdefinitions.CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module(CreateEventStepsDuplicate.java:110)\r\n\tat ✽.Then Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.(D:/2021/DOLCMSTesting-master/src/test/java/DOLCreateEvent/qa/Runner/DOLCreateEvent.qa.features:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_clicks_the_Create_New_Event_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri1",
      "offset": 60
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_enters_in_Events_Details_Info_by_entering_the_EventTitle_field_and_clicks_the_Save_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri1",
      "offset": 48
    },
    {
      "val": "12544 Grey Lane",
      "offset": 91
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_LNF_ALF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Baltimore",
      "offset": 28
    },
    {
      "val": "20844",
      "offset": 48
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_CF_ZF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "230-000-2233",
      "offset": 28
    },
    {
      "val": "sp@yahoo.com",
      "offset": 61
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_PP_EF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "the www.google.com",
      "offset": 24
    },
    {
      "val": "Testing for Sumit Puri",
      "offset": 56
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_WF_SI(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_Exits()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Validate creation of Events through filling of the \"Event Details\".",
  "description": "",
  "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Event Manager opens browser.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Event Manager clicks the Create New Event button.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Event Manager enters in Events Details Info by entering the Testing for Sumit Puri1 field and clicks the Save button.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Event Manager fills out the Location Name Field Testing for Sumit Puri2,Address Line Field 12545 Grey Lane of Type Details Section first part",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Event Manager fills out the Rockvillecity field,20844zip field of Type Details Section second part",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Event Manager fills out the 230-000-2234Primary Phone field, sp@yahoo.comEmail Field of the Type Details Section third part",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Event Manager fills out the www.yahoo.comWebsite Field,Testing for Sumit PuriSpecial Instructions field of the Type Details Section fourth part",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Event Manager Exits",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_opens_browser()"
});
formatter.result({
  "duration": 8090810200,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-V64E70V\u0027, ip: \u002710.0.0.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: FirefoxDriver\nremote stacktrace: \r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat DOLCreateEvent.qa.stepdefinitions.CreateEventStepsDuplicate.event_Manager_opens_browser(CreateEventStepsDuplicate.java:67)\r\n\tat ✽.Given Event Manager opens browser.(D:/2021/DOLCMSTesting-master/src/test/java/DOLCreateEvent/qa/Runner/DOLCreateEvent.qa.features:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_clicks_the_Create_New_Event_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri1",
      "offset": 60
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_enters_in_Events_Details_Info_by_entering_the_EventTitle_field_and_clicks_the_Save_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri2",
      "offset": 48
    },
    {
      "val": "12545 Grey Lane",
      "offset": 91
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_LNF_ALF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rockville",
      "offset": 28
    },
    {
      "val": "20844",
      "offset": 48
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_CF_ZF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "230-000-2234",
      "offset": 28
    },
    {
      "val": "sp@yahoo.com",
      "offset": 61
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_PP_EF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "the www.yahoo.com",
      "offset": 24
    },
    {
      "val": "Testing for Sumit Puri",
      "offset": 55
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_WF_SI(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_Exits()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Validate creation of Events through filling of the \"Event Details\".",
  "description": "",
  "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Event Manager opens browser.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Event Manager clicks the Create New Event button.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Event Manager enters in Events Details Info by entering the Testing for Sumit Puri1 field and clicks the Save button.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Event Manager fills out the Location Name Field Testing for Sumit Puri3,Address Line Field 12546 Grey Lane of Type Details Section first part",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Event Manager fills out the Gaithersburgcity field,20844zip field of Type Details Section second part",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Event Manager fills out the 230-000-2235Primary Phone field, sp@yahoo.comEmail Field of the Type Details Section third part",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Event Manager fills out the www.hotmail.comWebsite Field,Testing for Sumit PuriSpecial Instructions field of the Type Details Section fourth part",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Event Manager Exits",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_opens_browser()"
});
formatter.result({
  "duration": 8676514100,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module()"
});
formatter.result({
  "duration": 8655652100,
  "error_message": "java.io.FileNotFoundException: C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\Screenshots for Login\\screenshotLogin1Error01-04-2021 09_11_03.jpg (The system cannot find the path specified)\r\n\tat java.io.FileOutputStream.open0(Native Method)\r\n\tat java.io.FileOutputStream.open(Unknown Source)\r\n\tat java.io.FileOutputStream.\u003cinit\u003e(Unknown Source)\r\n\tat java.io.FileOutputStream.\u003cinit\u003e(Unknown Source)\r\n\tat org.openqa.selenium.io.FileHandler.copyFile(FileHandler.java:138)\r\n\tat org.openqa.selenium.io.FileHandler.copy(FileHandler.java:117)\r\n\tat DOLCreateEvent.qa.stepdefinitions.CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module(CreateEventStepsDuplicate.java:110)\r\n\tat ✽.Then Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.(D:/2021/DOLCMSTesting-master/src/test/java/DOLCreateEvent/qa/Runner/DOLCreateEvent.qa.features:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_clicks_the_Create_New_Event_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri1",
      "offset": 60
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_enters_in_Events_Details_Info_by_entering_the_EventTitle_field_and_clicks_the_Save_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri3",
      "offset": 48
    },
    {
      "val": "12546 Grey Lane",
      "offset": 91
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_LNF_ALF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gaithersburg",
      "offset": 28
    },
    {
      "val": "20844",
      "offset": 51
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_CF_ZF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "230-000-2235",
      "offset": 28
    },
    {
      "val": "sp@yahoo.com",
      "offset": 61
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_PP_EF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "the www.hotmail.com",
      "offset": 24
    },
    {
      "val": "Testing for Sumit Puri",
      "offset": 57
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_WF_SI(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_Exits()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "Validate creation of Events through filling of the \"Event Details\".",
  "description": "",
  "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Event Manager opens browser.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Event Manager clicks the Create New Event button.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Event Manager enters in Events Details Info by entering the Testing for Sumit Puri1 field and clicks the Save button.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Event Manager fills out the Location Name Field Testing for Sumit Puri4,Address Line Field 12547 Grey Lane of Type Details Section first part",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Event Manager fills out the Baltimorecity field,20844zip field of Type Details Section second part",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Event Manager fills out the 230-000-2236Primary Phone field, sp@yahoo.comEmail Field of the Type Details Section third part",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Event Manager fills out the www.google.comWebsite Field,Testing for Sumit PuriSpecial Instructions field of the Type Details Section fourth part",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Event Manager Exits",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_opens_browser()"
});
formatter.result({
  "duration": 6508774900,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module()"
});
formatter.result({
  "duration": 4449749000,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-V64E70V\u0027, ip: \u002710.0.0.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 71.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20191202093317, moz:geckodriverVersion: 0.28.0, moz:headless: false, moz:processID: 21660, moz:profile: C:\\Users\\rajku\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: ce3e4514-85f8-4373-92b4-ecd24f666a13\n*** Element info: {Using\u003dxpath, value\u003d/html[1]/body[1]/div[4]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat DOLCreateEvent.qa.stepdefinitions.CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module(CreateEventStepsDuplicate.java:78)\r\n\tat ✽.Then Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.(D:/2021/DOLCMSTesting-master/src/test/java/DOLCreateEvent/qa/Runner/DOLCreateEvent.qa.features:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_clicks_the_Create_New_Event_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri1",
      "offset": 60
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_enters_in_Events_Details_Info_by_entering_the_EventTitle_field_and_clicks_the_Save_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri4",
      "offset": 48
    },
    {
      "val": "12547 Grey Lane",
      "offset": 91
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_LNF_ALF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Baltimore",
      "offset": 28
    },
    {
      "val": "20844",
      "offset": 48
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_CF_ZF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "230-000-2236",
      "offset": 28
    },
    {
      "val": "sp@yahoo.com",
      "offset": 61
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_PP_EF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "the www.google.com",
      "offset": 24
    },
    {
      "val": "Testing for Sumit Puri",
      "offset": 56
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_WF_SI(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_Exits()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "Validate creation of Events through filling of the \"Event Details\".",
  "description": "",
  "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Event Manager opens browser.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Event Manager clicks the Create New Event button.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Event Manager enters in Events Details Info by entering the Testing for Sumit Puri1 field and clicks the Save button.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Event Manager fills out the Location Name Field Testing for Sumit Puri5,Address Line Field 12548 Grey Lane of Type Details Section first part",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Event Manager fills out the Rockvillecity field,20844zip field of Type Details Section second part",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Event Manager fills out the 230-000-2237Primary Phone field, sp@yahoo.comEmail Field of the Type Details Section third part",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Event Manager fills out the www.yahoo.comWebsite Field,Testing for Sumit PuriSpecial Instructions field of the Type Details Section fourth part",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Event Manager Exits",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_opens_browser()"
});
formatter.result({
  "duration": 5872876400,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module()"
});
formatter.result({
  "duration": 4376156500,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-V64E70V\u0027, ip: \u002710.0.0.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 71.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20191202093317, moz:geckodriverVersion: 0.28.0, moz:headless: false, moz:processID: 29044, moz:profile: C:\\Users\\rajku\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 85707456-cb7d-45d2-8efe-05199a4d3551\n*** Element info: {Using\u003dxpath, value\u003d/html[1]/body[1]/div[4]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat DOLCreateEvent.qa.stepdefinitions.CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module(CreateEventStepsDuplicate.java:78)\r\n\tat ✽.Then Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.(D:/2021/DOLCMSTesting-master/src/test/java/DOLCreateEvent/qa/Runner/DOLCreateEvent.qa.features:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_clicks_the_Create_New_Event_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri1",
      "offset": 60
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_enters_in_Events_Details_Info_by_entering_the_EventTitle_field_and_clicks_the_Save_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri5",
      "offset": 48
    },
    {
      "val": "12548 Grey Lane",
      "offset": 91
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_LNF_ALF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rockville",
      "offset": 28
    },
    {
      "val": "20844",
      "offset": 48
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_CF_ZF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "230-000-2237",
      "offset": 28
    },
    {
      "val": "sp@yahoo.com",
      "offset": 61
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_PP_EF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "the www.yahoo.com",
      "offset": 24
    },
    {
      "val": "Testing for Sumit Puri",
      "offset": 55
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_WF_SI(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_Exits()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "Validate creation of Events through filling of the \"Event Details\".",
  "description": "",
  "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Event Manager opens browser.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Event Manager clicks the Create New Event button.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Event Manager enters in Events Details Info by entering the Testing for Sumit Puri1 field and clicks the Save button.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Event Manager fills out the Location Name Field Testing for Sumit Puri6,Address Line Field 12549 Grey Lane of Type Details Section first part",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Event Manager fills out the Gaithersburgcity field,20844zip field of Type Details Section second part",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Event Manager fills out the 230-000-2238Primary Phone field, sp@yahoo.comEmail Field of the Type Details Section third part",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Event Manager fills out the www.hotmail.comWebsite Field,Testing for Sumit PuriSpecial Instructions field of the Type Details Section fourth part",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Event Manager Exits",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_opens_browser()"
});
formatter.result({
  "duration": 9413081300,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module()"
});
formatter.result({
  "duration": 8906560500,
  "error_message": "java.io.FileNotFoundException: C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\Screenshots for Login\\screenshotLogin1Error01-04-2021 09_11_43.jpg (The system cannot find the path specified)\r\n\tat java.io.FileOutputStream.open0(Native Method)\r\n\tat java.io.FileOutputStream.open(Unknown Source)\r\n\tat java.io.FileOutputStream.\u003cinit\u003e(Unknown Source)\r\n\tat java.io.FileOutputStream.\u003cinit\u003e(Unknown Source)\r\n\tat org.openqa.selenium.io.FileHandler.copyFile(FileHandler.java:138)\r\n\tat org.openqa.selenium.io.FileHandler.copy(FileHandler.java:117)\r\n\tat DOLCreateEvent.qa.stepdefinitions.CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module(CreateEventStepsDuplicate.java:110)\r\n\tat ✽.Then Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.(D:/2021/DOLCMSTesting-master/src/test/java/DOLCreateEvent/qa/Runner/DOLCreateEvent.qa.features:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_clicks_the_Create_New_Event_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri1",
      "offset": 60
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_enters_in_Events_Details_Info_by_entering_the_EventTitle_field_and_clicks_the_Save_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri6",
      "offset": 48
    },
    {
      "val": "12549 Grey Lane",
      "offset": 91
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_LNF_ALF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gaithersburg",
      "offset": 28
    },
    {
      "val": "20844",
      "offset": 51
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_CF_ZF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "230-000-2238",
      "offset": 28
    },
    {
      "val": "sp@yahoo.com",
      "offset": 61
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_PP_EF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "the www.hotmail.com",
      "offset": 24
    },
    {
      "val": "Testing for Sumit Puri",
      "offset": 57
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_WF_SI(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_Exits()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "Validate creation of Events through filling of the \"Event Details\".",
  "description": "",
  "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Event Manager opens browser.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Event Manager clicks the Create New Event button.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Event Manager enters in Events Details Info by entering the Testing for Sumit Puri1 field and clicks the Save button.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Event Manager fills out the Location Name Field Testing for Sumit Puri7,Address Line Field 12550 Grey Lane of Type Details Section first part",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Event Manager fills out the Baltimorecity field,20844zip field of Type Details Section second part",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Event Manager fills out the 230-000-2239Primary Phone field, sp@yahoo.comEmail Field of the Type Details Section third part",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Event Manager fills out the www.google.comWebsite Field,Testing for Sumit PuriSpecial Instructions field of the Type Details Section fourth part",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Event Manager Exits",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_opens_browser()"
});
formatter.result({
  "duration": 6639126900,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module()"
});
formatter.result({
  "duration": 4445939700,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-V64E70V\u0027, ip: \u002710.0.0.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 71.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20191202093317, moz:geckodriverVersion: 0.28.0, moz:headless: false, moz:processID: 1952, moz:profile: C:\\Users\\rajku\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 7c42903d-77bd-4433-9bc1-eb3dfad0e3cf\n*** Element info: {Using\u003dxpath, value\u003d/html[1]/body[1]/div[4]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat DOLCreateEvent.qa.stepdefinitions.CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module(CreateEventStepsDuplicate.java:78)\r\n\tat ✽.Then Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.(D:/2021/DOLCMSTesting-master/src/test/java/DOLCreateEvent/qa/Runner/DOLCreateEvent.qa.features:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_clicks_the_Create_New_Event_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri1",
      "offset": 60
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_enters_in_Events_Details_Info_by_entering_the_EventTitle_field_and_clicks_the_Save_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri7",
      "offset": 48
    },
    {
      "val": "12550 Grey Lane",
      "offset": 91
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_LNF_ALF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Baltimore",
      "offset": 28
    },
    {
      "val": "20844",
      "offset": 48
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_CF_ZF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "230-000-2239",
      "offset": 28
    },
    {
      "val": "sp@yahoo.com",
      "offset": 61
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_PP_EF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "the www.google.com",
      "offset": 24
    },
    {
      "val": "Testing for Sumit Puri",
      "offset": 56
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_WF_SI(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_Exits()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "Validate creation of Events through filling of the \"Event Details\".",
  "description": "",
  "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Event Manager opens browser.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Event Manager clicks the Create New Event button.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Event Manager enters in Events Details Info by entering the Testing for Sumit Puri1 field and clicks the Save button.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Event Manager fills out the Location Name Field Testing for Sumit Puri8,Address Line Field 12551 Grey Lane of Type Details Section first part",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Event Manager fills out the Rockvillecity field,20844zip field of Type Details Section second part",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Event Manager fills out the 230-000-2240Primary Phone field, sp@yahoo.comEmail Field of the Type Details Section third part",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Event Manager fills out the www.yahoo.comWebsite Field,Testing for Sumit PuriSpecial Instructions field of the Type Details Section fourth part",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Event Manager Exits",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_opens_browser()"
});
formatter.result({
  "duration": 12669099500,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module()"
});
formatter.result({
  "duration": 8681605300,
  "error_message": "java.io.FileNotFoundException: C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\Screenshots for Login\\screenshotLogin1Error01-04-2021 09_12_15.jpg (The system cannot find the path specified)\r\n\tat java.io.FileOutputStream.open0(Native Method)\r\n\tat java.io.FileOutputStream.open(Unknown Source)\r\n\tat java.io.FileOutputStream.\u003cinit\u003e(Unknown Source)\r\n\tat java.io.FileOutputStream.\u003cinit\u003e(Unknown Source)\r\n\tat org.openqa.selenium.io.FileHandler.copyFile(FileHandler.java:138)\r\n\tat org.openqa.selenium.io.FileHandler.copy(FileHandler.java:117)\r\n\tat DOLCreateEvent.qa.stepdefinitions.CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module(CreateEventStepsDuplicate.java:110)\r\n\tat ✽.Then Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.(D:/2021/DOLCMSTesting-master/src/test/java/DOLCreateEvent/qa/Runner/DOLCreateEvent.qa.features:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_clicks_the_Create_New_Event_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri1",
      "offset": 60
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_enters_in_Events_Details_Info_by_entering_the_EventTitle_field_and_clicks_the_Save_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri8",
      "offset": 48
    },
    {
      "val": "12551 Grey Lane",
      "offset": 91
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_LNF_ALF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rockville",
      "offset": 28
    },
    {
      "val": "20844",
      "offset": 48
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_CF_ZF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "230-000-2240",
      "offset": 28
    },
    {
      "val": "sp@yahoo.com",
      "offset": 61
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_PP_EF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "the www.yahoo.com",
      "offset": 24
    },
    {
      "val": "Testing for Sumit Puri",
      "offset": 55
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_WF_SI(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_Exits()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "Validate creation of Events through filling of the \"Event Details\".",
  "description": "",
  "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Event Manager opens browser.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Event Manager clicks the Create New Event button.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Event Manager enters in Events Details Info by entering the Testing for Sumit Puri1 field and clicks the Save button.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Event Manager fills out the Location Name Field Testing for Sumit Puri9,Address Line Field 12552 Grey Lane of Type Details Section first part",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Event Manager fills out the Gaithersburgcity field,20844zip field of Type Details Section second part",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Event Manager fills out the 230-000-2241Primary Phone field, sp@yahoo.comEmail Field of the Type Details Section third part",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Event Manager fills out the www.hotmail.comWebsite Field,Testing for Sumit PuriSpecial Instructions field of the Type Details Section fourth part",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Event Manager Exits",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_opens_browser()"
});
formatter.result({
  "duration": 8656251900,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module()"
});
formatter.result({
  "duration": 8593709100,
  "error_message": "java.io.FileNotFoundException: C:\\Users\\z-Puri-Sumit\\Documents\\DOLTestCases\\TESTPROJECT\\src\\main\\java\\DOL\\qa\\pages\\Screenshots for Login\\screenshotLogin1Error01-04-2021 09_12_33.jpg (The system cannot find the path specified)\r\n\tat java.io.FileOutputStream.open0(Native Method)\r\n\tat java.io.FileOutputStream.open(Unknown Source)\r\n\tat java.io.FileOutputStream.\u003cinit\u003e(Unknown Source)\r\n\tat java.io.FileOutputStream.\u003cinit\u003e(Unknown Source)\r\n\tat org.openqa.selenium.io.FileHandler.copyFile(FileHandler.java:138)\r\n\tat org.openqa.selenium.io.FileHandler.copy(FileHandler.java:117)\r\n\tat DOLCreateEvent.qa.stepdefinitions.CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module(CreateEventStepsDuplicate.java:110)\r\n\tat ✽.Then Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.(D:/2021/DOLCMSTesting-master/src/test/java/DOLCreateEvent/qa/Runner/DOLCreateEvent.qa.features:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_clicks_the_Create_New_Event_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri1",
      "offset": 60
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_enters_in_Events_Details_Info_by_entering_the_EventTitle_field_and_clicks_the_Save_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing for Sumit Puri9",
      "offset": 48
    },
    {
      "val": "12552 Grey Lane",
      "offset": 91
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_LNF_ALF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gaithersburg",
      "offset": 28
    },
    {
      "val": "20844",
      "offset": 51
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_CF_ZF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "230-000-2241",
      "offset": 28
    },
    {
      "val": "sp@yahoo.com",
      "offset": 61
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_PP_EF(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "the www.hotmail.com",
      "offset": 24
    },
    {
      "val": "Testing for Sumit Puri",
      "offset": 57
    }
  ],
  "location": "CreateEventStepsDuplicate.event_Manager_fills_out_the_Type_Details_Section_by_entering_WF_SI(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_Exits()"
});
formatter.result({
  "status": "skipped"
});
});