import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { JOBS_PT } from '../data/job.data.pt';
import { JOBS_EN } from '../data/job.data.en';
import { Job } from '../interfaces/job.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class TranslationService {
  defaultLang = 'en';
  jobsSubject = new BehaviorSubject<Job[]>([]);
  jobs$ = this.jobsSubject.asObservable();

  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lng');
      if (savedLang) {
        this.defaultLang = savedLang;
      }
      this.setLang(this.defaultLang);
    }
  }

  setLang(lang: string) {
    this.translateService.use(lang);
    this.defaultLang = lang;
    this.updateJobsData();
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lng', lang);
    }
  }

  updateJobsData() {

    if (this.defaultLang === 'pt') {
      this.jobsSubject.next(JOBS_PT);
    } else {
      this.jobsSubject.next(JOBS_EN);
    }

  }

  getJobs(): Job[] {
    return this.jobsSubject.getValue();
  }
}
