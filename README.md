# NextJS publicRuntimeConfig Test

This is a [Next.js](https://nextjs.org/) project bootstrapped with  
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).  

This app was created to test changes to how publicRuntimeConfig works with recent  
versions of NextJS.   

## Learn More About NextJS

To learn more about Next.js, take a look at the following resources:  

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.  
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.  

## Installation and Set Up  
Below are the instructions for installing this application.  
*These instructions are valid as of 2021.07.13*  

### Environment Set Up  
1. Clone this repository to your local environment.  
  1. Fork this Github repo.  
    1. In a web browser, visit https://github.com/NFabrizio/nextjs-publicRuntimeConfig-test  
    2. Click the Fork button in the upper right corner of the screen  
    3. In the "Where should we fork this repository?" pop up, select your username.  
    Github should create a fork of the repo in your account  
  2. Clone your fork of the nextjs-publicRuntimeConfig-test repo.  
    1. In the terminal on your local environment, navigate to the directory where  
    you want to clone the nextjs-publicRuntimeConfig-test repo  
      `cd ~/path/to/your/directory`  
    2. In the terminal, run:  
      `git clone [clone-url-for-your-fork]`  
      The URL should be in the format git@github.com:YourUsername/nextjs-publicRuntimeConfig-test.git  

## Application Use  
1. Navigate to the directory where the application code was cloned.  
  `cd ~/path/to/your/directory/nextjs-publicRuntimeConfig-test`  
2. Install the dependencies.  
  `npm install`  
3. Build the application.  
  `npm run build`  
4. Run the application.  
  `npm start`  
  Notice that the application displays "myDefault" as the value of publicRuntimeConfig.env.  
5. Stop the application.  
  Ctrl + C  
6. Set the environment variable.  
  - MacOS: export MY_ENV=local  
  - Windows: set MY_ENV=local  
7. Run the application again.  
  `npm start`  
  Notice that the application still displays "myDefault" as the value of publicRuntimeConfig.env.  
8. Stop the application.  
  Ctrl + C  
9. Remove the build files.  
  `rm -rf .next`  
10. Set the environment variable.  
  - MacOS: export MY_ENV=local  
  - Windows: set MY_ENV=local  
11. Rebuild the application.  
  `npm run build`  
12. Run the application again.  
  `npm start`  
  Notice that the application now displays "local" as the value of publicRuntimeConfig.env.  
