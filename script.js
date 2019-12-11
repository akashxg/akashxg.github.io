$(document).ready(function() {

  // Make the DIV element draggable:
  dragElement(document.getElementById("mydiv"));

  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  

  $("#gang").click(function() {
      //var sendData = $('#EC2_TEST').val();
      var language = document.getElementById("selection")
      var option = language.options[language.selectedIndex]
      var sendData = {operation: "create", table_name: "Capstone", payload: {language: option.value}};
      $.ajax({
          type: 'POST',
          url: 'https://6jodkl74u4.execute-api.us-east-1.amazonaws.com/test_1',
          data: JSON.stringify(sendData),
          crossDomain: true,
          contentType: "application/json",
          dataType: "json",
          success: function (data, status){
            document.getElementById('windowboxCode').innerHTML = data["body"];
            console.log("it works");
          }
      });

    });
    
  $("#gang_ami").click(function() {
      //var sendData = $('#EC2_TEST').val();
      var language = document.getElementById("selection")
      var option = language.options[language.selectedIndex]
      var sendData = {operation: "create", table_name: "Capstone", payload: {language: option.value}};
      $.ajax({
          type: 'POST',
          url: 'https://6jodkl74u4.execute-api.us-east-1.amazonaws.com/test_1',
          data: JSON.stringify(sendData),
          crossDomain: true,
          contentType: "application/json",
          dataType: "json",
          success: function (data, status){
            message = data["body"].replace("ami_id", "<span class='tooltip' id='hovered_ami'>ami-00068cd7555f543d5<span class='tooltiptext'>The ID of the AMI. An AMI ID is required <br>to launch an instance and must <br>be specified here or in a launch <br>template.</span></span>")
            document.getElementById('windowboxCode').innerHTML = message;
            console.log("it works");
          }
      });

    });
    
    $("#gang_type").click(function() {
      //var sendData = $('#EC2_TEST').val();
      var language = document.getElementById("selection")
      var option = language.options[language.selectedIndex]
      var sendData = {operation: "create", table_name: "Capstone", payload: {language: option.value}};
      $.ajax({
          type: 'POST',
          url: 'https://6jodkl74u4.execute-api.us-east-1.amazonaws.com/test_1',
          data: JSON.stringify(sendData),
          crossDomain: true,
          contentType: "application/json",
          dataType: "json",
          success: function (data, status){
            message = data["body"].replace("instance_type", "<span class='tooltip' id='hovered_type'>t2micro<span class='tooltiptext'> The instance type. For more information, <br>see <a href='https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html'>Instance Types </a>in the Amazon Elastic <br>Compute Cloud User Guide.</span></span>")
            message2 = message.replace("ami_id", "<span class='tooltip' id='hovered_ami'>ami-00068cd7555f543d5<span class='tooltiptext'>The ID of the AMI. An AMI ID is required <br>to launch an instance and must <br>be specified here or in a launch <br>template.</span></span>")
            document.getElementById('windowboxCode').innerHTML = message2;
            console.log("it works");
          }
      });

    });
    
    $("#gang_count").click(function() {
      //var sendData = $('#EC2_TEST').val();
      var language = document.getElementById("selection")
      var option = language.options[language.selectedIndex]
      var sendData = {operation: "create", table_name: "Capstone", payload: {language: option.value}};
      $.ajax({
          type: 'POST',
          url: 'https://6jodkl74u4.execute-api.us-east-1.amazonaws.com/test_1',
          data: JSON.stringify(sendData),
          crossDomain: true,
          contentType: "application/json",
          dataType: "json",
          success: function (data, status){
            message = data["body"].replace("instance_type", "<span class='tooltip' id='hovered_type'>t2micro<span class='tooltiptext'>The instance type. For more information, <br>see <a href='https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html'>Instance Types </a>in the Amazon Elastic <br>Compute Cloud User Guide.</span></span>")
            message2 = message.replace("ami_id", "<span class='tooltip' id='hovered_ami'>ami-00068cd7555f543d5<span class='tooltiptext'>The ID of the AMI. An AMI ID is required <br>to launch an instance and must <br>be specified here or in a launch <br>template.</span></span>")
            message3 = message2.replace("count", "<span class='tooltip2' id='hovered_count'>2<span class='tooltiptext2'>Number of instances to launch. <br>If a single number is provided, it is <br>assumed to be the minimum to launch <br>(defaults to 1). If a range is provided in <br>the form min:max then the first number <br>is interpreted as the minimum number of <br>instances to launch and the second is <br>interpreted as the maximum number<br> of instances to launch.</span></span>")
            document.getElementById('windowboxCode').innerHTML = message3;
            console.log("it works");
          }
      });

    });
    
    $("#gang_minimize").click(function() {
      document.getElementById("mydiv").style.bottom = "3%";
      document.getElementById("mydiv").style.top = "95%";
    });
    
    $("#gang_maximize").click(function() {
      document.getElementById("mydiv").style.bottom = "3%";
      document.getElementById("mydiv").style.top = "40%";
    });

    $("#selection").on('change', function() {
      //var sendData = $('#EC2_TEST').val();
      var language = document.getElementById("selection")
      var option = language.options[language.selectedIndex]
      var sendData = {operation: "create", table_name: "Capstone", payload: {language: option.value}};
      $.ajax({
          type: 'POST',
          url: 'https://6jodkl74u4.execute-api.us-east-1.amazonaws.com/test_1',
          data: JSON.stringify(sendData),
          crossDomain: true,
          contentType: "application/json",
          dataType: "json",
          success: function (data, status){
            document.getElementById('windowboxCode').innerHTML = data["body"];
            console.log("it works");
          }
      });

    });
    
    $(".ami").on('change', function() {
      //var sendData = $('#EC2_TEST').val();
      var language = document.getElementById("selection")
      var option = language.options[language.selectedIndex]
      var sendData = {operation: "create", table_name: "Capstone", payload: {language: option.value}};
      $.ajax({
          type: 'POST',
          url: 'https://6jodkl74u4.execute-api.us-east-1.amazonaws.com/test_1',
          data: JSON.stringify(sendData),
          crossDomain: true,
          contentType: "application/json",
          dataType: "json",
          success: function (data, status){
            message = data["body"].replace("ami_id", "<span class='tooltip' id='hovered_ami'>ami-00068cd7555f543d5<span class='tooltiptext'>The ID of the AMI. An AMI ID is required <br>to launch an instance and must <br>be specified here or in a launch <br>template.</span></span>")
            document.getElementById('windowboxCode').innerHTML = message;
            console.log("it works");
          }
      });

    });
    
    $(".type").on('change', function() {
      //var sendData = $('#EC2_TEST').val();
      var language = document.getElementById("selection")
      var option = language.options[language.selectedIndex]
      var sendData = {operation: "create", table_name: "Capstone", payload: {language: option.value}};
      $.ajax({
          type: 'POST',
          url: 'https://6jodkl74u4.execute-api.us-east-1.amazonaws.com/test_1',
          data: JSON.stringify(sendData),
          crossDomain: true,
          contentType: "application/json",
          dataType: "json",
          success: function (data, status){
            message = data["body"].replace("instance_type", "<span class='tooltip' id='hovered_type'>t2micro<span class='tooltiptext'> The instance type. For more information, <br>see <a href='https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html'>Instance Types </a>in the Amazon Elastic <br>Compute Cloud User Guide.</span></span>")
            message2 = message.replace("ami_id", "<span class='tooltip' id='hovered_ami'>ami-00068cd7555f543d5<span class='tooltiptext'>The ID of the AMI. An AMI ID is required <br>to launch an instance and must <br>be specified here or in a launch <br>template.</span></span>")
            document.getElementById('windowboxCode').innerHTML = message2;
            console.log("it works");
          }
      });

    });
    
    $(".count").on('change', function() {
      //var sendData = $('#EC2_TEST').val();
      var language = document.getElementById("selection")
      var option = language.options[language.selectedIndex]
      var sendData = {operation: "create", table_name: "Capstone", payload: {language: option.value}};
      $.ajax({
          type: 'POST',
          url: 'https://6jodkl74u4.execute-api.us-east-1.amazonaws.com/test_1',
          data: JSON.stringify(sendData),
          crossDomain: true,
          contentType: "application/json",
          dataType: "json",
          success: function (data, status){
            message = data["body"].replace("instance_type", "<span class='tooltip' id='hovered_type'>t2micro<span class='tooltiptext'>The instance type. For more information, <br>see <a href='https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html'>Instance Types </a>in the Amazon Elastic <br>Compute Cloud User Guide.</span></span>")
            message2 = message.replace("ami_id", "<span class='tooltip' id='hovered_ami'>ami-00068cd7555f543d5<span class='tooltiptext'>The ID of the AMI. An AMI ID is required <br>to launch an instance and must <br>be specified here or in a launch <br>template.</span></span>")
            message3 = message2.replace("count", "<span class='tooltip2' id='hovered_count'>2<span class='tooltiptext2'>Number of instances to launch. <br>If a single number is provided, it is <br>assumed to be the minimum to launch <br>(defaults to 1). If a range is provided in <br>the form min:max then the first number <br>is interpreted as the minimum number of <br>instances to launch and the second is <br>interpreted as the maximum number<br> of instances to launch.</span></span>")
            document.getElementById('windowboxCode').innerHTML = message3;
            console.log("it works");
          }
      });

    });

    // $("#EC2_TEST").click(function() {
    //   console.log("made it inside EC2");
    //   //var sendData = $('#EC2_TEST').val();
    //   var sendData = { operation: "create", table_name: "Capstone", payload: { key: "Sam", value: "is sexy" } };
    //   $.ajax({
    //       type: 'POST',
    //       url: 'https://n0coguumod.execute-api.us-east-1.amazonaws.com/test_1',
    //       data: JSON.stringify(sendData),
    //       crossDomain: true,
    //       contentType: "application/json",
    //       dataType: "json",
    //       success: function (data, status){
    //         alert("Data: "+ data + "\nStatus: "+ status);
    //       }
    //   });
    //
    // });
});

// var ec2Object = function(ami, instanceType, numOfInstances){
//   this.ami = ami;
//   this.instancetype = instanceType;
//   this.numOfInstances = numOfInstances;
// }
