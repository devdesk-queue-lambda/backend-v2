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

POST /api/auth/register
Should recevie:

