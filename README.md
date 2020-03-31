[![patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/bePatron?u=12280211)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# Keycloak React

A demo project created to demonstrate how a react project can be secured using a Keycloak server via authorization token.

Realm configuration and users must be imported from the Spring Keycloak project in the requirements.

## Requirements
- Keycloak server 6.0.1
- https://github.com/czetsuya/Spring-Keycloak-with-REST-API

## Testing

Functional components: Home, Dashboard, Customers, Documentation

Customer CRUD should be functional too, provided that Keycloak authentication server and Spring backend REST API are running and configured.

## Note
- Make sure that you have the same Keycloak client credentials value for the 2 project ands Keycloak server.
