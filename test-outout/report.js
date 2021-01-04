$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/z-Puri-Sumit/Documents/DOLTestCases/TESTPROJECT/src/main/java/DOLCreateEvents/qa/features/DOLCreateEvent.qa.features");
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
  "duration": 14290794800,
  "status": "passed"
});
formatter.match({
  "location": "CreateEventStepsDuplicate.event_Manager_is_on_initial_page_of_Test_Environment_and_Logs_In_to_the_application_and_Navigates_to_the_Outreach_Module()"
});
