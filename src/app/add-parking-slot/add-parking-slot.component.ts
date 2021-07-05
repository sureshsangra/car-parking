import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-parking-slot',
  templateUrl: './add-parking-slot.component.html',
  styleUrls: ['./add-parking-slot.component.css']
})
export class AddParkingSlotComponent implements OnInit {
  parkingSlot: string= '';
  personName: string= '';
  personCatagory: string= '';
  parkingTime: string= '';
  parkingStatus: string= '';
  closeResult: string= '';
  catagoryList: string[] = ["women", "accessibility", "elderly", "general Category"];
  @Output() parkingData = new EventEmitter<{parkingSlotNo: string, bookingStatus:string, bookedBy: string, parkingCatagory: string,bookingTime: string}>();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit() {
    this.parkingData.emit({
      parkingSlotNo: this.parkingSlot,
      bookingStatus: 'Booked',
      bookedBy: this.personName,
      parkingCatagory: this.personCatagory,
      bookingTime: new Date(this.parkingTime).toLocaleString()
    });
    this.parkingSlot = ''
    this.personName ='';
    this.personCatagory = '';
    this.parkingTime = '';
    this.parkingStatus = '';
    this.modalService.dismissAll(); //dismiss the modal
  }

}
