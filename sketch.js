let dialog, dialogBox;
let choice, choiceBox;
var numLine;
var n = 1;
var url_string = window.location.pathname;

function preload() {
  // console.log(url_string);
  var chapter = url_string.replace("/", "");
  chapter = chapter.replace(".html", "");
  chapter = chapter.replace("COMPLEXARTIFACTSTUDIOMOCKUP-template/", "");
  console.log("Chapter: " + chapter);
  dialog = loadTable("./assets/" + chapter + "dialog.csv", 'csv');
  choice = loadTable("./assets/" + chapter + "choice.csv", 'csv');

}

function setup() {
  noCanvas();
  numLine = dialog.getRowCount();
  print(numLine + ' total lines in dialog');
  dialogBox = select(".dialogBox");
  dialogBox.mouseClicked(dialogClicked);
  choiceBox = select(".choiceBox");
  dialogClicked();

  // choiceBox.hide();

}

function dialogClicked() {
  if (n < numLine) {

    print(n);
    document.getElementById("dialog").innerHTML = dialog.getString(n, 1);
    document.getElementById("character").innerHTML = dialog.getString(n, 0);
    var character = dialog.getString(n, 0);
    var characterImg = '<img src="./assets/character/' + character + '.png" alt="' + character + '">';
    select(".characterImg").html(characterImg);

    var background = dialog.getString(n, 2);
    var backgroundImg = "<style> body{background-image: url('assets/background/" + background + ".png');} </style>";
    select(".backgroundImg").html(backgroundImg);
    
    n++;
  } else if (n == numLine) {
    print("make choice");
    choiceBox.show();
    for (i = 1; i < choice.getRowCount(); i++) {
      var value = choice.getString(i, 1);
      var jump2where = choice.getString(i, 2);
      var button = '</br><input type="button" class="buttonChoice btn btn-dark mb-3" value="' + value + '" onclick="window.location.href = ' + "'" + './' + jump2where + '.html' + "'" + '"/>';
      select(".choiceBox").html(button, true);
    }
    select(".dialogBox").hide();

    n++;
  }
}
