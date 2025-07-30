const BASE_URL = "http://127.0.0.1:5000";

function getFormData() {
    return {
        age: $("#age").val(),
        country: $("#country").val(),
        state: $("#state").val(),
        interest: $("#interests").val(),    // ✅ matches HTML
        tone: $("#tone").val(),
        perspective: $("#perspective").val(),
        hookline: $("#hook").val()          // ✅ matches HTML
    };
}


function generatePost() {
    const data = getFormData();
    const promptText = 'prompt text';
        //const promptText = `Generate a ${data.tone} social media post for a ${data.age}-year-old from ${data.state}, ${data.country}, interested in ${data.interest}. The perspective should be ${data.perspective}. Start with: "${data.hookline}"`;

    $("#prompt").val(promptText);

    $.ajax({
        url: `${BASE_URL}/generate`,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function(response) {
            if (response.success) {
                $("#post").val(response.post);
            } else {
                $("#post").val("Error: " + response.error);
            }
        },
        error: function(xhr) {
            $("#post").val("Server error: " + xhr.statusText);
        }
    });
}

// Event listener for Generate button
$("#generate").on("click", function () {
    generatePost();
});
