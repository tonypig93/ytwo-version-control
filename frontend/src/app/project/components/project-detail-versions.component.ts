import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ParamsService } from '../../group/services/group-data.service';
import { VcDataService } from '../../services/vc-data.service';
import { VcListControl } from '../../services/vc-base.service';
import { ProjectMangementDataService } from '../services/project-data.service';

@Component({
  selector: 'vc-project-detail-versions',
  templateUrl: './project-detail-versions.html',
  styleUrls: ['./project-version.css']
})
export class ProjectDetailVersionsComponent extends VcListControl implements OnInit  {
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
    selectedVersion = 'New Version';
    selectedVID: number;
    isReadOnly = false;
    constructor(
      private fb: FormBuilder,
      private ProjectMangementDataService: ProjectMangementDataService,
      private ParamsService: ParamsService) {
          super();
      }
    ngOnInit() {
      this.buildForm();
    }

    doSubmit() {
      let payload = {};
      $.fn.extend(payload, this.form.value);
      payload['projectId'] = this.ParamsService.projectId;
      this.ProjectMangementDataService.updateVersion(payload)
      .subscribe(data => {
          if (data) {
              data = data[0];
              let index = this.versions.findByAttr('ID', data.ID, true);
              if (index >= 0) {
                this.versions.data[index] = data;
              } else {
                this.versions.data = [data].concat(this.versions.data);
              }
          }
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
        let last = this.versions.data[0];
        this.form = this.fb.group({
            ID: [null],
            major: [last.V_MAJOR, Validators.required],
            minor: [last.V_MINOR, Validators.required],
            patch: [last.V_PATCH, Validators.required],
            log: this.fb.group({
              general: '',
              feature: '',
              bug: ''
            }),
            repoCode: ['', Validators.required]
        });
        this.form.valueChanges
        .subscribe((data: any) => this.onValueChanged(data));
        this.onValueChanged();
    }
    setModel(ID: number) {
        let data = this.versions.findByAttr('ID', ID);
        let last = this.versions.data[this.versions.data.length - 1];
        this.form.reset({
            ID: data ? data.ID : null,
            major: data ? data.V_MAJOR : last.V_MAJOR,
            minor: data ? data.V_MINOR : last.V_MINOR,
            patch: data ? data.V_PATCH : last.V_PATCH,
            log: {
                general: data ? data.LOG_GENERAL : '',
                feature: data ? data.LOG_FEATURE : '',
                bug: data ? data.LOG_BUG : ''
            },
            repoCode: data ? data.REPO_CODE : ''
        });
        this.selectedVersion = data ? `${data.V_MAJOR}.${data.V_MINOR}.${data.V_PATCH}` : 'New Version';
        this.isReadOnly = (data && data.STATUS) ? true : false;
        this.selectedVID = data ? data.ID : undefined;
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
    isCurrent(id: number) {
        return this.selectedVID === id;
    }
}

