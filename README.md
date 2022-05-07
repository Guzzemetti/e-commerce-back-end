# e-commerce-back-end
---

## Table of Contents
  * [Objective](#objective)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Contact](#contact)
  * [Repository](#repository)
  * [Demonstration](#demonstration)

---
## Objective

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
---

## Usage
To install this program, please copy the below SSH Link to clone it to your machine. Once cloned, you should then use your command terminal and enter "node index.js", this will initiate the main script. 

`git@github.com:Guzzemetti/e-commerce-back-end.git`

To begin use, the user must use npm to install all the corresponding dependencies. Once the dependencies have been installed and the schema properlly loaded, the user may then use the command `npm run seed` to run the auto-seed function.

After the database has been seeded, the user may then use their server hosting application of choice to deploy the application to local host to test appropriate http requests.

Please note that this does not deploy a fully working webpage, but is rather an application to test and verify routes for an API.

---

## Contributors

John Guzzetta

---
## Contact

Email: johnguzzettaiv@gmail.com

GitHub: [Guzzemetti](#https://github.com/Guzzemetti/)

---
## Repository

`https://github.com/Guzzemetti/e-commerce-back-end`

---
## [Demonstration](https://drive.google.com/file/d/10myZ6lQaQGvxzrd2lbbpxFtuH9xsXomG/view)