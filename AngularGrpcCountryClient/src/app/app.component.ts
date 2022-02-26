import { Component, OnInit } from '@angular/core';
import {grpc} from "@improbable-eng/grpc-web";
import {CountryService} from ".././generated/country_pb_service";
import {EmptyRequest, CountriesReply} from ".././generated/country_pb";
import { CountryModel } from './models/CountryModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'grpc-web-demo';
  public countries: CountryModel[] = []; 

  public ngOnInit() {

    const getCountryRequest = new EmptyRequest();
    console.log("1 " + JSON.stringify(getCountryRequest));
    grpc.unary(CountryService.GetAll, {
      request: getCountryRequest,
      host: "https://localhost:5001",
      onEnd: res => {
        console.log("2 "+ JSON.stringify(res));
        const { status, message } = res;
        if (status === grpc.Code.OK && message) {
        console.log("3 " + JSON.stringify(status) + " " + JSON.stringify(message));
        var result = message.toObject() as CountriesReply.AsObject;
        this.countries = result.countriesList.map(country => 
          <CountryModel>({
            name: country.name,
            description: country.description
          }));
        }
      }
    });
  }
}