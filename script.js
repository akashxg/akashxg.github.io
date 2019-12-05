$(document).ready(function() {
    $("#EC2_TEST").click(function() {
      console.log("made it inside EC2");
      //var sendData = $('#EC2_TEST').val();
      var sendData = "hello Sam";
      $.ajax({
          url: 'https://n0coguumod.execute-api.us-east-1.amazonaws.com/test_1',    //Your api url
          type: 'PUT',   //type is any HTTP method
          data: {
              data: sendData
          },      //Data as js object
          success: function () {
          }
      });

    });
});

// var ec2Object = function(ami, instanceType, numOfInstances){
//   this.ami = ami;
//   this.instancetype = instanceType;
//   this.numOfInstances = numOfInstances;
// }
