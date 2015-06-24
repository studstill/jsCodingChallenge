/* Write a function that takes an array of data in the below format.
Assume that this function is run in a browser. It should update
a tag with id="awesome-index" with the average awesome-index of
all programmers. Your solution should continue to work even if
more people are added to the array. Write two versions, one using
lodash (or underscore) and jQuery, and one using only Javascript
utilities native to the browser.
*/


var people = [
                {
                name: 'Bob',
                occupation: 'programmer',
                awesomeIndex: 7,
                },
                {
                name: 'Alice',
                occupation: 'programmer',
                awesomeIndex: 9,
                },
                {
                name: 'Zaphod',
                occupation: 'President of the Galaxy'
                },
              ];

function printAverageAwesomeIndex(people) {
  // Get awesome index of programmers
    var awesomeIndexArray = [];
    people.forEach(function(current) {
      if (current.occupation === 'programmer') {
        awesomeIndexArray.push(current.awesomeIndex);
      }
    });
  // Find sum of the awesomeIndex of all programmers
  var sumAwesomeIndex = awesomeIndexArray.reduce(function(previous, current) {
    return previous + current;
  });
  // Calculate average awesomeIndex
  var numProgrammers = awesomeIndexArray.length;
  var averageAwesomeIndex = sumAwesomeIndex / numProgrammers;
  // Update an html tag with id="awesome-index"
  var indexDiv = document.getElementById('awesome-index');
  document.write('The average awesome index of all programmers is ' + averageAwesomeIndex);
}

// execute function
printAverageAwesomeIndex(people);



