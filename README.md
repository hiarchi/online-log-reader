# online-log-reader
The following project streams the data of file present on the server and displays it on the Port of the server where the client is connected.

# Steps to run
1. clone the repo inside your local device.
2. Run ``` npm install``` to install all the dependencies of the FrontEnd & BackEnd folder.
3. Run ```node Server_file.js``` in the Backend folder and ```npm start``` in a new terminal for the FrontEnd.
4. Also, along with ```node Server_file.js``` you can also use the Client1.html file as a client present in the Backend folder.
4. Try making some changes in the Text_file.txt present in the BackEnd folder. The changes will be shown on the terminal of the server.


# Tech Stack Used - 
For FRONTEND we used React.

For BACKEND I used Node.js and Express.js. Also used Server Sent Events in place of Web Sockets.

# Dependencies Installed -
FRONTEND -: Jest-dom, React, React-dom.

BACKEND -: Express, CORS, Body-parser.
