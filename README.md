# City Road Maintenance and Service Management Project

## Table of Contents

- [Problem Statement](#problem-statement)
- [Software Background](#software-background)
- [Features](#features)
- [Project Setup](#project-setup)
  - [Live Deployment](#live-deployment)
  - [Technologies Used](#technologies-used)
  - [Repository Structure](#repository-structure)
- [System Design](#system-design)
  - [DFD Model](#dfd-model)
  - [Use Case Diagram](#use-case-diagram)
  - [Domain Model](#domain-model)
  - [Sequence Diagram](#sequence-diagram)
- [Testing](#testing)
  - [Playwright](#playwright)
  - [Testing Methodology](#testing-methodology)
- [Website Demonstration](#website-demonstration)
  - [Citizen](#citizen)
  - [Supervisor](#supervisor)
  - [Admin](#admin)
  - [Mayor](#mayor)
- [Results](#results)
- [Summary](#summary)
- [Limitations and Future Scope](#limitations-and-future-scope)
- [References](#references)
- [Group Members](#group-members)

## Problem Statement

In a city with a population exceeding five lakh, residents often struggle to access timely information about civic facilities or report infrastructure issues, particularly those concerning road maintenance such as potholes, open drains, traffic congestions, and more. The current communication gap between the public and municipal bodies leads to delays in addressing road damages and a general lack of transparency in service delivery.

There is no centralized mechanism for residents to submit repair complaints, for supervisors to prioritize and track maintenance work, or for administrators to manage resources efficiently. As a result, city officials are often left without reliable data to assess performance or make informed decisions.

## Software Background

To address the challenges outlined above, the city corporation has proposed the development of a web-based platform that serves two major purposes:

1.  To provide residents with information on civic facilities, and
2.  To digitize the entire road repair management workflow.

The system will support up to 10 concurrent clicks per second, ensuring scalability for a large user base. Through this platform, citizens can submit road repair requests online, which will be automatically routed to the respective suburban branch offices. Supervisors at these offices will then assess the road conditions and determine the priority level based on severity and locality (e.g., commercial, high-traffic, or isolated areas).

Each supervisor will also estimate the necessary materials, machinery, and personnel for the job and input this data into the system through a dedicated login. The system will then generate a repair schedule based on these inputs and the current availability of resources. This availability is managed by a central administrator, who can update the system whenever manpower or machinery status changes, triggering an automatic rescheduling of pending tasks.

Supervisors will be able to periodically update work progress, which will be visible to residents through the website. Additionally, the mayor and senior officials can access statistical reports detailing completed and ongoing repairs, resource utilization, and high-priority issues across the city.

## Features

Based on the problem statement and software background, the key features of the system include:

*   Real-time Repair Request Management
*   Role-Based Dashboards (Citizen, Supervisor, Administrator, Mayor)
*   Dynamic Scheduling System
*   Statistical Reporting and Data Export (CSV)
*   User Interface and Accessibility
*   End-to-End Automated Testing

## Project Setup

### Live Deployment

The application is hosted using Cloudflare Pages.

**Application URL:** [https://crms-snu.pages.dev](https://crms-snu.pages.dev)

### Technologies Used

| Category       | Technology/Tool          | Purpose                                      |
| :------------- | :----------------------- | :------------------------------------------- |
| Frontend       | React.js, TypeScript     | Dynamic and modular user interface         |
|                | Tailwind CSS             | Utility-first CSS framework for styling      |
|                | Vite                     | Fast build tool for modern web projects    |
| Backend        | Node.js, Express.js      | RESTful API development                      |
| Database       | MongoDB                  | NoSQL database for storing application data  |
| Version Control| Git, GitHub              | Source code management and collaboration     |
| Deployment     | Cloudflare Pages         | Static site deployment for frontend        |

### Repository Structure

This project is divided across two GitHub repositories:

*   **Frontend Repository:** [unnxt30/CRMS](https://github.com/unnxt30/CRMS)
    Contains the complete frontend codebase built using React and Tailwind CSS.

*   **Document Repository:** [unnxt30/CSD326-Proj](https://github.com/unnxt30/CSD326-Proj)
    Contains the documents and required implementation diagrams of the project. This is the repository you are currently viewing.

## System Design

This section provides an overview of the system's design using various modeling techniques.

### DFD Model

#### Level 0 - Context Diagram

[Include a link to your DFD Level 0 diagram here, or embed an image if preferred]

It shows:

*   Citizens submitting repair requests and receiving status updates.
*   Supervisors accessing those requests and updating progress.
*   Administrators managing available resources.
*   Mayors requesting repair statistics.

#### Level 1

[Include a link to your DFD Level 1 diagram here, or embed an image if preferred]

Major functional components:

*   Submit Repair Request: Citizens initiate a request that enters the system.
*   Manage Repair Requests & Prioritize: Supervisors assess the condition and assign urgency.
*   Resource Estimation and Scheduling: The system schedules tasks based on priority and availability.
*   Progress Tracking: Supervisors input updates visible to citizens.
*   Generate Reports: For statistical insights requested by the mayor.

### Use Case Diagram

[Include a link to your Use Case Diagram here, or embed an image if preferred]

**Documentation:**

Detailed Use Case Descriptions: [https://docs.google.com/document/d/1_cuCjTQOCZzCC62RgJGO-0gYUhYJwPP6OrZvm8C1cgo](https://docs.google.com/document/d/1_cuCjTQOCZzCC62RgJGO-0gYUhYJwPP6OrZvm8C1cgo)

### Domain Model

[Include a link to your Domain Model here, or embed an image if preferred]

### Sequence Diagram

[Include a link to your Sequence Diagram here, or embed an image if preferred]

## Testing

We used Playwright to complete the testing of our website.

### Playwright

Playwright is an open-source automation testing framework developed by Microsoft.

It enables testing across multiple browsers (Chromium, Firefox, and WebKit).

Playwright is designed to automate web page interactions to validate functionality and simulate real user behavior.

**Key Features of Playwright:**

*   Cross-browser Testing: Allows testing across Chromium, Firefox, and WebKit.
*   Simulated User Interactions: Automates interactions like clicks, typing, and navigation.
*   Network Interception: Enables the ability to mock backend requests and responses.
*   Fast and Reliable: Optimized for high-speed and stable end-to-end testing.

### Testing Methodology Used:

*   **Test Setup:** Playwright was configured to test our TypeScript website across multiple browsers.
*   **Simulated User Behavior:** Actions like clicking buttons, filling out forms, and page navigation were automated.
*   **Assertions:** Each test involved validating page elements and content (visibility, text, buttons).
*   **Error Handling:** Utilized Playwright's debugging tools like screenshots and logs to track issues.
*   **Test Cleanup:** Ensured proper environment cleanup after each test execution to maintain stability.

We utilized 50 tests to thoroughly evaluate our TypeScript website, ensuring functionality and usability across multiple browsers.

## Website Demonstration

Screenshots demonstrating the key functionalities for each user role are included in the project report.

### Citizen

*   Request Creation
*   Request visibility in the list

### Supervisor

*   Supervisor Dashboard
*   Request Viewing & Editing
*   Updated request and dashboard
*   Schedule maintenance

### Admin

*   Dashboard
*   Admin Resource Management

### Mayor

*   Export Report
*   Generate New Report

## Results

The City Road Maintenance and Service Management System was successfully developed and deployed, demonstrating all major functionalities as outlined in the requirement specifications. The platform enables seamless coordination between residents, supervisors, administrators, and city officials, ensuring improved transparency, communication, and efficiency in road repair operations.

**Key Functional Outcomes**

*   **Real-time Repair Request Management:** Citizens can now submit detailed repair requests, which are routed to relevant supervisors based on geographic filtering. Each request is assigned a unique ID and tracked throughout its lifecycle.
*   **Role-Based Dashboards:** Each user type (Citizen, Supervisor, Administrator, Mayor) has access to a custom dashboard tailored to their responsibilities.
*   **Dynamic Scheduling System:** The backend effectively recalculates task schedules based on resource availability, priority, and severity of the issue, ensuring optimized repair workflows.
*   **Statistical Reporting and Data Export:** Mayors and senior officials can generate time-based and area-based performance reports, with CSV export functionality for administrative records and future planning.
*   **User Interface and Accessibility:** The web application is responsive, minimalistic, and easy to use. It has been tested for functionality across major browsers and platforms.
*   **Successful Testing and Validation:** Using Playwright, 50+ end-to-end tests were conducted simulating real user behavior such as request submissions, updates, and administrative actions. The application passed these tests with consistent results, ensuring system robustness.
*   **Performance and Stability:** The system handles up to 10 concurrent interactions per second as required, demonstrating scalability for a city-level deployment. Page load times were consistently under 5 seconds under normal conditions. No critical bugs or bottlenecks were identified during integration testing.

## Summary

The City Road Maintenance and Service Management System was conceptualized and developed as a scalable, modular web application aimed at digitizing road repair operations for a large urban population. The system addresses the inefficiencies of manual civic complaint handling by providing an integrated platform for residents, municipal supervisors, administrative staff, and city officials.

From a development standpoint, the project followed structured software engineering practices, beginning with a comprehensive requirements analysis that informed the design of data flow diagrams (DFDs), use case models, and system architecture. The application was built using a modern tech stack of React.js and TypeScript on the frontend, Node.js with Express on the backend, and MongoDB for data persistence ensuring a responsive UI and reliable data handling.

Functionally, the system supports real-time repair request submission, intelligent scheduling based on priority and resource availability, role-based dashboards, and live progress tracking. The administrative backend allows for centralized management of manpower and machinery, while city officials can generate analytical reports to assess operational efficiency.

We adopted Playwright for end-to-end automated testing, enabling consistent validation of critical workflows across browsers. This ensured system robustness and minimized the risk of regression during iterative development.

The application has been deployed via Cloudflare Pages and is accessible to stakeholders through a dedicated URL. All source code and documentation have been managed via GitHub for version control and team collaboration.

In conclusion, the system not only meets the technical and functional requirements laid out in the SRS but also sets a foundation for future enhancements such as GIS-based repair mapping, push notification services, and AI-driven predictive maintenance. It reflects a real-world, full-stack engineering solution tailored to the practical needs of civic infrastructure management.

## Limitations and Future Scope

### Limitations

*   **Lack of GIS Integration:** Location input relies on textual data or manual entry. The system currently does not integrate with GIS tools or interactive maps for geolocation-based task routing.
*   **Limited Language Support:** The application supports English only. For a city-level platform, multilingual support (especially in regional languages) would significantly improve accessibility.
*   **Static Resource Management:** Resource updates must be manually performed by administrators. The system does not yet support real-time IoT-based updates or automated tracking of equipment usage.
*   **Basic Notification System:** Notifications are limited to on-platform alerts. There is no SMS, email, or mobile push notification system implemented for real-time citizen engagement.
*   **No Mobile Application:** The platform is responsive on web browsers, but lacks a native mobile app that could offer offline features or location-based services.
*   **Role Authentication Is Simplified:** The current system uses basic role-based access control. Advanced authorization mechanisms like JWT, OAuth, or RBAC with fine-grained permissions have not yet been implemented.

### Future Scope

*   **GIS and Map-Based Input:** Integration with Google Maps, OpenStreetMap, or city-specific GIS data to allow citizens and supervisors to select and verify road locations visually.
*   **Third Party City Service Provider Access:** Introduce Bidding Systems to involve private contractors to perform tasks.
*   **Multilingual Interface:** Adding support for major Indian languages and dialects will enhance inclusivity and make the platform more usable across diverse user groups.
*   **Predictive Maintenance Using AI/ML:** Implementation of machine learning models to predict road damage based on environmental factors, traffic data, or historical records can automate preventive repairs.
*   **Mobile Application:** A native mobile app can offer additional capabilities like GPS tagging, image-based issue reporting, voice input, and offline request caching.
*   **Advanced Analytics Dashboard:** Introducing a data visualization layer for the mayor and city officials, using tools like Chart.js or PowerBI, can help drive data-driven decision-making.
*   **Integration with IoT and Smart Sensors:** Future versions may integrate smart sensors embedded in roads to automatically trigger repair requests based on vibration patterns, water seepage, or traffic stress.
*   **Secure Authentication:** Upgrade to industry-standard authentication mechanisms such as OAuth2, biometric login (for mobile), or Aadhaar-based citizen validation.

## References

*   Project Deployment: [https://crms-snu.pages.dev](https://crms-snu.pages.dev)
*   Frontend Repository – React + TypeScript: [https://github.com/unnxt30/CRMS](https://github.com/unnxt30/CRMS)
*   Backend / Documentation Repository – Node.js + Express: [https://github.com/unnxt30/CSD326-Proj](https://github.com/unnxt30/CSD326-Proj)
*   Software Requirements Specification (SRS) PDF: [https://github.com/unnxt30/CSD326-Proj/blob/main/misc/srs.pdf](https://github.com/unnxt30/CSD326-Proj/blob/main/misc/srs.pdf)
*   Use Case Diagram: [https://github.com/unnxt30/CSD326-Proj/blob/main/misc/ucd/Usecase_Diagram.pdf](https://github.com/unnxt30/CSD326-Proj/blob/main/misc/ucd/Usecase_Diagram.pdf)
*   Detailed Use Case Descriptions: [https://docs.google.com/document/d/1_cuCjTQOCZzCC62RgJGO-0gYUhYJwPP6OrZvm8C1cgo](https://docs.google.com/document/d/1_cuCjTQOCZzCC62RgJGO-0gYUhYJwPP6OrZvm8C1cgo)
*   Sequence Diagram: [https://github.com/unnxt30/CSD326-Proj/blob/main/misc/sequenceDIG.pdf](https://github.com/unnxt30/CSD326-Proj/blob/main/misc/sequenceDIG.pdf)
*   Playwright Testing Framework: [https://playwright.dev/docs/intro](https://playwright.dev/docs/intro)
*   IEEE 830 – Software Requirements Specification Standard: [https://ieeexplore.ieee.org/document/720574](https://ieeexplore.ieee.org/document/720574)
*   Cloudflare Pages: [https://pages.cloudflare.com/](https://pages.cloudflare.com/)
*   W3C Web Accessibility Guidelines: [https://www.w3.org/WAI/standards-guidelines/wcag/](https://www.w3.org/WAI/standards-guidelines/wcag/)
*   Diagram Making Software: [https://dbdiagram.io](https://dbdiagram.io)

## Group Members

*   Aaradhy Sharma - 2210110100
*   Dhruv Mishra - 2210110674
*   Jasmehar Singh Chadha - 2210110719
*   Nilesh Karthikeyan - 2210110437
*   Unnat Sharma - 2210110634
