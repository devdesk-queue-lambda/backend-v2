## Database Tables

### Users

* id: primary-key, auto-increments
* username: string, required
* password: string, required
* authType: string

### Tickets

* id: primary-key, auto-increments
* type: string, required
* description: string, required
* owner: integer, required, points to the user id who created the ticket
* assigned: integer, points to the helper id assigned to the ticket
* date: date
* ressolved: boolean

## Login/Authentication

`POST` /api/auth/register

Should recevie:
* username
* password

Returns: Newly created user / Error.

`POST` /api/auth/login

Should recevie:
* username
* password

Returns: Username and token / Error.

## Tickets

`GET` /api/auth/tickets

Returns: Array of created tickets / Error.

`POST` /api/auth/tickets

Should recieve:
* type
* description
* owner
* date
* resolved

Returns: Newly created ticket / Error.

`PUT` /api/auth/tickets

Should recieve:
* type
* description
* owner
* date
* resolved

Returns: Updated ticket / Error.