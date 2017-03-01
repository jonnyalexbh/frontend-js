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
var program = (function () {
    function program() {
    }
    /*
    * get
    */
    program.prototype.getName = function () {
        return this.name;
    };
    program.prototype.getVersion = function () {
        return this.version;
    };
    /*
    * set
    */
    program.prototype.setName = function (name) {
        this.name = name;
    };
    program.prototype.setVersion = function (version) {
        this.version = version;
    };
    return program;
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
}(program));
/*
* instanciar objeto
*/
var editor = new videoEditor();
editor.setName("Laravel");
editor.setVersion(8);
editor.setTimeLine(4000);
console.log(editor.getAllData());
