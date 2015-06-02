/*
Write a function that takes an array of data in the below format. Assume that this function is run in a browser. It should update a tag with id="awesome-index" with the average awesome-index of all programmers. Your solution should continue to work even if more people are added to the array. Write two versions, one using lodash (or underscore) and jQuery, and one using only Javascript utilities native to the browser. */


var programmers = [
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
                  ]

function averageAwesomeIndex(programmers) {
  var totalAwesomeness = 0;
  // access the awesomeIndex of every programmer object in the array programmers
  programmers.map(function(element, index, array) {
    var currentAwesomeness = programmers[index].awesomeIndex;
    if (currentAwesomeness === undefined || currentAwesomeness === null) {
      console.log("This programmer does not have an awesome index");
    } else {
      currentAwesomeness = currentAwesomeness;
      totalAwesomeness += currentAwesomeness;
    }
  });
  console.log(totalAwesomeness);
  console.log(programmers.length);
  return (totalAwesomeness / programmers.length);
}

var average = averageAwesomeIndex(programmers);
console.log(average);

document.getElementById('awesome-index').write("The average Awesome Index of all programmers is " + average);
