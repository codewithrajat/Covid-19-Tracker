$(document).ready(function(){
    $.getJSON("https://api.covidindiatracker.com/state_data.json",function(data){
        var covid_data ='';
        var i = 0;
        $.each(data,function(key,value){
            covid_data += '<tr>';
            covid_data += '<td><a href="#">' +value.state+'</a></td>';
            covid_data += '<td>' +value.confirmed+'</td>';
            covid_data += '<td>'+"+" +value.cChanges+'</td>';
            covid_data += '<td>' +value.active+'</td>';
            covid_data += '<td>'+value.recovered+'</td>';
            covid_data += '<td>'+"+" +value.rChanges+'</td>';
            covid_data += '<td>' +value.deaths+'</td>';
            covid_data += '<td>'+ "+" +value.dChanges+'</td>';
            covid_data += '<tr>';
            i++;
        });
        $('#covid_table').append(covid_data);
    });
});

$(document).ready(function(){
    var url = "https://api.covid19india.org/data.json"

    $.getJSON(url,function(data){
        console.log(data)

        var total_active,total_recovered,total_deaths,total_confirmed

        var state = []
        var confirmed = []
        var recovered = []
        var deaths = []

        $.each(data.statewise,function(id,obj){
            state.push(obj.state)
            confirmed.push(obj.confirmed)
            recovered.push(obj.recovered)
            deaths.push(obj.deaths)
        })
              
        state.shift()
        confirmed.shift()
        recovered.shift()
        deaths.shift()

        total_active = data.statewise[0].active
        total_confirmed=data.statewise[0].confirmed
        total_recovered=data.statewise[0].recovered
        total_deaths=data.statewise[0].deaths

        $("#active").append(total_active)
        $("#confirmed").append(total_confirmed)
        $("#recovered").append(total_recovered)
        $("#deaths").append(total_deaths)

        var myChart = document.getElementById("myChart").getContext('2d')
        var chart = new Chart(myChart,{
            type:'line',
            data:{
                labels:state,
                datasets: [
                    {
                        label:"Confirmed Cases",
                        data: confirmed,
                        backgroundColor:"#ffb320",
                        minBarLength:1000
                    },
                    {
                        label:"Recovered Cases",
                        data: recovered,
                        backgroundColor:"#2ecc71",
                        minBarLength:1000
                    },
                    {
                        label:"Deaths Cases",
                        data: deaths,
                        backgroundColor:"#e74c3c",
                        minBarLength:1000
                    }
                ]
            },
            options:{}
        })


    })
})