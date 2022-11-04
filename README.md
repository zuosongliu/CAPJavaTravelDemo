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


