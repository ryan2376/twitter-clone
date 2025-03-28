import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  username: string = '';
  loading = false; // Add loading state

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadUser();
    this.loadPosts();
  }

  ngOnChanges() {
    this.loadUser();
    this.loadPosts();
  }

  loadUser() {
    this.apiService.getUsers().subscribe(users => {
      const user = users.find(u => u.id === this.userId);
      this.username = user ? user.username : 'Unknown';
    });
  }

  loadPosts() {
    this.loading = true;
    this.apiService.getPosts(this.userId).subscribe(posts => {
      this.posts = posts;
      this.loading = false;
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

  getRelativeTime(): string {
    return "5m ago";
  }
}