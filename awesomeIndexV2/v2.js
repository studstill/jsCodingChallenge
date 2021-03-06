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
  var programmers = _.filter(people, 'occupation', 'programmer');
  var sumAwesomeIndex = _.reduce(programmers, function(total, n) {
    return total + n.awesomeIndex;
  }, 0);
  var averageAwesomeIndex = sumAwesomeIndex / programmers.length;
  var message = 'The average awesome index of all programmers is ' +
                averageAwesomeIndex + '.';
  $('#awesome-index').text(message);
}

printAverageAwesomeIndex(people);

