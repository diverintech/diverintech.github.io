import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translate.service';
import { CommonModule } from '@angular/common';
import { Job } from '../../interfaces/job.interface';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit, OnDestroy {
  jobs: Job[] = [];
  selectedJobIndex: number | null = null;
  private jobsSubscription: Subscription = new Subscription();


  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
    this.jobsSubscription = this.translationService.jobs$.subscribe((jobs) => {
      this.jobs = jobs;
    });
  }

  selectJob(index: number) {
    this.selectedJobIndex = index;
  }

  ngOnDestroy(): void {
    if (this.jobsSubscription) {
      this.jobsSubscription.unsubscribe();
    }
  }
}