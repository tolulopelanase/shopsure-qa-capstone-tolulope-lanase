# ShopSure API Test Coverage

## Overview

This document describes the API testing coverage implemented for the ShopSure QA capstone project.

The API tests were created using Postman and executed using Newman against the Automation Exercise application.

## API Test Coverage

The Postman collection contains 14 requests covering the available API operations.

The tests focus on:

- Product listing and product information.
- Product search functionality.
- User account creation and registration.
- User login and authentication.
- User account verification and deletion.
- API response validation.

## Validation Approach

The API requests include checks for:

- HTTP status codes.
- Response codes and response messages.
- Response body content.
- JSON schema structure.
- Expected API behaviour.

- ## API Execution and Reporting

The Postman collection was executed through Newman to validate the API requests outside the Postman interface.

The generated HTML report provides a record of the test execution.

**Latest recorded result:** Zero failed tests.

**Report location:** `reports/newman/shopsure-api-report.html`

## Test Environment

The API collection uses an environment file to store configurable values such as:

- Base application URL.
- Test user email.
- Test user password.
- Test user name.

Sensitive environment values are kept locally and excluded from the GitHub repository.

## Tools Used

- Postman – API request creation and test scripting.
- Newman – command-line execution of the Postman collection.
- JavaScript – API validation scripts.
- JSON – request and response data validation.

## Scope and Limitations

The tests validate the API operations and responses available on the live application.

Results may be affected by changes or temporary instability in the external application environment.
