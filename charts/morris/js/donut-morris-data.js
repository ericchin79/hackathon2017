// Morris.js Charts sample data for SB Admin template

$(function() {

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Working from Home",
            value: 3
        }, {
            label: "Online",
            value: 17
        }, {
            label: "Offline",
            value: 2
        }],
        resize: true
    });



});
