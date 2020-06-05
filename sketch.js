let dialog, dialogBox;
let choice, choiceBox;
var numLine;
var n = 0;
var url_string = window.location.pathname;

function preload() {
  // console.log(url_string);
  var chapter = url_string.replace("/", "");
  chapter = chapter.replace(".html", "");
  console.log(chapter);
  dialog = loadTable("./assets/" + chapter + "dialog.csv", 'csv');
  choice = loadTable("./assets/" + chapter + "choice.csv", 'csv');

}

function setup() {
  noCanvas();
  numLine = dialog.getRowCount();
  print(numLine + ' total rows in table');
  dialogBox = select(".dialogBox");
  dialogBox.mouseClicked(dialogClicked);
  choiceBox = select(".choiceBox");
  // choiceBox.hide();
}

function dialogClicked() {
  if (n < numLine) {
    print(n);
    document.getElementById("dialog").innerHTML = dialog.getString(n, 1);
    document.getElementById("character").innerHTML = dialog.getString(n, 0);
    n++;
  } else if (n == numLine) {
    print("make choice");
    choiceBox.show();
    for (i = 1; i < choice.getRowCount(); i++) {
      var value = choice.getString(i, 1);
      var jump2where = choice.getString(i, 2);
      var button = '</br><input type="button" class="buttonChoice" value="' + value + '" onclick="window.location.href = ' + "'" + './' + jump2where + '.html' + "'" + '"/>';
      select(".choiceBox").html(button, true);
    }
    n++;
  }
}
