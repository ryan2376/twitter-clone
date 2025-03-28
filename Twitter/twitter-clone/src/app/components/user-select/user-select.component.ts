import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngFor
import { FormsModule } from '@angular/forms';   // For ngModel
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-select',
  standalone: true,
  imports: [CommonModule, FormsModule], // Added FormsModule
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.css']
})
export class UserSelectComponent implements OnInit {
  users: any[] = [];
  selectedUserId: number = 1;
  @Output() userSelected = new EventEmitter<number>();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe(users => {
      this.users = users;
      this.userSelected.emit(this.selectedUserId);
    });
  }

  onUserChange(event: Event) {
    const userId = +(event.target as HTMLSelectElement).value;
    this.selectedUserId = userId;
    this.userSelected.emit(userId);
  }
}