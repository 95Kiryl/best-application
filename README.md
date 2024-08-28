# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

There are two pages in the project.
The main page, receives data from [https://jsonplaceholder.typicode.com/posts] (https://jsonplaceholder.typicode.com/posts) and renders the received data in the form of separate cards.
Clicking on the LogIn button takes you to the registration page, where you can enter the username and send the data. After submitting the form, you will receive a request at [https://jsonplaceholder.typicode.com/users ?username=<username>](https://jsonplaceholder.typicode.com/users?username=<username>) where <username> is their user that you entered in the field. If no one knows about the use, a warning will appear about it. If the user's data has arrived, it is saved in the global storage, a redirect to the main page takes place and the LogIn button changes to the LogOut button.
To check the registration, try using one of the following names: Bret, Antonette, Samantha, Karianne.
When you click on the LogOut button, the user's data is deleted from the global storage and the button changes to LogIn.
To launch the application download the files to your local computer and run the npm start command in the console.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
