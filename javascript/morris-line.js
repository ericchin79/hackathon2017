// Morris.js Charts sample data for SB Admin template

$(function() {

    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
            Date: '2016-05-10',
            Rating: 2
        }, {
            Date: '2016-07-04',
            Rating: 3
        }, {
            Date: '2016-10-19',
            Rating: 2
        }, {
            Date: '2016-12-04',
            Rating: 3
        }, {
            Date: '2017-01-14',
            Rating: 4
        }, {
            Date: '2017-05-20',
            Rating: 5
        }, ],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'Date',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['Rating'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Rating'],
        // Disables line smoothing
        smooth: false,
        resize: true
    });

});
