import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../models/trip';

@Component({
selector: 'app-trip-card',
standalone: true,
imports: [CommonModule],
templateUrl: './trip-card.html',
styleUrls: ['./trip-card.css']
})
export class TripCardComponent implements OnInit {
@Input('trip') trip: any;
constructor() {}
ngOnInit(): void {
}
}

