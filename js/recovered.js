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

        var myChart = document.getElementById("recoveredChart").getContext('2d')
        var chart = new Chart(recoveredChart,{
            type:'bar',
            data:{
                labels:state,
                datasets: [
                    {
                        label:"Recovered Cases",
                        data: recovered,
                        backgroundColor:"#2ecc71",
                        minBarLength:1
                    }
                ]
            },
            options:{}
        })
        

    })
})