import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

import { BehaviorSubject } from 'rxjs';
import { JOBS_PT } from '../../data/job.data.pt';
import { JOBS_EN } from '../../data/job.data.en';
import { Job } from '../../interfaces/job.interface';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  // Default language for the application
  defaultLang = 'en';

  // BehaviorSubject to manage the state of job data
  jobsSubject = new BehaviorSubject<Job[]>([]);

  // Observable to expose the job data as a stream
  jobs$ = this.jobsSubject.asObservable();

  /**
   * Constructor injects required dependencies:
   * - TranslateService for handling translations
   * - PLATFORM_ID to determine whether the app is running in the browser
   */
  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    // Check if the code is running in the browser
    if (isPlatformBrowser(this.platformId)) {
      // Retrieve the saved language from localStorage if it exists
      const savedLang = localStorage.getItem('lng');
      if (savedLang) {
        this.defaultLang = savedLang; // Use the saved language as the default
      }
      // Initialize the application language
      this.setLang(this.defaultLang);
    }
  }

  /**
   * Sets the application's current language and updates related data.
   * @param lang - Language code to set (e.g., 'en', 'pt')
   */
  setLang(lang: string) {
    // Change the active language for ngx-translate
    this.translateService.use(lang);

    // Update the default language in the service
    this.defaultLang = lang;

    // Update the job data to match the selected language
    this.updateJobsData();

    // Save the selected language to localStorage if running in the browser
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lng', lang);
    }
  }

  /**
   * Updates the job data based on the selected language.
   * Loads the appropriate dataset for the active language.
   */
  updateJobsData() {
    // Push Portuguese job data if the selected language is 'pt'
    if (this.defaultLang === 'pt') {
      this.jobsSubject.next(JOBS_PT);
    } else {
      // Push English job data by default
      this.jobsSubject.next(JOBS_EN);
    }
  }

  /**
   * Retrieves the current job data as a synchronous value.
   * @returns The current array of jobs
   */
  getJobs(): Job[] {
    return this.jobsSubject.getValue();
  }
}
