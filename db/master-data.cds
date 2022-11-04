using { sap, managed,Currency } from '@sap/cds/common';
namespace  sap.fe.cap.travel;

aspect MasterData {}

entity Airline : MasterData {
  key AirlineID : String(3);
  Name          : String(40);
  CurrencyCode  : Currency;
  AirlinePicURL : String      @UI : {IsImageURL : true};

};

