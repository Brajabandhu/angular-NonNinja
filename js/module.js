var mymodule=angular.module("mymodule",[]).controller("mycontroller",function ($scope) {
    

        
var employees=[
{fname:"brajabandhu",lname: "Das",gender:"male"    },
{fname:"pappu",lname: "Das",gender:"male"    },
{fname:"braja",lname: "Das",gender:"male"    },
{fname:"braj",lname: "Das",gender:"male"    }
];
var technologies=[
{name:"java",likes:0,dislikes:0},
{name:"Spring",likes:0,dislikes:0},
{name:"Hibernate",likes:0,dislikes:0},
{name:"Angular",likes:0,dislikes:0},

]
var details={
    name:"brajabandhu",
    photo:"/image/Das.png",
    gender:'male'
}
      
 $scope.details=details;
$scope.employees=employees; 
$scope.technologies=technologies; 
$scope.likes=function(tech){
    tech.likes++;
} 
$scope.dislikes=function(tech){
    tech.dislikes++;
} 
$scope.rowlimit=3;
});