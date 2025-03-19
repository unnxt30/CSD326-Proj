# Road Repair Management System - Use Cases

## Table of Contents
1. [Submit Repair Request (UC-001)](#uc-001)
2. [Track Repair Status (UC-002)](#uc-002)
3. [Login & View Repair Requests (UC-003)](#uc-003)
4. [Update Repair Progress (UC-004)](#uc-004)
5. [Generate Work Orders (UC-005)](#uc-005)
6. [Schedule Maintenance (UC-006)](#uc-006)
7. [Manage Resources (UC-007)](#uc-007)
8. [Review Repair History (UC-008)](#uc-008)
9. [Set Task Priority (UC-009)](#uc-009)
10. [Generate Cost Reports (UC-010)](#uc-010)
11. [Monitor Worker Performance (UC-011)](#uc-011)
12. [Request Statistical Reports (UC-012)](#uc-012)

---

<a id="uc-001"></a>
## Submit Repair Request (UC-001)

| **Attribute** | **Details** |
|--------------|------------|
| **ID** | UC-001 |
| **Title** | Submit Repair Request |
| **Description** | This use case allows a citizen (resident) to submit a repair request for damaged roads. The request includes location details, issue description, and optional photo attachments. The system processes the request and notifies the relevant authorities. |
| **Primary Actor** | Citizen (Resident) |
| **Secondary Actor** | System |
| **Preconditions** | - The citizen must be logged into the system.<br>- The system must be online and available. |
| **Postconditions** | - The repair request is logged in the system.<br>- The supervisor receives a notification about the new request.<br>- The citizen receives a confirmation message. |
| **Dependency** | None |
| **Generalization** | None |
| **Main Success Scenario** | 1. The citizen logs into the system.<br>2. The citizen selects the "Submit Repair Request" option.<br>3. The system prompts the citizen to enter the location and issue details.<br>4. The system validates the input.<br>5. The citizen optionally attaches photos or documents.<br>6. The citizen provides contact information.<br>7. The citizen submits the request.<br>8. The system assigns a unique request ID and stores the request.<br>9. The system notifies the supervisor of the new repair request.<br>10. The citizen receives a confirmation message. |
| **Extensions or Alternate Flow** | - **[Step 4] Invalid Input** → The system prompts the citizen to correct errors.<br>- **[Step 5] No Attachment Provided** → The system allows submission without photos.<br>- **[Step 7] Connection Lost** → The system saves a draft and allows resubmission later. |
| **Frequency of Use** | Daily, based on citizen complaints. |
| **Business Rules** | - A citizen can only submit one request per location per day.<br>- The system must validate that the location exists in the city database. |
| **Assumptions** | - The citizen has internet access.<br>- The system has an updated city map database. |
| **Notes** | - Future versions may allow voice-based submission. |
| **Status** | Active |
| **Owner** | Admin |
| **Priority** | High |

---

<a id="uc-002"></a>
## Track Repair Status (UC-002)

| **Attribute** | **Details** |
|--------------|------------|
| **ID** | UC-002 |
| **Title** | Track Repair Status |
| **Description** | This use case allows a citizen (resident) to track the progress of a submitted repair request. The citizen can check the status, estimated time for completion, and receive notifications on updates. Additionally, they can download a report on completed repairs. |
| **Primary Actor** | Citizen (Resident) |
| **Secondary Actor** | System |
| **Preconditions** | - The citizen must be logged into the system.<br>- A repair request must have been submitted. |
| **Postconditions** | - The citizen can view the current status of the repair request.<br>- The system provides real-time updates.<br>- The citizen can receive notifications about progress. |
| **Dependency** | None |
| **Generalization** | None |
| **Main Success Scenario** | 1. The citizen logs into the system.<br>2. The citizen selects "Track Repair Progress."<br>3. The system retrieves all repair requests submitted by the citizen.<br>4. The citizen selects a specific repair request.<br>5. The system displays the current status and estimated completion time.<br>6. The citizen subscribes to notifications for status updates.<br>7. The system sends real-time notifications as updates occur.<br>8. The citizen downloads a repair report if needed. |
| **Extensions or Alternate Flow** | - **[Step 3] No Previous Requests Found** → The system informs the citizen that no requests exist.<br>- **[Step 5] Repair Completed** → The system allows the citizen to download a completion report.<br>- **[Step 7] Notifications Disabled** → The citizen can manually check for updates instead. |
| **Frequency of Use** | Daily, depending on repair requests. |
| **Business Rules** | - Citizens can only track repairs they have submitted.<br>- Notifications are only sent during system working hours. |
| **Assumptions** | - The system has real-time update capabilities.<br>- The citizen has enabled notifications on their device. |
| **Notes** | - Future versions may include SMS notifications. |
| **Status** | Active |
| **Owner** | Admin |
| **Priority** | High |

<a id="uc-003"></a>
## Login & View Repair Requests (UC-003)

| **Attribute** | **Details** |
|--------------|------------|
| **ID** | UC-003 |
| **Title** | Login & View Repair Requests |
| **Description** | This use case allows a supervisor to log into the system and view submitted repair requests. The system retrieves and displays repair requests based on filters such as date, priority, and location. |
| **Primary Actor** | Supervisor |
| **Secondary Actor** | System |
| **Preconditions** | - The supervisor must have valid login credentials.<br>- The system must be online and accessible. |
| **Postconditions** | - The supervisor gains access to pending repair requests.<br>- The system retrieves and displays repair requests with relevant details. |
| **Dependency** | None |
| **Generalization** | None |
| **Main Success Scenario** | 1. The supervisor navigates to the login page.<br>2. The supervisor enters valid credentials and submits them.<br>3. The system verifies the credentials.<br>4. If authentication is successful, the system grants access.<br>5. The supervisor selects the "View Repair Requests" option.<br>6. The system retrieves and displays all submitted repair requests.<br>7. The supervisor filters requests by date, priority, or location.<br>8. The supervisor selects a request to view details. |
| **Extensions or Alternate Flow** | - **[Step 3] Invalid Credentials** → The system denies access and prompts for re-entry.<br>- **[Step 6] No Repair Requests Available** → The system displays a message stating no pending requests.<br>- **[Step 7] Filter Not Applied** → The system displays all available requests. |
| **Frequency of Use** | Multiple times per day, depending on incoming repair requests. |
| **Business Rules** | - Only authorized supervisors can access repair requests.<br>- Repair requests must be sorted by priority by default. |
| **Assumptions** | - The supervisor has an active account.<br>- The system can handle concurrent logins. |
| **Notes** | - Future versions may allow voice-based search for repair requests. |
| **Status** | Active |
| **Owner** | Admin |
| **Priority** | High |

<a id="uc-004"></a>
## Update Repair Progress (UC-004)

| **Attribute** | **Details** |
|--------------|------------|
| **ID** | UC-004 |
| **Title** | Update Repair Progress |
| **Description** | This use case allows a supervisor to update the progress of a repair request. The system updates the status, estimated completion time, and any relevant notes for the request. |
| **Primary Actor** | Supervisor |
| **Secondary Actor** | System |
| **Preconditions** | - The supervisor must be logged into the system.<br>- A repair request must exist in the system. |
| **Postconditions** | - The repair request status is updated.<br>- The estimated completion time is updated.<br>- Any relevant notes are added or updated. |
| **Dependency** | None |
| **Generalization** | None |
| **Main Success Scenario** | 1. The supervisor logs into the system.<br>2. The supervisor selects "Update Repair Progress."<br>3. The system retrieves the repair request.<br>4. The supervisor updates the status, estimated completion time, and notes.<br>5. The system updates the repair request with the new information. |
| **Extensions or Alternate Flow** | - **[Step 3] No Repair Request Found** → The system informs the supervisor that no request exists. |
| **Frequency of Use** | Multiple times per day, depending on repair requests. |
| **Business Rules** | - Only authorized supervisors can update repair requests. |
| **Assumptions** | - The system maintains accurate and real-time repair records.<br>- The supervisor has permission to access all repair requests. |
| **Notes** | - Future versions may include automated notifications for updates. |
| **Status** | Active |
| **Owner** | Admin |
| **Priority** | High |

---

<a id="uc-005"></a>
## Generate Work Orders (UC-005)

| **Attribute** | **Details** |
|--------------|------------|
| **ID** | UC-005 |
| **Title** | Generate Work Orders |
| **Description** | This use case allows a supervisor to generate work orders for repair tasks. The system assigns tasks to workers based on the availability and skills of the workers. |
| **Primary Actor** | Supervisor |
| **Secondary Actor** | System |
| **Preconditions** | - The supervisor must be logged into the system.<br>- A repair request must exist in the system. |
| **Postconditions** | - Work orders are generated for the repair tasks.<br>- Tasks are assigned to workers based on availability and skills. |
| **Dependency** | None |
| **Generalization** | None |
| **Main Success Scenario** | 1. The supervisor logs into the system.<br>2. The supervisor selects "Generate Work Orders."<br>3. The system retrieves the repair request.<br>4. The system assigns tasks to workers based on availability and skills.<br>5. The system generates work orders for the assigned tasks. |
| **Extensions or Alternate Flow** | - **[Step 3] No Repair Request Found** → The system informs the supervisor that no request exists. |
| **Frequency of Use** | Multiple times per day, depending on incoming repair requests. |
| **Business Rules** | - Only authorized supervisors can generate work orders. |
| **Assumptions** | - The system maintains accurate and real-time repair records.<br>- The supervisor has permission to access all repair requests. |
| **Notes** | - Future versions may include automated notifications for assigned tasks. |
| **Status** | Active |
| **Owner** | Admin |
| **Priority** | High |

<a id="uc-006"></a>
## Schedule Maintenance (UC-006)

| **Attribute** | **Details** |
|--------------|------------|
| **ID** | UC-006 |
| **Title** | Schedule Maintenance |
| **Description** | This use case allows a supervisor to schedule maintenance tasks for road repairs. The system assigns tasks to workers based on the availability and skills of the workers. |
| **Primary Actor** | Supervisor |
| **Secondary Actor** | System |
| **Preconditions** | - The supervisor must be logged into the system.<br>- A repair request must exist in the system. |
| **Postconditions** | - Maintenance tasks are scheduled for the repair.<br>- Tasks are assigned to workers based on availability and skills. |
| **Dependency** | None |
| **Generalization** | None |
| **Main Success Scenario** | 1. The supervisor logs into the system.<br>2. The supervisor selects "Schedule Maintenance."<br>3. The system retrieves the repair request.<br>4. The system assigns tasks to workers based on availability and skills.<br>5. The system schedules maintenance tasks for the repair. |
| **Extensions or Alternate Flow** | - **[Step 3] No Repair Request Found** → The system informs the supervisor that no request exists. |
| **Frequency of Use** | Multiple times per day, depending on incoming repair requests. |
| **Business Rules** | - Only authorized supervisors can schedule maintenance tasks. |
| **Assumptions** | - The system maintains accurate and real-time repair records.<br>- The supervisor has permission to access all repair requests. |
| **Notes** | - Future versions may include automated notifications for scheduled tasks. |
| **Status** | Active |
| **Owner** | Admin |
| **Priority** | High |

---

<a id="uc-007"></a>
## Manage Resources (UC-007)

| **Attribute** | **Details** |
|--------------|------------|
| **ID** | UC-007 |
| **Title** | Manage Resources |
| **Description** | This use case allows a supervisor to manage resources allocated to road repairs. The system retrieves and displays resource allocation details and allows for adjustments. |
| **Primary Actor** | Supervisor |
| **Secondary Actor** | System |
| **Preconditions** | - The supervisor must be logged into the system. |
| **Postconditions** | - Resource allocation details are retrieved and displayed.<br>- Resource allocation adjustments are made. |
| **Dependency** | None |
| **Generalization** | None |
| **Main Success Scenario** | 1. The supervisor logs into the system.<br>2. The supervisor selects "Manage Resources."<br>3. The system retrieves resource allocation details.<br>4. The supervisor views the details.<br>5. The supervisor adjusts resource allocation if needed. |
| **Extensions or Alternate Flow** | - **[Step 3] No Resource Data Found** → The system informs the supervisor that no resource data exists. |
| **Frequency of Use** | Multiple times per day, depending on resource management needs. |
| **Business Rules** | - Only authorized supervisors can manage resources. |
| **Assumptions** | - The system maintains accurate and real-time resource allocation records.<br>- The supervisor has permission to access all resource allocation data. |
| **Notes** | - Future versions may include automated notifications for resource adjustments. |
| **Status** | Active |
| **Owner** | Admin |
| **Priority** | High |

---

<a id="uc-008"></a>
## Review Repair History (UC-008)

| **Attribute** | **Details** |
|--------------|------------|
| **ID** | UC-008 |
| **Title** | Review Repair History |
| **Description** | This use case allows a supervisor to review the history of a specific repair request. The system retrieves and displays all relevant details about the repair request. |
| **Primary Actor** | Supervisor |
| **Secondary Actor** | System |
| **Preconditions** | - The supervisor must be logged into the system.<br>- A repair request must exist in the system. |
| **Postconditions** | - The repair request history is retrieved and displayed. |
| **Dependency** | None |
| **Generalization** | None |
| **Main Success Scenario** | 1. The supervisor logs into the system.<br>2. The supervisor selects "Review Repair History."<br>3. The system retrieves the repair request history.<br>4. The supervisor views the history details. |
| **Extensions or Alternate Flow** | - **[Step 3] No History Found** → The system informs the supervisor that no history exists for the request. |
| **Frequency of Use** | Multiple times per day, depending on review needs. |
| **Business Rules** | - Only authorized supervisors can review repair history. |
| **Assumptions** | - The system maintains accurate and real-time repair records.<br>- The supervisor has permission to access all repair history. |
| **Notes** | - Future versions may include automated notifications for new history entries. |
| **Status** | Active |
| **Owner** | Admin |
| **Priority** | Medium |

---

<a id="uc-009"></a>
## Set Task Priority (UC-009)

| **Attribute** | **Details** |
|--------------|------------|
| **ID** | UC-009 |
| **Title** | Set Task Priority |
| **Description** | This use case allows a supervisor to set the priority of a repair task. The system updates the priority of the task and notifies the relevant worker. |
| **Primary Actor** | Supervisor |
| **Secondary Actor** | System |
| **Preconditions** | - The supervisor must be logged into the system.<br>- A repair task must exist in the system. |
| **Postconditions** | - The repair task priority is updated.<br>- The relevant worker is notified of the priority change. |
| **Dependency** | None |
| **Generalization** | None |
| **Main Success Scenario** | 1. The supervisor logs into the system.<br>2. The supervisor selects "Set Task Priority."<br>3. The system retrieves the repair task.<br>4. The supervisor sets the task priority.<br>5. The system updates the task priority.<br>6. The system notifies the relevant worker of the priority change. |
| **Extensions or Alternate Flow** | - **[Step 3] No Task Found** → The system informs the supervisor that no task exists. |
| **Frequency of Use** | Multiple times per day, depending on task management needs. |
| **Business Rules** | - Only authorized supervisors can set task priorities. |
| **Assumptions** | - The system maintains accurate and real-time task records.<br>- The supervisor has permission to access all tasks. |
| **Notes** | - Future versions may include automated notifications for priority changes. |
| **Status** | Active |
| **Owner** | Admin |
| **Priority** | High |

---

<a id="uc-010"></a>
## Generate Cost Reports (UC-010)

| **Attribute** | **Details** |
|--------------|------------|
| **ID** | UC-010 |
| **Title** | Generate Cost Reports |
| **Description** | This use case allows a supervisor to generate a cost report for a specific repair request. The system retrieves and formats the report based on selected parameters. |
| **Primary Actor** | Supervisor |
| **Secondary Actor** | System |
| **Preconditions** | - The supervisor must be logged into the system.<br>- A repair request must exist in the system. |
| **Postconditions** | - The system generates and displays the requested cost report.<br>- The report is formatted for review and export. |
| **Dependency** | None |
| **Generalization** | None |
| **Main Success Scenario** | 1. The supervisor logs into the system.<br>2. The supervisor selects "Generate Cost Reports."<br>3. The system retrieves the repair request.<br>4. The system retrieves relevant cost data.<br>5. The system generates a formatted cost report.<br>6. The supervisor views the report on the system dashboard.<br>7. The system provides an option to export the report as PDF/CSV. |
| **Extensions or Alternate Flow** | - **[Step 3] No Data Available** → The system informs the supervisor that no data matches the selected parameters.<br>- **[Step 6] Report Formatting Error** → The system logs the error and provides an alternative format.<br>- **[Step 7] Export Failure** → The system retries exporting or provides a download link later. |
| **Frequency of Use** | Multiple times per day, depending on cost reporting needs. |
| **Business Rules** | - Only authorized supervisors can generate cost reports.<br>- Reports must be generated within a maximum of 30 seconds. |
| **Assumptions** | - The system maintains accurate and real-time repair records.<br>- The supervisor has permission to access all cost data. |
| **Notes** | - Future versions may include graphical visualizations and trend analysis. |
| **Status** | Active |
| **Owner** | Admin |
| **Priority** | Medium |

---

<a id="uc-011"></a>
## Monitor Worker Performance (UC-011)

| **Attribute** | **Details** |
|--------------|------------|
| **ID** | UC-011 |
| **Title** | Monitor Worker Performance |
| **Description** | This use case allows a supervisor to monitor the performance of a worker. The system retrieves and displays performance metrics and allows for adjustments. |
| **Primary Actor** | Supervisor |
| **Secondary Actor** | System |
| **Preconditions** | - The supervisor must be logged into the system. |
| **Postconditions** | - Worker performance metrics are retrieved and displayed.<br>- Performance adjustments are made. |
| **Dependency** | None |
| **Generalization** | None |
| **Main Success Scenario** | 1. The supervisor logs into the system.<br>2. The supervisor selects "Monitor Worker Performance."<br>3. The system retrieves worker performance metrics.<br>4. The supervisor views the metrics.<br>5. The supervisor adjusts performance if needed. |
| **Extensions or Alternate Flow** | - **[Step 3] No Performance Data Found** → The system informs the supervisor that no performance data exists. |
| **Frequency of Use** | Multiple times per day, depending on performance monitoring needs. |
| **Business Rules** | - Only authorized supervisors can monitor worker performance. |
| **Assumptions** | - The system maintains accurate and real-time performance records.<br>- The supervisor has permission to access all performance data. |
| **Notes** | - Future versions may include automated notifications for performance adjustments. |
| **Status** | Active |
| **Owner** | Admin |
| **Priority** | Medium |

---

<a id="uc-012"></a>
## Request Statistical Reports (UC-012)

| **Attribute** | **Details** |
|--------------|------------|
| **ID** | UC-012 |
| **Title** | Request Statistical Reports |
| **Description** | This use case allows the mayor to request statistical reports on road repairs, including the number of completed, pending, and high-priority tasks. The system generates and formats reports based on selected parameters. |
| **Primary Actor** | Mayor |
| **Secondary Actor** | System |
| **Preconditions** | - The mayor must be logged into the system.<br>- The system must have up-to-date repair data. |
| **Postconditions** | - The system generates and displays the requested statistical report.<br>- The report is formatted for review and export. |
| **Dependency** | None |
| **Generalization** | None |
| **Main Success Scenario** | 1. The mayor logs into the system.<br>2. The mayor navigates to "Request Statistical Reports."<br>3. The system prompts the mayor to select report parameters (e.g., date range, priority, region).<br>4. The mayor confirms the selection.<br>5. The system retrieves relevant repair data.<br>6. The system generates a formatted statistical report.<br>7. The mayor views the report on the system dashboard.<br>8. The system provides an option to export the report as PDF/CSV. |
| **Extensions or Alternate Flow** | - **[Step 3] No Data Available** → The system informs the mayor that no data matches the selected parameters.<br>- **[Step 6] Report Formatting Error** → The system logs the error and provides an alternative format.<br>- **[Step 7] Export Failure** → The system retries exporting or provides a download link later. |
| **Frequency of Use** | Weekly or as needed for review meetings. |
| **Business Rules** | - Only authorized users (mayor and senior officials) can request reports.<br>- Reports must be generated within a maximum of 30 seconds. |
| **Assumptions** | - The system maintains accurate and real-time repair records.<br>- The mayor has permission to access all statistical data. |
| **Notes** | - Future versions may include graphical visualizations and trend analysis. |
| **Status** | Active |
| **Owner** | Admin |
| **Priority** | High | 