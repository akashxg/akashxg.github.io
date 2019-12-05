$(document).ready(function() {
    $("#EC2_TEST").click(function() {
      console.log("made it inside EC2");
      //var sendData = $('#EC2_TEST').val();
      var sendData = { operation: "create", table_name: "Capstone", payload: { key: "Sam", value: "is dumb" } };
      $.ajax({
          type: 'POST',
          url: 'https://n0coguumod.execute-api.us-east-1.amazonaws.com/test_1',
          data: JSON.stringify(sendData),
          crossDomain: true,
          contentType: "application/json",
          dataType: "json",
          success: function (data, status){
            alert("Data: "+ data + "\nStatus: "+ status);
          }
      });

    });
});

// var ec2Object = function(ami, instanceType, numOfInstances){
//   this.ami = ami;
//   this.instancetype = instanceType;
//   this.numOfInstances = numOfInstances;
// }
