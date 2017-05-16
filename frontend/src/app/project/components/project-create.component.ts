import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { notEmpty } from '../../services/validator';
import { ProjectUserDataService, ProjectDataService } from '../services/project-data.service';
import { ParamsService } from '../../group/services/group-data.service';
import { GroupUserDataService } from '../../group/services/group-data.service';

@Component({
  selector: 'vc-project-create',
  templateUrl: './project-create.html',
  styleUrls: ['./project.css']
})
export class ProjectCreateComponent implements OnInit {
    projectForm: FormGroup;
    taskId = 0;
    userList: any [] = [];
    private value: any;
    formErrors = {
        'projectName': '',
        'description': '',
        'tasks': '',
        'isPublic': '',
        'members': ''
    };
    validationMessages = {
        'projectName': {
            'required': 'Project name is required.',
        },
        'description': {
            'required': 'Description is required.',
        },
        'tasks': {
            'notEmpty': 'Task must be listed.'
        },
        'visibility': {
            'required': 'Visibility is required.',
        },
        'members': {
            'notEmpty': 'Members must be listed.'
        }
    };
    constructor(
        private fb: FormBuilder,
        private ProjectUserDataService: ProjectUserDataService,
        private ProjectDataService: ProjectDataService,
        private ParamsService: ParamsService,
        private GroupUserDataService: GroupUserDataService) {
    }
    ngOnInit(): void {
        this.buildForm();
        let data = this.GroupUserDataService.userList;
        for (let i = 0, item; (item = data[i]); i ++) {
            this.userList.push({
                id: item.ID,
                text: item.userName
            });
        }
    }
    buildForm(): void {
        this.projectForm = this.fb.group({
            projectName: ['', Validators.required],
            description: ['', Validators.required],
            tasks: this.fb.array([]),
            visibility: ['0', Validators.required],
            members: [[]]
        });
        this.projectForm.valueChanges
        .subscribe((data: any) => this.onValueChanged(data));
        this.onValueChanged();
    }
    onValueChanged(data?: any) {
        if (!this.projectForm) { return; }
        const form = this.projectForm;

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
    get tasks(): FormArray {
        return this.projectForm.get('tasks') as FormArray;
    };
    addTask() {
        this.tasks.push(this.fb.group({
            content: '',
            id: this.taskId++
        }));
    }
    doSubmit() {
        if (this.projectForm.valid) {
        let values = this.projectForm.value;
        let payload = values;
        payload.groupId = this.ParamsService.groupId;
        this.ProjectDataService.addProject(payload)
        .subscribe(data => {
            console.log(data);
        });
      }
    }
    getActions(index: number) {
        return [
            {
                name: 'Delete',
                fn: (arr: FormArray, _index: number) => {
                    arr.removeAt(_index);
                },
                params: [this.tasks, index]
            }
        ];
    }
    selected(value: any) {
        let __value = this.projectForm.get('members').value;
        __value.push(value.id)
        this.projectForm.get('members').setValue(__value);
    }
    refreshValue(value: any): void {
        this.value = value;
    }
    removed(value: any): void {
        let __value = this.projectForm.get('members').value;
        let tmp = [];
        for (let i = 0, item; (item = __value[i]); i ++) {
            if (item !== value.id) {
                tmp.push(item);
            }
        }
        this.projectForm.get('members').setValue(tmp);
    }
}

