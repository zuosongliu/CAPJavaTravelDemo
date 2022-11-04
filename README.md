# CAPJavaTravelDemo

This is a sample application for CAP JAVA demo with UI/DB/SRV. This app can be deployed to BTP directly and run locally.


## SAP Fiori UI with Java Backend

### Build and Run

In the root folder of your project run
```
npm ci
mvn spring-boot:run
```

To start the middleware, in another console execute
```
cd app\travel_processor
npm start
```

### Accessing the SAP Fiori App

Open this link in your browser:
http://localhost:8080/index.html

Note: If you access the CAP Java server directly without middleware, you will have to enter mock user credentials admin / admin which are maintained in file application.yml.

### Find backend service in local

* XS-APP : this file is used to route backend service
* ui5.yaml: this file contains customMiddleware which is used to route locally
- mountPath: it is used in manifest
- baseUri: this one should be the backend service url which is routed to 
- @(path:'/admin'): the service path should be contained in service cds file

### Find backedn service on BTP

* XS-APP: this file is used to route backedn service with the destination name
* ui5-deploy.yaml: this file is used to zip fiori content with xs-app file
* package.json: contains scripts using ui5-deploy.yaml file
* service path
![image](https://user-images.githubusercontent.com/38774601/199872822-7b3922c9-48ec-4326-8e41-f60590dd07de.png)

* mta.yaml: this will create destination service for backend on BTP
![image](https://user-images.githubusercontent.com/38774601/199872778-596f743e-81dd-4cb9-b622-2392a826c037.png)




