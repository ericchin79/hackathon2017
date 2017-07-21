// Morris.js Charts sample data for SB Admin template

$(function() {

    // Bar Chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [
        {
            site: 'News',
            visits: 32000
        }, 
        {
        	site: 'Delve',
        	visits: 7600
        }, 
        {
        	site: 'Social',
        	visits: 12000
        },
        {
        	site: 'HR',
        	visits: 38000
        },
        {
            site: 'Apps',
            visits: 16221
        }        
        ],
        xkey: 'site',
        ykeys: ['visits'],
        labels: ['Visits'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true
    });


});
