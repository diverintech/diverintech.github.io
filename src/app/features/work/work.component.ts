import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../../interfaces/job.interface';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../core/services/translate.service';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit, OnDestroy {
  // Array to store the list of jobs received from the service
  jobs: Job[] = [];

  // Index of the currently selected job in the timeline
  selectedJobIndex: number | null = null;

  // Subscription to manage the observable stream for job updates
  private jobsSubscription: Subscription = new Subscription();

  // Injecting the TranslationService to access the jobs data
  constructor(private translationService: TranslationService) { }

  /**
   * Lifecycle hook that runs when the component is initialized.
   * Subscribes to the jobs observable to fetch the jobs data and sets the default
   * selected job to the last one in the list if jobs are available.
   */
  ngOnInit(): void {
    this.jobsSubscription = this.translationService.jobs$.subscribe((jobs) => {
      // Store the currently selected job index
      const previousSelectedIndex = this.selectedJobIndex;

      // Update the list of jobs
      this.jobs = jobs;

      // Restore the index if it is still valid, otherwise select the last job
      if (previousSelectedIndex !== null && previousSelectedIndex < this.jobs.length) {
        this.selectedJobIndex = previousSelectedIndex;
      } else if (this.jobs.length > 0) {
        this.selectedJobIndex = this.jobs.length - 1;
      }
    });
  }

  /**
   * Method to update the selected job index when a timeline point is clicked.
   * @param index - Index of the job clicked in the timeline
   */
  selectJob(index: number) {
    this.selectedJobIndex = index;
  }

  /**
   * Lifecycle hook that runs when the component is destroyed.
   * Ensures proper cleanup by unsubscribing from the jobs observable.
   */
  ngOnDestroy(): void {
    if (this.jobsSubscription) {
      this.jobsSubscription.unsubscribe();
    }
  }
}
