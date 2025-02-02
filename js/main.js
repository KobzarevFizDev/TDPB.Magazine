tdp_item = {
    path_to_mp4: "images/example.mp4",
    channel: 131,
    start_time: "2024.12.12 11:30",
    finish_time: '2024.12.12 11:35',
    duration: 30,
    frames_number: 40
};

function create_test_data() {
    test_data = []
    for(let i = 0; i < 10; i++) {
        test_data.push({
            path_to_mp4: "images/example.mp4",
            channel: 131,
            start_time: '2024.12.12 11:30',
            finish_time: '2024.12.12 11:35',
            duration: 30,
            frames_number: 40
        });
    }
    return test_data;
}

$(document).ready(function() {
    test_data = create_test_data()
    for(data of test_data) {
        console.log(data);
        create_tdp_item(data);
    }
})

function create_tdp_item(tdp_item_object) {
    fetch('/tdp_item_template.mustache')
        .then(response => response.text())
        .then(template => {
            a = document.getElementById("tdpContainer").innerHTML;
            rendered = Mustache.render(template, {tdp_item:tdp_item_object});
            document.getElementById("tdpContainer").innerHTML = a + rendered;
         })
}




