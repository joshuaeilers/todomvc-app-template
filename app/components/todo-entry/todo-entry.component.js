System.register(['angular2/core', '../../models/todo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_1;
    var TodoEntryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            }],
        execute: function() {
            TodoEntryComponent = (function () {
                function TodoEntryComponent() {
                    this.onEdit = new core_1.EventEmitter();
                    this.editing = false;
                }
                TodoEntryComponent.prototype.toggleMode = function () {
                    this.editing = !this.editing;
                    this.onEdit.emit(this.todo);
                };
                TodoEntryComponent.prototype.save = function ($event) {
                    if (!this.editing) {
                        return;
                    }
                    if ($event.keyCode === 27) {
                        this.toggleMode();
                    }
                    else if ($event.type === 'blur' || $event.keyCode === 13) {
                        console.log($event);
                        var title = $event.target.value.trim();
                        if (title.length) {
                            this.todo.setTitle(title);
                        }
                        else {
                            this.todo.remove();
                        }
                        // todo - this is throwing a dehydrated resource error
                        this.toggleMode();
                    }
                };
                TodoEntryComponent.prototype.toggleStatus = function ($event) {
                    this.todo.setCompleted($event.target.checked);
                };
                TodoEntryComponent.prototype.remove = function () {
                    this.todo.remove();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', todo_1.Todo)
                ], TodoEntryComponent.prototype, "todo", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TodoEntryComponent.prototype, "onEdit", void 0);
                TodoEntryComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-entry',
                        template: "\n    <div *ngIf=\"!editing\" class=\"view\">\n      <input class=\"toggle\" type=\"checkbox\" [checked]=\"todo.completed\" (click)=\"toggleStatus($event)\">\n      <label (dblclick)=\"toggleMode()\">{{ todo.title }}</label>\n      <button class=\"destroy\" (click)=\"remove()\"></button>\n    </div>\n    <input *ngIf=\"editing\" class=\"edit\" value=\"{{ todo.title }}\" (blur)=\"save($event)\" (keydown)=\"save($event)\">\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoEntryComponent);
                return TodoEntryComponent;
            }());
            exports_1("TodoEntryComponent", TodoEntryComponent);
        }
    }
});
//# sourceMappingURL=todo-entry.component.js.map