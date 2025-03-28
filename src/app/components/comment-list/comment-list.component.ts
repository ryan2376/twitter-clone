import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  loading = false; // Add loading state

  constructor(private apiService: ApiService) { }

  ngOnChanges() {
    if (this.postId) {
      this.loadComments();
    }
  }

  loadComments() {
    this.loading = true;
    this.apiService.getComments(this.postId).subscribe(comments => {
      this.comments = comments;
      this.loading = false;
    });
  }

  getRelativeTime(): string {
    return "2m ago";
  }
}