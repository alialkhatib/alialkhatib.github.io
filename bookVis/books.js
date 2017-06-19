function searchBar() {
  var input, filter, ul, li, a, i;
  input = $("#searchBar")[0];
  filter = input.value.toUpperCase();
  ul = $("#allBooks")[0];
  hhh = $("#allBooks>div>h3");

  for (i = 0; i < hhh.length; i++) {
    bookInQuestion=$(hhh[i]).parent()[0];
    if (hhh[i].innerHTML.toUpperCase().indexOf(filter) > -1) { // can probably use lodash here but...
      bookInQuestion.style.display='';
    } else {
      bookInQuestion.style.display='none';
    }
  }
}

var app = angular.module('angularjs-starter', []);
    app.controller('MainCtrl', ['$scope','$sce',function($scope,$sce) {
      $scope.localized=function(item){
        return Number(item.words).toLocaleString();
    }
    $scope.books=books;
    $scope.makeBooks=function(val){
      bookadding=function(source){
        return `<img width="40px" src="${source}">`;
      }
      result="";
      for (var n=0;n<val.hours;n++){
        result+=bookadding("books.svg")
      }
      var remainder=val.hours-Math.floor(val.hours);
      if (remainder<.7 && remainder >.3){
        result+=bookadding("halfbook.svg")
      }
      return $sce.trustAsHtml(result);
    }
}]);