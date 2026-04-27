import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDataService } from '../services/trip-data';
import { TripCardComponent } from '../trip-card/trip-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css']
})
export class TripListingComponent implements OnInit {

  trips: any[] = [];
  message = '';

  constructor(private tripData: TripDataService,
  private router : Router) {
  console.log('trip-listing constructor')}

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  ngOnInit(): void {
    this.tripData.getTrips().subscribe({
      next: (value: any) => {
        this.trips = value;

        if (value.length > 0) {
          this.message = `There are ${value.length} trips available.`;
        } else {
          this.message = 'There were no trips retrieved from the database';
        }

        console.log(this.message);
      },
      error: (error: any) => {
        console.log('Error:', error);
      }
    });
  }
}
