"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var validator_1 = require("../../services/validator");
var forms_1 = require("@angular/forms");
var group_data_service_1 = require("../../group/services/group-data.service");
var encrypt = window['CryptoJS'].MD5;
var AddUserModalComponent = (function () {
    function AddUserModalComponent(fb, userManage) {
        this.fb = fb;
        this.userManage = userManage;
        this.isModalShown = false;
        this.modalChange = new core_1.EventEmitter();
        this.refreshList = new core_1.EventEmitter();
        this.userInfo = {
            userName: '',
            email: '',
            groupId: '',
        };
        this.formErrors = {
            'userName': '',
            'email': '',
            'password': '',
            'password2': ''
        };
        this.validationMessages = {
            'userName': {
                'required': 'User name is required.',
            },
            'email': {
                'required': 'Email is required.',
                'email': 'Email address invalid.'
            },
            'password': {
                'required': 'Password is required.'
            },
            'password2': {
                'required': 'Password is required.',
                'password2': 'Passwords inconformity.'
            }
        };
    }
    AddUserModalComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    AddUserModalComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            userName: ['', forms_1.Validators.required],
            email: ['', [validator_1.isEmail, forms_1.Validators.required]],
            password: ['', forms_1.Validators.required],
            password2: ['', [validator_1.password2, forms_1.Validators.required]],
        });
        this.userForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    AddUserModalComponent.prototype.doSubmit = function (c) {
        var _this = this;
        if (this.userForm.valid) {
            var values = this.userForm.value;
            var payload = {
                userName: values.userName,
                password: encrypt(values.password).toString(),
                email: values.email,
                groupId: this.groupId
            };
            this.userManage.addUser(payload)
                .subscribe(function (data) {
                console.log(data);
                _this.refreshList.emit();
            });
        }
    };
    AddUserModalComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    AddUserModalComponent.prototype.showModal = function () {
        this.isModalShown = true;
    };
    AddUserModalComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    AddUserModalComponent.prototype.onHidden = function () {
        this.isModalShown = false;
        this.modalChange.emit();
    };
    return AddUserModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AddUserModalComponent.prototype, "isModalShown", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AddUserModalComponent.prototype, "groupId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AddUserModalComponent.prototype, "modalChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AddUserModalComponent.prototype, "refreshList", void 0);
__decorate([
    core_1.ViewChild('autoShownModal'),
    __metadata("design:type", ngx_bootstrap_1.ModalDirective)
], AddUserModalComponent.prototype, "autoShownModal", void 0);
AddUserModalComponent = __decorate([
    core_1.Component({
        selector: 'add-user-modal',
        templateUrl: './add-user-modal.html',
        styleUrls: ['./add-user.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, group_data_service_1.GroupUserDataService])
], AddUserModalComponent);
exports.AddUserModalComponent = AddUserModalComponent;
//# sourceMappingURL=group-add-user.component.js.map