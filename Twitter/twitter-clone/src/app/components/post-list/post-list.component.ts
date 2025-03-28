import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngFor, ngClass
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() userId!: number;
  @Output() postSelected = new EventEmitter<number>();
  posts: any[] = [];
  selectedPostId!: number;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadPosts();
  }

  ngOnChanges() {
    this.loadPosts();
  }

  loadPosts() {
    this.apiService.getPosts(this.userId).subscribe(posts => {
      this.posts = posts;
      if (posts.length > 0) {
        this.selectedPostId = posts[0].id;
        this.postSelected.emit(this.selectedPostId);
      }
    });
  }

  onPostSelect(postId: number) {
    this.selectedPostId = postId;
    this.postSelected.emit(postId);
  }
}