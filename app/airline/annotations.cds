using AdminService as service from '../../srv/admin-service';
annotate service.Aireline with @UI : { 
    LineItem  : [
        {Value: AirlineID},
        {Value: Name}
    ]
 };
