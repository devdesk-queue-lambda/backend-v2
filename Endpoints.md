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

`GET` /api/tickets

Returns: Array of created tickets / Error.

`POST` /api/tickets

Should recieve:
* type
* description
* owner
* date
* resolved

Returns: Success message / Error.

`PUT` /api/tickets/:id

Should recieve:
* type
* description
* owner
* date
* resolved

Returns: Updated ticket / Error.

`DEL` /api/tickets/:id

Returns: Nothing / Error.

## Users

`GET` /api/users

Returns: Array of users / Error.

`POST` /api/users

Should recieve:
* username
* password

Returns: Newly created user / Error.

`PUT` /api/users/:id

Should recieve:
* new authType of user

Returns: Updated user / Error.

`DEL` /api/users/:id

Returns: Nothing / Error.
