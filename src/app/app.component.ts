import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  parkingDetails: any;
  time: string;
  boxData: any = [];


  constructor() {
    this.title = "Car-Parking";
    this.time = new Date().toLocaleString();
    this.parkingDetails = []
  }

  deleteFieldValue(index: any) {
    this.parkingDetails.splice(index, 1);
    this.boxData.splice(index, 1);
  }

  bookSlot(slot: any, type: any) {
    this.parkingDetails.push({
      parking_slot_no: slot,
      booking_status: 'Booked',
      booked_by: "",
      parking_catagory: type,
      booking_time: this.time
    })
  }

  onParkingAdded(parkingData: { parkingSlotNo: string, bookingStatus: string, bookedBy: string, parkingCatagory: string, bookingTime: string }) {
    this.parkingDetails.push({
      id: 1,
      parking_slot_no: parkingData.parkingSlotNo,
      booking_status: parkingData.bookingStatus,
      booked_by: parkingData.bookedBy,
      parking_catagory: parkingData.parkingCatagory,
      booking_time: parkingData.bookingTime
    })
    
    this.boxData = [...this.parkingDetails];
  }
}
