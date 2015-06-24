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
                }
              ];

function getProgrammers(people) {
  var programmers = [];
  people.forEach(function(current) {
    if (current.occupation === 'programmer') {
      programmers.push(current);
    }
  });
  return programmers;
}

function getAverageAwesomeIndex(programmers) {
  var sumAwesomeIndex = programmers.reduce(function(previous, current) {
    return previous.awesomeIndex + current.awesomeIndex;
  });

  var numProgrammers = programmers.length;
  return sumAwesomeIndex / numProgrammers;
}

var programmers = getProgrammers(people);
var averageAwesomeIndex = getAverageAwesomeIndex(programmers);
var indexDiv = document.getElementById('awesome-index');
document.write('The average awesome index of all programmers is ' + averageAwesomeIndex);


