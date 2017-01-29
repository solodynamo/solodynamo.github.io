var obj = {
    "a-k-a": "Ankit",
    "last_seen": {
        "country": "India",
        "state": "Gurugram,Haryana"

    },
    "occupation": {
        "mode": {
            "normal": "Student",
            "pro": "Intern at Directi",
            "high": "Just Joking"

        }
    },
    "experience": {
        "planet": {
            "earth": {
                "Antcrawl Technologies": "JavaScript Developer Intern",
                "NxtLife Technologies": "Front End Developer",
                "Internshala": "ISP",
                "Directi": "Software Engineering Intern"
            },
            "saturn": {
                "sports": "hoola-hoop instructor"
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
                "Css": "SASS"
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

        },
        "Education": {


            "10th": {
                "C.G.P.A": "9.8",
                "School": "Cambridge Foundation Public School"
            },
            "12th": {
                "Percentage": "80.02",
                "School": "Cambridge Foundation Public School"
            },
            "BTech": {

                "CGPA(Agg %)": "84.6",
                "College": "Bhagwan Parshuram Institute Of Technology",
                "YearOfCompletion(Expected)": "2018"

            }
        }
    }
}

function output(inp) {
    document.body.appendChild(document.getElementById('myTextarea')).innerHTML = inp;
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
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

$(".button").click(function() {
    $(this).toggleClass("active");
    $(".icons").toggleClass("open");

});
