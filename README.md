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


## Deployment to SAP Business Technology Platform

The project contains a configuration for deploying the CAP services and the SAP Fiori app to the SAP Business Technology Platform (SAP BTP) using a managed application router. The app then becomes visible in the content manager of the SAP Launchpad service.

### Build the Project

Build the project from the command line:

```shell
mbt build
```

The build results will be stored in the directory `mta_archives`.

### Deploy

1. Log in to the target space.
2. Deploy the MTA archive using the CF CLI: `cf deploy mta_archives/****.mtar`

### Local Development with a HANA Cloud Instance

You need to have access to a HANA Cloud instance and SAP BTP.

1. Deploy the HDI content to a HANA HDI container (which is newly created on first call): `cds deploy --to hana`.
2. Start the application with the Spring Profile `cloud`.
   1. From Maven: `mvn spring-boot:run -Dspring-boot.run.profiles=cloud`
   2. From your IDE with the JVM argument `-Dspring.profiles.active=cloud` or env variable `spring.profiles.active=cloud`

The running application is now connected to its own HDI container/schema. Please keep in mind that the credentials for
that HDI container are stored locally on your filesystem (default-env.json).


