var app = angular.module('angularjs-starter', []);
    app.controller('MainCtrl', ['$scope','$sce',function($scope,$sce) {
      $scope.localized=function(item){
        return Number(item.words).toLocaleString();
    }
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
      console.log(result)
      return $sce.trustAsHtml(result);
    }
    $scope.books=[
                  {
                    "title": "Antigone",
                    "author":"Sophocles",
                    "hours":0.61,
                    "words":11061
                  },
                  {
                    "title": "The Glass Menagerie",
                    "author":"Tennessee Williams",
                    "hours":1.15,
                    "words":20698
                  },
                  {
                    "title": "Love Story",
                    "author":"",
                    "hours":1.38,
                    "words":24854
                  },
                  {
                    "title": "All's Well that Ends Well",
                    "author":"",
                    "hours":1.51,
                    "words":27169
                  },
                  {
                    "title": "Tuesdays with Morrie",
                    "author":"",
                    "hours":1.94,
                    "words":34894
                  },
                  {
                    "title": "A Room of One's Own",
                    "author":"",
                    "hours":2.1,
                    "words":37761
                  },
                  {
                    "title": "The Alchemist",
                    "author":"",
                    "hours":2.18,
                    "words":39242
                  },
                  {
                    "title": "The Giver",
                    "author":"",
                    "hours":2.42,
                    "words":43617
                  },
                  {
                    "title": "The Great Gatsby",
                    "author":"",
                    "hours":2.62,
                    "words":47094
                  },
                  {
                    "title": "A Wrinkle in Time",
                    "author":"",
                    "hours":2.78,
                    "words":49965
                  },
                  {
                    "title": "Little House on the Prairie",
                    "author":"",
                    "hours":2.89,
                    "words":52038
                  },
                  {
                    "title": "Like Water for Chocolate",
                    "author":"",
                    "hours":2.96,
                    "words":53234
                  },
                  {
                    "title": "Black Beauty",
                    "author":"",
                    "hours":3.31,
                    "words":59635
                  },
                  {
                    "title": "The Scarlet Letter",
                    "author":"",
                    "hours":3.53,
                    "words":63604
                  },
                  {
                    "title": "Brave New World",
                    "author":"",
                    "hours":3.54,
                    "words":63766
                  },
                  {
                    "title": "Their Eyes Were Watching God",
                    "author":"",
                    "hours":3.54,
                    "words":63783
                  },
                  {
                    "title": "A Little Princess",
                    "author":"",
                    "hours":3.67,
                    "words":66117
                  },
                  {
                    "title": "The Color Purple",
                    "author":"",
                    "hours":3.7,
                    "words":66556
                  },
                  {
                    "title": "Ordinary People",
                    "author":"",
                    "hours":3.74,
                    "words":67302
                  },
                  {
                    "title": "To the Lighthouse",
                    "author":"",
                    "hours":3.85,
                    "words":69327
                  },
                  {
                    "title": "Frankenstein",
                    "author":"",
                    "hours":4.19,
                    "words":75380
                  },
                  {
                    "title": "I Know Why the Caged Bird Sings",
                    "author":"",
                    "hours":4.35,
                    "words":75380
                  },
                  {
                    "title": "How the Garcia Girls Lost Their Accents",
                    "author":"",
                    "hours":4.44,
                    "words":79910
                  },
                  {
                    "title": "The Diary of a Young Girl",
                    "author":"",
                    "hours":4.6,
                    "words":82762
                  },
                  {
                    "title": "A Vindication of the Rights of Woman",
                    "author":"",
                    "hours":0,
                    "words":0
                  },
                  {
                    "title": "The Joy Luck Club",
                    "author":"",
                    "hours":5.08,
                    "words":91419
                  },
                  {
                    "title": "Song of Solomon",
                    "author":"",
                    "hours":5.13,
                    "words":92400
                  },
                  {
                    "title": "To Kill a Mockingbird",
                    "author":"",
                    "hours":5.51,
                    "words":99121
                  },
                  {
                    "title": "Life of Pi",
                    "author":"",
                    "hours":5.61,
                    "words":101027
                  },
                  {
                    "title": "The Age of Innocence",
                    "author":"",
                    "hours":5.62,
                    "words":101164
                  },
                  {
                    "title": "The Kite Runner",
                    "author":"",
                    "hours":5.95,
                    "words":107052
                  },
                  {
                    "title": "Gulliver's Travels",
                    "author":"",
                    "hours":5.96,
                    "words":107349
                  },
                  {
                    "title": "Wuthering Heights",
                    "author":"",
                    "hours":6,
                    "words":107945
                  },
                  {
                    "title": "Lolita",
                    "author":"",
                    "hours":6.25,
                    "words":112473
                  },
                  {
                    "title": "Sense and Sensibility",
                    "author":"",
                    "hours":6.63,
                    "words":119394
                  },
                  {
                    "title": "The Odyssey",
                    "author":"",
                    "hours":6.67,
                    "words":120133
                  },
                  {
                    "title": "Pride and Prejudice",
                    "author":"",
                    "hours":6.74,
                    "words":121342
                  },
                  {
                    "title": "Eat, Pray, Love",
                    "author":"",
                    "hours":7.22,
                    "words":130000
                  },
                  {
                    "title": "Interview With The Vampire",
                    "author":"",
                    "hours":7.24,
                    "words":130232
                  },
                  {
                    "title": "A Tale of Two Cities",
                    "author":"",
                    "hours":7.52,
                    "words":135420
                  },
                  {
                    "title": "The Da Vinci Code",
                    "author":"",
                    "hours":7.72,
                    "words":138952
                  },
                  {
                    "title": "Angela's Ashes",
                    "author":"",
                    "hours":7.89,
                    "words":141997
                  },
                  {
                    "title": "The Canterbury Tales",
                    "author":"",
                    "hours":7.99,
                    "words":143797
                  },
                  {
                    "title": "Madame Bovary",
                    "author":"",
                    "hours":8.43,
                    "words":151790
                  },
                  {
                    "title": "Rebecca",
                    "author":"",
                    "hours":8.49,
                    "words":152798
                  },
                  {
                    "title": "The Time Traveler's Wife",
                    "author":"",
                    "hours":8.65,
                    "words":155717
                  },
                  {
                    "title": "The Girl with the Dragon Tattoo",
                    "author":"",
                    "hours":9.19,
                    "words":165392
                  },
                  {
                    "title": "Uncle Tom's Cabin",
                    "author":"",
                    "hours":9.26,
                    "words":166622
                  },
                  {
                    "title": "Great Expectations",
                    "author":"",
                    "hours":10.19,
                    "words":183349
                  },
                  {
                    "title": "Little Women",
                    "author":"",
                    "hours":10.21,
                    "words":183833
                  },
                  {
                    "title": "Jane Eyre",
                    "author":"",
                    "hours":10.21,
                    "words":183858
                  },
                  {
                    "title": "Middlesex",
                    "author":"",
                    "hours":10.83,
                    "words":194952
                  },
                  {
                    "title": "Crime and Punishment",
                    "author":"",
                    "hours":11.76,
                    "words":211591
                  },
                  {
                    "title": "The Hunger Games",
                    "author":"",
                    "hours":16.75,
                    "words":301583
                  },
                  {
                    "title": "Anna Karenina",
                    "author":"",
                    "hours":19.43,
                    "words":349736
                  },
                  {
                    "title": "Don Quixote",
                    "author":"",
                    "hours":21.72,
                    "words":390833
                  },
                  {
                    "title": "Gone with the Wind",
                    "author":"",
                    "hours":23.23,
                    "words":418053
                  },
                  {
                    "title": "Lord of the Rings",
                    "author":"",
                    "hours":26.28,
                    "words":473000
                  },
                  {
                    "title": "Atlas Shrugged",
                    "author":"",
                    "hours":31.22,
                    "words":561996
                  },
                  {
                    "title": "Twilight Saga",
                    "author":"",
                    "hours":31.98,
                    "words":575710
                  },
                  {
                    "title": "War and Peace",
                    "author":"",
                    "hours":32.63,
                    "words":587287
                  },
                  {
                    "title": "The Bible",
                    "author":"",
                    "hours":43.79,
                    "words":788280
                  },
                  {
                    "title": "Harry Potter",
                    "author":"",
                    "hours":60.23,
                    "words":1084170
                  },
                  {
                    "title": "A Song of Ice and Fire",
                    "author":"",
                    "hours":98.33,
                    "words":1770000
                  },
                ];
}]);