import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  private t = inject(TranslateService);

  jobs$ = this.t.stream('resume.jobs');
  groups$ = this.t.stream('resume.skillGroups');
  langs$ = this.t.stream('resume.langs');
  eduHonors$ = this.t.stream('resume.edu.honors');
  awardBullets$ = this.t.stream('resume.award.bullets');
}