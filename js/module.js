var mymodule=angular.module("mymodule",[]).controller("mycontroller",function ($scope) {
    

        
var employees={
fname:"brajabandhu",
lname: 'Das',
gender:'male'

    }
var details={
    name:"brajabandhu",
    photo:"/image/Das.png",
    gender:'male'
}
      
 $scope.details=details;
$scope.employee=employees;   
});