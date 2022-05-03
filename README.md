<h1 align="center"> Real State App Backend</h1>

<p align="center">
    <a href="#about">About</a>
    - <a href="#technologies">Technologies</a>
    - <a href="#Features">Features</a>
    - <a href="#pre">Prerequisites</a>
    - <a href="#running">Running the application</a>
    - <a href="#personal">Personal</a>
</p>
 
<h2 id="about">About ✨</h2>
 
This project is being developed to implement my portfolio and show my backend knowledge. In the future I will develop the frontend.
 
<h2 id="technologies">Technologies 💻</h2>
 
- Node.js
- Express
- Prisma.io
- Typescript
 
<h2 id="Features">Features 🔥</h2>

* [X] Basic Type API
* [X] Basic Additional API
* [ ] Basic User API
* [ ] Basic Announcement API
* [ ] Filter Announcements
* [ ] Sort Announcements
* [ ] Create pagination in Announcements

<h2 id="pre">Prerequisites ✏️</h2>
 
For this project to work, you will need some tools:
* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/download/)
 
<h2 id="running">Running the application 🎲</h2>
 
```bash
# Clone the repository
$ git clone https://github.com/HugoCortezL/real-state-backend
 
# Access the folder
$ cd real-state-backend
 
# Install all dependencies
$ npm install

# SETUP DATABASE
#First you have to open de mysql command line client - unicode. And enter
$ CREATE DATABASE realstate

#Next you have to use your access in schema.prisma

#Then you run on terminal
$ npx prisma migrate dev --name init
 
# Start the service
$ npm start
```
 
<h2 id="personal">Personal 🙋‍♂️</h2>
 
Linkedin: https://www.linkedin.com/in/hugo-vitorino/
</br>
Email: hugocortezprog@gmail.com
