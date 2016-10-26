var obj = {
  "a-k-a": "Ankit",
  "last_seen": {
    "country": "India",
    "state": "New Delhi"

  },
  "occupation": {
    "mode": {
      "normal": "Student",
      "nuts": "Front End Dev At NxtLife Technologies",
      "high": "just joking"

    }
  },
  "experience": {
    "planet": {
      "earth": {
        "Antcrawl Technologies": "JavaScript Developer Intern",
        "NxtLife Technologies": "Front End Developer"
      },
      "saturn": {
        "sports": "hola-hoop instructor"
      }
    }
  },
  "skills": {
    "JavaScript": {
      "Front-End": {
        "F1": "Angular 1 & 2",
        "F2": "React",
        "F3": "Angular Material",
        "F4": "Bootstrap 3",
        "F5": "CSS3",
        "F6": "Ionic1 & Ionic2"
      },
      "Back-End": {
        "B1": "Node",
        "Database": {
          "D1": "Mongo",
          "D2": "Firebase"
        }
      },
      "Frameworks": {
        "Node": "Express & Meteor",
        "Css": "STYLUS & SASS"
      },
      "Others": {
        "O1": "Webpack",
        "O2": "Requirejs",
        "O3": "Gulp",
        "O4": "Cordova"

      },
      "Testing": {
        "T1": "Jasmine"
      }
    }
  }
}

function output(inp) {
    document.body.appendChild(document.getElementById('myTextarea')).innerHTML = inp;
}

function syntaxHighlight(json) {
               json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
               return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                   var cls = 'number';
                   if (/^"/.test(match)) {
                       if (/:$/.test(match)) {
                           cls = 'key';
                       } else {
                           cls = 'string';
                       }
                   } else if (/true|false/.test(match)) {
                       cls = 'boolean';
                   } else if (/null/.test(match)) {
                       cls = 'null';
                   }
                   return '<span class="' + cls + '">' + match + '</span>';
               });
           }

var str = JSON.stringify(obj, undefined, 10);

output(str);
output(syntaxHighlight(str));