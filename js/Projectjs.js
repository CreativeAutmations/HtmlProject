var current=1,count;
var file_source=[
    [
        'Accuracy',
        'the quality or state of being correct or precise. Eg-"we have confidence in the accuracy of the statistics"'
    ],
    [
        'Acknowledged',
        'deep love and respect. Eg-"he gave her a look of adoration"'
    ],
    [
        'Adoration',
        'recognized as being good or important. Eg-"he is an acknowledged expert in the field"'
    ],
    [
        'Activeness',
        'engaging or ready to engage in physically energetic pursuits. Eg-"although he was seventy he was still robust and active"'
    ],
    [
        'Adaptability',
        'the quality of being able to adjust to new conditions. Eg-"adaptability is an advantage in the harshly competitive global economy"'
    ],
    [
        '',
        ''
    ]
];
$(document).ready(function(){
    $("#NoButton").click(function(){
        $("#quality").text(file_source[current][0])
      $("#Quality_desc").text(file_source[current][1])
      current++;
    });
  });
  $(document).ready(function(){
    $("#YesButton").click(function(){
        $("#quality").text(file_source[current][0])
      $("#Quality_desc").text(file_source[current][1])
      current++;
      var x = document.getElementById("Selection_count").textContent;
      count=parseInt(x);
      count++;
      document.getElementById("Selection_count").textContent=count+"";
      $("#Second_Row").append("<label>List</label>")
    });
  });
