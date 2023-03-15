
# SHA GREEN-FIELD TEAM PROJECT

## Overview
It is a cookie tracker. The app aims to allow users to track how much of their products such as fruits, vegetables, and cookies are left.

## Description

The application can be used by anyone, provided that they register. Users can track how much of their cookies are left. Users can add new cookie, update or remove cookie from the list.  
This project created using MERN Stack. **MERN Stack** was preferred for this project because it allows faster application development using only javascript and without combining different programming languages.  

   **MongoDB** is a high-performance, cost-effective database system with a schemaless database feature.  

   **Express.js** was used with Node.js, as it links easily and fast to databases.  

   **React**, and Material UI were used to enhance the web design.  

   **Node.js** was chosen for this application, as it is lightweight, efficient, has good performance, and is very fast in building web applications. In addition, there is a vast amount of tools in npm to support the developer.  
   
   This project aimed to build an application from scratch just in one week and work with a team. In the future, we would like to add some more features to the project and make the UI smoother and a nice experience for the users.  
   
## Installation

The project is uploaded to Github.

To get the project on your computer follow these steps:
1. Fork the project's repository to your Github account
2. Clone the repository from your Github account to your local hard drive `git clone [url]`
3. Open a command prompt and go to the project's repository
4. Type `npm install` to install the node package dependencies
5. Go to the *server* folder by typing `cd server`
6. Type `npm start` to run the server
7. The server should be available at `http://localhost:8000`
8. Go to the *client* folder and type `npm run dev`
9. Application should be available at `http://localhost:5173`  

## Dependencies
The project has the following dependencies,  

For the NodeJS:  

    "bcryptjs": "^2.4.3",  
    
    "body-parser": "^1.20.1",  
    
    "cookie-parser": "^1.4.6",  
    
    "cors": "^2.8.5",  
    
    "dotenv": "^16.0.3",  
    
    "express": "^4.18.2",  
    
    "jsonwebtoken": "^9.0.0",  
    
    "mongoose": "^6.8.3",  
    
    "morgan": "^1.10.0"  
      
Development dependencies:  

    "nodemon",  
    "@types/react": "^18.0.26",  
    
    "@types/react-dom": "^18.0.9",  
    
    "@vitejs/plugin-react": "^3.0.0",  
    
    "vite": "^4.0.0"  
    
 React dependencies:  
 
        "axios": "^1.2.3",  
        
        "moment": "^2.29.4",  
        
        "react": "^18.2.0",  
        
        "react-dom": "^18.2.0",  
        
        "react-hot-toast": "^2.4.0",  
        
        "react-icons": "^4.7.1",  
        
        "react-router-dom": "^6.7.0"  
        
 Environmental requirements:  
 
    Create a    .env file and fill in the following properties with your preferences: MONGO_URI, PORT, JWT_SECRET.
## How to Use?  

The application consists of two pages. One is the authentication page, and the other is the cookie track page. Initially, at the beginning of the project, the user lands at the authentication page. Users must sign up or sign in to use the application. Once the user login, he/she will be redirected to the cookie track page. Users can start to track their cookies using `Add Product` button. Users should enter product name and quantity. After clicking the `Add` Button, the product will be added to the form. Then, users can edit the number of products using the `-`, `+` buttons, or `Update` buttons, and delete the product using the `Remove` button. Users can finally log out using the `Sign Out` button.  
## Credits

Project Owners:  

-Sofia TACHMATZIDOU  

-Mehmet TOKGOZ
