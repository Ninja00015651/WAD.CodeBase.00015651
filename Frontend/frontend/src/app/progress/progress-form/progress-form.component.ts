import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgressService } from '../../services/progress.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-progress-form',
  templateUrl: './progress-form.component.html',
  styleUrls: ['./progress-form.component.scss'],
  imports: [FormsModule]
})
export class ProgressFormComponent implements OnInit {
  progress: any = { userId: 0, date: '', steps: 0, description: '', caloriesConsumed: 0 };
  isEditMode = false;

  constructor(
    private progressService: ProgressService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.progressService.getProgressById(+id).subscribe(data => (this.progress = data));
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.progressService.updateProgress(this.progress.progressId, this.progress).subscribe(() => {
        this.router.navigate(['/progress']);
      });
    } else {
      this.progressService.createProgress(this.progress).subscribe(() => {
        this.router.navigate(['/progress']);
      });
    }
  }
}
