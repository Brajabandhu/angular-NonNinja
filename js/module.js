var mymodule=angular.module("mymodule",[]).controller("mycontroller",function ($scope) {
    

        
var employees=[
{fname:"brajabandhu",lname: "Das",gender:"male"    },
{fname:"pappu",lname: "Das",gender:"male"    },
{fname:"braja",lname: "Das",gender:"male"    },
{fname:"braj",lname: "Das",gender:"male"    }
];
var sortingData=[
{fname:"brajabandhu",lname: "Dasu",gender:"male",salary:52347    },
{fname:"pappu",lname: "Das",gender:"female" ,salary:49888  },
{fname:"braja",lname: "Dase",gender:"male" ,salary:324893   },
{fname:"braj",lname: "Dasa",gender:"female"  ,salary:48999  }
];
var customFilter=[
{fname:"brajabandhu",lname: "Dasu",gender:1,salary:52347    },
{fname:"pappu",lname: "Das",gender:2 ,salary:49888  },
{fname:"braja",lname: "Dase",gender:1 ,salary:324893   },
{fname:"braj",lname: "Dasa",gender:3  ,salary:48999  }
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
$scope.sortingData=sortingData;
$scope.customFilter=customFilter;
$scope.sortBy="fname"

$scope.likes=function(tech){
    tech.likes++;
} 
$scope.dislikes=function(tech){
    tech.dislikes++;
} 
$scope.rowlimit=3;
});