import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  employees=[
    {
      Name:'Roman Bhattarai',
      Code:11,
      JoinedDate:'02/02/2021',
      Email:'aaa.gmail.com',
      Gender:'Male',
      Address:'Koteshor',
      Position:'Software Developer',
      MobileNo:'9845xxxxxx'},
      {
        Name:'Roshan Bhattarai',
        Code:12,
        JoinedDate:'01/02/2021',
        Email:'aaa.gmail.com',
        Gender:'Male',
        Address:'Tinkune',
        Position:'Software Developer',
        MobileNo:'9845xxxxxx'},
        {SN:1,
          Name:'Prajwal Shrestha',
          Code:13,
          JoinedDate:'03/04/2021',
          Email:'prajwal.gmail.com',
          Gender:'Male',
          Address:'Bhaktapur',
          Position:'Backend Developer',
          MobileNo:'9845xxxxxx'},
          {SN:1,
            Name:'Pramesh Adhikari',
            Code:14,
            JoinedDate:'04/08/2020',
            Email:'pram.gmail.com',
            Gender:'Male',
            Address:'Thimi',
            Position:'Software Developer',
            MobileNo:'9845xxxxxx'},
            {SN:1,
              Name:'Rishi Khatri',
              Code:16,
              JoinedDate:'08/02/2018',
              Email:'aaa.gmail.com',
              Gender:'Male',
              Address:'Budhanilkantha',
              Position:'Backend Developer',
              MobileNo:'9845xxxxxx'},
              

                   

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
