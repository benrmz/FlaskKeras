/**
 * Created by benji on 6/8/17.
 */

$(document).on('click','#submit',function () {

    console.log("clicked on submit!");
    var url = $('#input-url').val();
    console.log(url);
    //set output to processing gif while we wait for ajax response
    var gif =  "<div class='text-center'> Processing...<br/><img class='text-center' src='http://24.media.tumblr.com/4c5070a4f871a1d2b1e24b70e8acc496/tumblr_mqd5ibdXgi1sc6f01o1_500.gif'/> </div>";
    $("#mnist-output").html(gif);
    $.ajax({
        url:'/api/mnist',
        method: 'POST',
        contentType: 'text/plain',
        data: url,
        success: function(result){
            $("#mnist-output").html(result);
        },
    });
});