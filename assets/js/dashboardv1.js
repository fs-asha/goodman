$(function() {
    // var start = moment().subtract(29, 'days');
    // var end = moment();
    var start = moment('01-Jan-2022');
    var end = moment('15-Feb-2022');
    var start2 = moment('01-Jan-2022');
    var end2 = moment('21-Feb-2022');

    function cb(start, end) {
        $('#reportrange span').html(start.format('DD-MM-YYYY') + ' - to - ' + end.format('DD-MM-YYYY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);
    cb(start, end);

    function cb2(start2, end2) {
        $('#reportrange2 span').html(start2.format('DD-MM-YYYY') + ' - to - ' + end2.format('DD-MM-YYYY'));
    }
    $('#reportrange2').daterangepicker({
        startDate: start2,
        endDate: end2,
        ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb2);    
    cb2(start2, end2);

});

// Facebook CMO
Highcharts.chart('fbcmoContainer', {
    chart: {
        type: 'areaspline',
        height:300
    },
    title: {
        text: ''
    },
    legend: {
        enabled: true
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul'
        ],
        title: {
            text: 'Months'
        },
        // plotBands: [{ // visualize the weekend (to highlighted area)
        //     from: 3,
        //     to: 10,
        //     color: 'rgba(68, 170, 213, .1)'
        // }]
    },
    yAxis: {
        crosshair: {
            width: 2,
            color: '#999',
            dashStyle: 'dot'
        },
        title: {
            text: ''
        },
        lineWidth: 1,
          gridLineColor:'#f2f2f2',
    },
    tooltip: {
        borderWidth: 0,
        borderRadius:30,
        shadow: true,
        useHTML: true,
        formatter: function () {
            //console.log(this.point.options.y);
            return '<div class="hcTooltip"><h4 style="margin-bottom:2px;"><i class="fe fe-users fe-bgcircle"></i> '+this.point.options.y+'</h4> Count</div>';
        }
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.6,
            pointPlacement: 'on'
        }
    },
    colors: ['#f2907b', '#72c5d1', '#f2d57b'],
    series: [{
        name: 'Likes',
        data: [521, 523, 855, 510, 812, 578, 400]
    }, {
        name: 'Comments',
        data: [421, 333, 414, 231, 135, 324, 293]
    }, {
        name: 'Share',
        data: [75, 62, 81, 114, 113, 23, 100]
    }],
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
});

// Instagram CM
Highcharts.chart('instacmContainer', {
    chart: {
        type: 'areaspline',
        height:300
    },
    title: {
        text: ''
    },
    legend: {
        enabled: true
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul'
        ],
        title: {
            text: 'Months'
        },
        // plotBands: [{ // visualize the weekend (to highlighted area)
        //     from: 3,
        //     to: 10,
        //     color: 'rgba(68, 170, 213, .1)'
        // }]
    },
    yAxis: {
        crosshair: {
            width: 2,
            color: '#999',
            dashStyle: 'dot'
        },
        title: {
            text: ''
        },
        lineWidth: 1,
          gridLineColor:'#f2f2f2',
    },
    tooltip: {
        borderWidth: 0,
        borderRadius:30,
        shadow: true,
        useHTML: true,
        formatter: function () {
            //console.log(this.point.options.y);
            return '<div class="hcTooltip"><h4 style="margin-bottom:2px;"><i class="fe fe-users fe-bgcircle"></i> '+this.point.options.y+'</h4> Count</div>';
        }
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.7,
            pointPlacement: 'on'
        }
    },
    colors: ['#fd6851', '#8f99f3', '#fdf095'],
    series: [{
        name: 'Likes',
        data: [510, 812, 521, 523, 855, 578, 400]
    }, {
        name: 'Comments',
        data: [333, 414, 421, 231, 135, 324, 293]
    }, {
        name: 'Share',
        data: [75, 62, 81, 114, 113, 23, 100]
    }],
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
});

// Facebook CM
Highcharts.chart('fbcmContainer', {
    chart: {
        type: 'areaspline',
        height:300
    },
    title: {
        text: ''
    },
    legend: {
        enabled: true
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul'
        ],
        title: {
            text: 'Months'
        },
        // plotBands: [{ // visualize the weekend (to highlighted area)
        //     from: 3,
        //     to: 10,
        //     color: 'rgba(68, 170, 213, .1)'
        // }]
    },
    yAxis: {
        crosshair: {
            width: 2,
            color: '#999',
            dashStyle: 'dot'
        },
        title: {
            text: 'Count'
        },
        lineWidth: 1,
          gridLineColor:'#f2f2f2',
    },
    tooltip: {
        borderWidth: 0,
        borderRadius:30,
        shadow: true,
        useHTML: true,
        formatter: function () {
            //console.log(this.point.options.y);
            return '<div class="hcTooltip"><h4 style="margin-bottom:2px;"><i class="fe fe-users fe-bgcircle"></i> '+this.point.options.y+'</h4> Count</div>';
        }
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.6,
            pointPlacement: 'on'
        }
    },
    colors: ['#f2907b', '#72c5d1', '#f2d57b'],
    series: [{
        name: 'Likes',
        data: [321, 423, 355, 578, 400, 510, 812]
    }, {
        name: 'Comments',
        data: [221, 233, 114, 231, 293, 135, 324]
    }, {
        name: 'Share',
        data: [114, 113, 23, 75, 62, 81, 100]
    }],
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
});

// Youtube CM
Highcharts.chart('ytcmContainer', {
    chart: {
        zoomType: 'xy',
        height:300
    },
    title: {
        text: ''
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    colors:["#008ffb", "#f89c5e"],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
        },
        title: {
            text: 'Likes',
        }
    }, { // Secondary yAxis
        title: {
            text: 'Views',
        },
        labels: {
            format: '{value}',
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        
    },
    series: [{
        name: 'Views',
        type: 'column',
        yAxis: 1,
        data: [49, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54],
        tooltip: {
            valueSuffix: ''
        }

    }, {
        name: 'Likes',
        type: 'spline',
        data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9],
        tooltip: {
            valueSuffix: ''
        }
    }],
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    }
});

// Twitter smachart
Highcharts.chart('twsmoContainer', {
    chart: {
        type: 'column',
        height:300
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    colors:['#4b9aff', '#ff6060', '#51d29f', '#ffb46e'],
    series: [{
        name: 'Reply',
        data: [126, 156, 51, 26, 262, 53, 180, 114, 238, 142, 236, 99]

    }, {
        name: 'Like',
        data: [167, 278, 89, 258, 135, 102, 202, 300, 113, 232, 177, 146]

    }, {
        name: 'Retweet',
        data: [30, 69, 281, 208, 97, 159, 227, 67, 127, 223, 157, 188]

    // }, {
    //     name: 'Quote',
    //     data: [179, 154, 150, 48, 155, 136, 290, 61, 87, 169, 165, 58]

    }],
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    }
});