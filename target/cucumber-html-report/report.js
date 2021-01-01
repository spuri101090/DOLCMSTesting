$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/z-Puri-Sumit/Documents/DOLTestCases/TESTPROJECT/src/main/java/DOLCreateEvents/qa/features/DOLCreateEvent.qa.features");
formatter.feature({
  "line": 1,
  "name": "Event Manager Creates Events and only fills out the \"Event Details\" section.",
  "description": "",
  "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Validate creation of Events through filling of the \"Event Details\".",
  "description": "",
  "id": "event-manager-creates-events-and-only-fills-out-the-\"event-details\"-section.;validate-creation-of-events-through-filling-of-the-\"event-details\".",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Event Manager opens browser.",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Event Manager is on initial page of Test Environment and Logs In to the application and Navigates to the Outreach Module.",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "Event Manager clicks the Create New Event button.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Event Manager enters in Events Details Info and clicks the Save button.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Event Manager fills out the Type Details Section.",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateEventSteps.event_Manager_opens_browser()"
});
formatter.result({
  "duration": 6628755700,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventSteps.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module()"
});
formatter.result({
  "duration": 21554293500,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventSteps.event_Manager_clicks_the_button()"
});
formatter.result({
  "duration": 8547951000,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventSteps.event_Manager_enters_in_Events_Details_Info_and_clicks_the_button()"
});
formatter.result({
  "duration": 24684549300,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventSteps.event_Manager_fills_out_the_Type_Details_Section()"
});
formatter.result({
  "duration": 17579083300,
  "status": "passed"
});
});