import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngFor
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnChanges {
  @Input() postId!: number;
  comments: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnChanges() {
    if (this.postId) {
      this.apiService.getComments(this.postId).subscribe(comments => {
        this.comments = comments;
      });
    }
  }
}