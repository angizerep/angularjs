(function() {
    var app = angular.module('test-labs');
    app.controller('DataController',['$scope', function($scope){
        $scope.title = 'List';
        $scope.data = [
            {
                name: 'Andrea',
                lastName: 'Perez',
                age: 21,
                biography: 'Born in Venezuela',
                phone: [
                    {
                        home: 12345678,
                        fax: 12349876
                    }
                ]
            },
            {
                name: 'Augusto',
                lastName: 'Andrade',
                age: 25,
                biography: 'Born in Colombia',
                phone: [
                    {
                        home: 412345678,
                        fax: 612349876
                    }
                ]
            },
            {
                name: 'Nahuel',
                lastName: 'Massa',
                age: 29,
                biography: 'Born in Argentina',
                phone: [
                    {
                        home: 212345678,
                        fax: 412349876
                    }
                ]
            }
        ];
    }]);
})();


