import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ParamsService } from '../../group/services/group-data.service';
import { VcDataService } from '../../services/vc-data.service';
import { ProjectMangementDataService } from '../services/project-data.service';

@Component({
  selector: 'vc-project-detail-versions',
  templateUrl: './project-detail-versions.html',
  styleUrls: ['./project-version.css']
})
export class ProjectDetailVersionsComponent implements OnInit  {
    @Input() versions: VcDataService;
    form: FormGroup;
    formErrors = {
        'major': '',
        'minor': '',
        'patch': '',
        'repoCode': ''
    };
    validationMessages = {
        'major': {
            'required': 'Majoy number is required.',
        },
        'minor': {
            'required': 'Minor number is required.',
        },
        'patch': {
            'required': 'Patch number is required.'
        },
        'repoCode': {
            'required': 'Repository code is required.',
        }
    };
    constructor(
      private fb: FormBuilder,
      private ProjectMangementDataService: ProjectMangementDataService,
      private ParamsService: ParamsService) {}
    ngOnInit() {
      this.buildForm();
    }
    doSubmit() {
      console.log(this.form);
      let payload = {};
      $.fn.extend(payload, this.form.value);
      payload['projectId'] = this.ParamsService.projectId;
      this.ProjectMangementDataService.updateVersion(payload)
      .subscribe(data => {
        console.log(data);
      })
    }
    decrease(name: string) {
      let control = this.form.get(name);
      let value = control.value;
      control.patchValue(--value);
    }
    increase(name: string) {
      let control = this.form.get(name);
      let value = control.value;
      control.patchValue(++value);
    }
    buildForm(): void {
        this.form = this.fb.group({
            major: [0, Validators.required],
            minor: [0, Validators.required],
            patch: [0, Validators.required],
            log: this.fb.group({
              general: 'ggg',
              feature: 'f',
              bug: 'bug'
            }),
            repoCode: ['', Validators.required]
        });
        this.form.valueChanges
        .subscribe((data: any) => this.onValueChanged(data));
        this.onValueChanged();
    }
    onValueChanged(data?: any) {
        if (!this.form) { return; }
        const form = this.form;

        for (const field in this.formErrors) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
            const messages = this.validationMessages[field];
            for (const key in control.errors) {
            this.formErrors[field] += messages[key] + ' ';
            }
        }
        }
    }
}

