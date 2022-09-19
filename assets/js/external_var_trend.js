var extVarList = ["AH-HOU_ PROD_TOTAL", "AH-HOU_ INVTY_TOTAL", "CN_ PROD_TOTAL", "CN_ INVTY_TOTAL", "CN-INV_ PROD_TOTAL", "CN-INV_ INVTY_TOTAL", "COIL_ PROD_TOTAL", "COIL_ INVTY_TOTAL", "FN80_ PROD_TOTAL", "FN80_ INVTY_TOTAL", "FN90_ PROD_TOTAL", "FN90_ INVTY_TOTAL", "HP_ PROD_TOTAL", "HP_ INVTY_TOTAL", "HP-INV_ PROD_TOTAL", "HP-INV_ INVTY_TOTAL", "PKG_ PROD_TOTAL", "PKG_ INVTY_TOTAL", "PKG-G_ PROD_TOTAL", "PKG-G_ INVTY_TOTAL", "PKG-H_ PROD_TOTAL", "PKG-H_ INVTY_TOTAL", "PKG-M_ PROD_TOTAL", "PKG-M_ INVTY_TOTAL", "Total_CPI", "CPI_(less_energy)", "Non_Farm_Employment_(MM)", "US_Total", "ONE_UNIT", "MULTI_FAMILY", "NORTH_EAST", "MID_WEST", "SOUTH", "WEST", "Canadian_Housing_Starts_(SAAR_000)", "Annual_Rate", "New_Homes_Single", "Existing_HomesTotal", "Existing_Homes_Single", "Existing_Homes_Condo", "New_Homes", "Existing_Homes", "Unemployment Rate(%)", "Canada / U.S. Foreign Exchange Rate (Monthly Average)", "Japan / U.S. Foreign Exchange Rate  (Monthly Average)", "Producer Price Index by Commodity: Copper and Copper Products", "Producer Price Index by Commodity: Iron and Steel", "Producer Price Index by Commodity: Aluminum Sheet and Strip", "Producer Price Index by Commodity: Rubber and Plastic Products", "Producer Price Index by Industry: HVAC and Commercial Refrigeration Equipment", "Avg_Temp_(degF)", "Precipitation_(mm)", "Sum_of_Cooling_degree_days", "Sum_of_Heating_degree_days", "Total Construction Spending: Total Construction in the United States", "Total Construction Spending Residential", "Total Construction Spending Non-Residential", "Producer Price Index by Commodity - Special Indexes  Construction Materials", "All Employees, Construction", "Average Hourly Earnings of all Employees, Construction", "All Employees, Financial Activities", "International Trade: Imports: Value (goods): Total for the United States", "U.S. Imports of Goods by Customs Basis from Canada", "U.S. Imports of Goods by Customs Basis from Mexico", "Imports from Japan", "U.S. Imports of Crude Oil Quantity (thousands of barrels)", "U.S. Imports of Crude Oil Value (thousands of dollars)", "U.S. Imports of Crude Oil Unit Price (dollars)", "New Privately Owned Housing Units Authorized Total", "Imports of Goods by Principal End-Use Category Industrial Supplies", "Average Price: Electricity per Kilowatt-Hour in U.S. City Average, U.S. Dollars, Monthly, Not Seasonally Adjusted"];
var ccolors = ['#3F51B5', '#03A9F4', '#4CAF50', '#F9CE1D', '#FF9800', '#33B2DF', '#546E7A', '#D4526E', '#13D8AA', '#A5978B'];

$(document).ready(function(){
    generateBlocks();
    setTimeout(()=>{
        $('#data-loading').hide();
    },2000)
});

function randomArray(n){
    var arr = [];
    while(arr.length < n){
        var r = Math.floor(Math.random() * 100) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);
    return arr;
}

function generateBlocks(){
    let rdata = [];
    let rcolor = '';
    // for(var i=0;i<extVarList.length;i++){
    for(var i=0;i<12;i++){
    rdata = randomArray(7);
        rcolor = Math.floor(Math.random() * ccolors.length);
        var strChart="";
            strChart += "<div class=\"col-md-4 col-xl-3\">";
            strChart += "<div class=\"card\">";
            strChart += "<div class=\"card-body p-0\">";
            strChart += "<div id=\"container_"+i+"\" class=\"apex-charts\" dir=\"ltr\"><\/div>";
            strChart += "<\/div>";
            strChart += "<\/div>";
            strChart += "<\/div>";
        
        $('#extVarList').append(strChart);
        generateChart(i, rdata, ccolors[rcolor]);
    }
}

function generateChart(c, ranData, ranColor){
    setTimeout(()=>{
        Highcharts.chart('container_'+c , {
            chart: {
                type: 'areaspline',
                height:200
            },
            title: {
                text: extVarList[c],
                style: {
                    color: '#555555',
                    fontWeight: 'normal',
                    fontSize: 12
                }
            },
            legend: {
                enabled: false
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
                    width: 1,
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
            // colors: ['#fd6851', '#8f99f3', '#fdf095'],
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.7,
                    pointPlacement: 'on'
                },
                series: {
                    fillColor: {
                        linearGradient: [0, 0, 0, 300],
                        stops: [
                            // [0, '#fd685170'],
                            // [1, '#fd685100']
                            [0, ranColor+'70'],
                            [1, ranColor+'00']
                        ]
                    }
                }
            },
            
            series: [{
                name: 'Count',
                data: ranData
            }],
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            }
        });
    },1500)
}