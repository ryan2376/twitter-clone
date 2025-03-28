import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For structural directives
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
  ], // Import child components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedUserId: number = 1;
  selectedPostId!: number;

  onUserSelected(userId: number) {
    this.selectedUserId = userId;
  }

  onPostSelected(postId: number) {
    this.selectedPostId = postId;
  }
}