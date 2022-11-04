using {sap.fe.cap.travel as db} from '../db/master-data';

service AdminService @(path:'/admin'){

    entity Aireline as projection on db.Airline;   

}