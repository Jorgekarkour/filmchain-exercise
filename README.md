# filmchain-exercise

INSTRUCTIONS FOR BACK-END FOLDER:
In order to make the app work against a DB you have to create a .env file inside the "filmchain-test-app-backend" folder.

Then you need to run a PostgresQL server and create a DATABASE called "filmchain_test_app"

After that copy and paste the following code in your ".env" file:

DATABASE_URL="postgresql://USER:PASSWORD@DB_URL:PORT/filmchain_test_app?schema=public"

NOTE: the ports are usally by default "5432" unless you have changed then.
NOTE: if you are on a Mac the USER and PASSWORD are the same as your Mac Computer.

Once you have everything setted up, open your terminal inside "filmchain-test-app-backend" folder and run the followings commands:

npm install
npx prisma migrate dev --name "init"
npx prisma generate

Finally run the app by typing "npm start" command.

INSTRUCTIONS FOR FRONT-END FOLDER:

Just run "npm install" and "npm start" commands!

Enjoy!

PD: I couldn't refactor the code because time-issues.
