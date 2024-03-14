// main.js
$(document).ready(function () {
    const recognizeButton = document.getElementById('recognize-faces-button');
    const takeAttendanceButton = document.getElementById('take-attendance-button');
    const downloadButton = document.getElementById('download-button');

    // Event listener for the "Recognize Faces" button
    recognizeButton.addEventListener('click', function () {
        // Make an AJAX request to the Flask endpoint for face recognition
        $.ajax({
            type: 'POST',
            url: '/recognize_faces',  // Update with your Flask route
            success: function (response) {
                // Handle the response from the server (e.g., update the UI)
                console.log('Face recognition response:', response);
            },
            error: function (error) {
                console.error('Face recognition error:', error);
            },
        });
    });

    // Event listener for the "Take Attendance" button
    takeAttendanceButton.addEventListener('click', function () {
        // Make an AJAX request to the Flask endpoint for taking attendance
        $.ajax({
            type: 'POST',
            url: '/take_attendance',  // Update with your Flask route
            success: function (response) {
                // Handle the response from the server (e.g., update the UI)
                console.log('Attendance response:', response);
            },
            error: function (error) {
                console.error('Attendance error:', error);
            },
        });
    });

    // You can also add similar AJAX requests for other functionality.

    // Event listener for the "Download Attendance" button
    downloadButton.addEventListener('click', function () {
        // You can use a simple link to trigger the download or make an AJAX request
        // Here's an example using a link:
        // <a class="button" href="/download_attendance">Download Attendance</a>
    });
});
