import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSelectComponent } from './components/user-select/user-select.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    UserSelectComponent,
    PostListComponent,
    CommentListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedUserId: number = 1;
  selectedPostId: number | null = null; // Store the postId

  onUserSelected(userId: number) {
    this.selectedUserId = userId;
    this.selectedPostId = null; // Reset selected post when user changes
  }

  onPostSelected(postId: number) {
    this.selectedPostId = postId;
  }
}