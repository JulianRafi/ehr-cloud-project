# EHR System

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Overview
The EHR system is designed to facilitate the management of patient records. It allows healthcare providers to access, update, and store patient information securely, whether they are connected to the internet or working offline. Key features include patient data management, appointment scheduling, and secure data synchronization between offline and online modes.

# Main Features
**User Authentication:** Users can log in to access the system.

**Dashboard Access:** Upon successful login, users are directed to the dashboard where they can view summaries and health records.

**Patient Records Management:** Users can search, view, update, and add patient records.

**Offline Mode:** In offline mode, users can continue to access and update records. Changes are stored locally.

**Data Synchronization:** When back online, the system automatically syncs local changes with the central database

# Frameworks Used
Frontend: React.js (bootstrapped with Create React App)

Backend & Database: Firebase (Firestore for the database, Firebase Authentication for user authentication)

Styling: SCSS Modules / Styled Components

Offline Support: Firebase

# How to use

### git clone https://github.com/JulianRafi/ehr-cloud-project.git

This command will clone the repository into your local machine. Make sure to go to the directory using **'cd ehr-cloud-project'**

### npm install
After going to the ehr-cloud-project directory, start the npm installation. This command will read the package.json file and install all the listed dependencies, setting up the project for development and ensuring that all required packages are available locally.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

