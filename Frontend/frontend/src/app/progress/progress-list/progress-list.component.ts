import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../../services/progress.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-list',
  templateUrl: './progress-list.component.html',
  styleUrls: ['./progress-list.component.scss'],
  imports: [CommonModule]
})
export class ProgressListComponent implements OnInit {
  progressEntries: any[] = [];

  constructor(private progressService: ProgressService) {}

  ngOnInit(): void {
    this.loadProgress();
  }

  loadProgress(): void {
    this.progressService.getProgress().subscribe(data => {
      this.progressEntries = data;
    });
  }

  editProgress(id: number): void {
    // Implement navigation to the progress form with ID
  }

  deleteProgress(id: number): void {
    this.progressService.deleteProgress(id).subscribe(() => {
      this.loadProgress(); // Reload progress after deletion
    });
  }
}
