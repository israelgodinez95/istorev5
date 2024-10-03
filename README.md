This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Initialize Next.js Project Web App   

First, go to desired directory and run the following command: npm init next-app@latest my-app.

## Github Repository Connection

Create a new repository without README.md file and follow:
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/vercel/next.js/tree/canary/examples/my-app.git
git push -u origin main

## BACKEND

## Backend setting up   

mkdir backend
npm init -y
npm install express dotenv mongoose cors

## Update .gitignore

Adding node modules from backend in the gitignore: backend/node_modules/

## Eslint config

Need to make more research about this, for vite: npm i standard -D + lines to package.json, not sure if works only for vite.


## Create connection

index.js -> server.js -> config.js -> .env (remeber to add .env to gitignore)

## Nodemon setup

npm i nodemon -D or npm install nodemon --save-dev







## Create Backend Folder 

## Backend Init 

mkdir backend
npm init -y
npm install express dotenv mongoose cors    

## Gitignore

Adding node modules from backend in the gitignore 

## Eslint config
npm i standard -D + lines to package.json, not sure if works only for vite

## Create index.js

## Connection Front to Back
Modifying page.tsx, important to add use client at the beggining, npm run dev for front + node index.js for back to test

## Setup MongoDB at backend

Create  db folder + config.js   

## Create DB cluster

New project nedded because 1 cluster is allowed per project, advanced options to select shared cluster, modify IP Acces List Entry by allowing acces from anywhere

npm install mongo db in the backend folder 

brach should be changed to main since the beginning

## Mongo DB creation

Put connection details in .env file, in the backend folder
Connect button in mongodb.com to see how to, then mongodb compass for create new connection, maybe new databasemust be created.....pending....

## Pages work as follows 

https://nextjs.org/docs/app/building-your-application/routing

new folder creates a new route, inside of it should be a page.tsx if its public

rouring is as simple as creating a "<Link>"
routing is as simple as creating a "<Link>"

## Bug npm run dev -> next dev

Erase .next folder and re run
Erase .next folder and re run

## Follow and create MVC model files in backend

.env file creation
server.js + config.js + index.js modify 
controller.js + model.js + routes.js

## Postman test using endpoints

GET on http://localhost:3001/api/products with body:
{
    "name":"Product 4",
    "price": "59.99"
} 
there was an issue when creating a new product because productModel was using Pre Schema, commented to avoid error

Server.js modified to put '/' single route to show basic html

## Deploy Backend using Render

Procfile with web: npm run start

Push to Github -> Link account -> Put env variables 

Build and depliy settings are: main branch, backend root folder -> npm install -> npm run dev 

Modify fronend fecth or axios url to put new from backend deploy


## Deploy Frontend using Vercel

Make account and link 
