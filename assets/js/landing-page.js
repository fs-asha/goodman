var colors = ["#5369f8", "#43d39e", "#f3f4f7"];
var dataColors = $("#chart-top51").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 350,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
        },

    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%',
        },
    },
    tooltip:{
        enabled:true,
        shared:true,
        intersect: false,
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        name: 'AH-HOU_ PROD_TOTAL',
        data: [40, 80, 20, 50, 40, 20]
    }, {
        name: 'CN_ PROD_TOTAL',
        data: [0, 0, 15, 0, 5, 10]
    }, {
        name: 'HP_ INVTY_TOTAL',
        data: [10, 5, 60, 50, 100, 110]
    }, {
        name: 'PKG_ PROD_TOTAL',
        data: [50, 40, 20, 20, 60, 10]
    }, {
        name: 'Total_CPI',
        data: [15, 10, 0, 5, 4, 7]
    }, {
        name: 'ONE_UNIT',
        data: [60, 50, 100, 80, 70, 40]
    }],
    xaxis: {
        categories: ['Feb-22', 'Mar-22', 'Apr-22', 'May-22', 'Jun-22', 'Jul-22'],
    },
    // colors: colors,
    fill: {
        opacity: 0.8
    },
    legend: {
        position: "bottom",
        offsetX: 0,
        offsetY: 0
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#chart-top51"),
    options
);

chart.render();


// Bar chart
var options2 = {
    chart: {
        height: 350,
        type: 'bar',
        toolbar: {
            show: false
        },
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        data: [4, 5, 4, 5, 7, 6, 9, 8, 9, 9]
    }],
    xaxis: {
        categories: ['CN-INV_ PROD_TOTAL', 'CN-INV_ INVTY_TOTAL', 'COIL_ PROD_TOTAL', 'COIL_ INVTY_TOTAL', 'FN80_ PROD_TOTAL', 'FN80_ INVTY_TOTAL', 'FN90_ PROD_TOTAL', 'FN90_ INVTY_TOTAL', 'HP_ PROD_TOTAL', 'HP_ INVTY_TOTAL'],
    }
};

var chart = new ApexCharts(
    document.querySelector("#apex-bar-1"),
    options2
);

chart.render();