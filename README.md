# hackerspace-bot

## Prerequisite
- [Node v14.2.0 and above](https://nodejs.org/en/) or [Yarn](https://yarnpkg.com/lang/en/docs/install/)
1. Create an application at https://discord.com/developers/applications
2. Create a bot and copy out the api key in the bot section from the menu on the left.

## To run locally:

1. Run
    ```bash
    $ cp .env.example .env
    ```
2. Open `.env` file and replace the token gotten from the discord bot section.
3. Run
    ```bash
    $ npm run start
    ```

## Development

To create a new command of command_name

```bash
$ ./program.sh <command_name>
```

### Permission

1. Add the following variables in `.env` file:
   ```
   ADMIN_ROLE_ID=<Admin's role ID>
   MEMBER_ROLE_ID=<Member's role ID>
   ```
2. Get each role ID from the Discord server under `Settings > Roles` by right-clicking them. (Need to enable Developer Mode under `User Settings > Appearance`)
3. Add `import { role } from '../config.js'` to the top of your command file.
4. Add `permission: []` property to the command object.

Example:
```js
// This will allow users with admin or member role to access this command
permission: [role.admin, role.member]
```
