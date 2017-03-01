var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* class program
*/
var Program = (function () {
    function Program() {
    }
    /*
    * get
    */
    Program.prototype.getName = function () {
        return this.name;
    };
    Program.prototype.getVersion = function () {
        return this.version;
    };
    /*
    * set
    */
    Program.prototype.setName = function (name) {
        this.name = name;
    };
    Program.prototype.setVersion = function (version) {
        this.version = version;
    };
    return Program;
}());
/*
* class videoEditor
*/
var videoEditor = (function (_super) {
    __extends(videoEditor, _super);
    function videoEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
    * get
    */
    videoEditor.prototype.getTimeLine = function () {
        return this.timeLine;
    };
    /*
    * set
    */
    videoEditor.prototype.setTimeLine = function (timeLine) {
        this.timeLine = timeLine;
    };
    /*
    * get AllData
    */
    videoEditor.prototype.getAllData = function () {
        return this.getName() + " - " + this.getVersion() + " - " + this.getTimeLine();
    };
    return videoEditor;
}(Program));
/*
* instantiate object
*/
var editor = new videoEditor();
editor.setName("Laravel");
editor.setVersion(8);
editor.setTimeLine(4000);
console.log(editor.getAllData());
/*
* practice example
*/
var programs = [];
function save() {
    var name = document.getElementById("name").value.toString();
    var program = new Program();
    program.setName(name);
    program.setVersion(10);
    programs.push(program);
    var list = "";
    for (var i = 0; i < programs.length; i++) {
        list = list + "<li>" + programs[i].getName() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    document.getElementById("name").value = "";
}
