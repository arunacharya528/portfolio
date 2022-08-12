# Portfolio Site

This is a simple portfolio site created with [ReactJS](https://reactjs.org), [NodeJS](https://nodejs.org), [FaunaDB](https://fauna.com), [TailwindCSS](httos://tailwindcss.com) and [DaisyUI](htps://daisyui.com).

To run this project, clone this project to your local machine and follow these steps:

1. Run `npm install` after cloning to install all required packages from `package.json`
2. Create an environment file named `.env` and store line `REACT_APP_FAUNA_SECRET=<your-faunadb-assigned-secret-key>`
3. Then run your application with `npm start`

## Prerequisite to run this site
Your database has to have a certain structure to get and preview data from faunadb.

Create these collection and indexes as follows:


| Collection name     | Index title | Document structure    |
| -----------       |    -----------  |          -----------|
| info      | all_info       | {name:String, value:String}   |
| experiences   | all_experience        | {title:String, duration:String, description:String}     |
|projecst |all_projects |{name:String, description:String, link:String, tag:String(comma seperated values), created_at: Datetime(format: YYYY-MM-DD)} |

These are the structure that i made. You can extend your work as you like.

Happy coding!!