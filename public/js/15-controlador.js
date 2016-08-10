angular.module('todoAp', [])
        .controller('ControladorTareas', ['$scope', function ($scope) {
                var ctrl = this;
                ctrl.tareas = [
                    {texto: 'Ser Super Heroico con AngularJS', hecho: true},
                    {texto: 'Crear una ap con angular', hecho: false}];
            }]


                );