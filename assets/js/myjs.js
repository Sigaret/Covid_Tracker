


function getDataVaksin(){
    $.ajax({
        type: "get",
        url: "https://vaksincovid19-api.now.sh/api/vaksin",        
        dataType: "json",        
        success: function (result) {                                       
                console.log(result);                            
        }
    });
}

function getDataCovid(){
    $.ajax({
        type: "get",
        url: "https://apicovid19indonesia-v2.vercel.app/api/indonesia/more",        
        dataType: "json",
        success: function (result) {
            console.log(result);            
        }
    });

    return result;
}

function getDataCovidPerCity(){
    $.ajax({
        type: "get",
        url: "https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/alt",        
        dataType: "json",
        success: function (result) {
            console.log(result);            
        }
    });

    return result;
}

function getDataGlobal(){
    $.ajax({
        type: "get",
        url: "https://covid19.mathdro.id/api",        
        dataType: "json",
        success: function (result) {
            //console.log(typeof result.confirmed.value);                                    
            document.getElementById("kmf_g").innerHTML = formatNumber(result.confirmed.value);
            document.getElementById("smb_g").innerHTML = formatNumber(result.recovered.value);
            document.getElementById("dth_g").innerHTML = formatNumber(result.deaths.value);

        }
    });    
}


function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}



// function grafikGlobal(){    
//     $('#grafik_g').css({
//         'background-image': 'url(https://corona.dnsforfamily.com/graph.png?c=global)',      
//     });    
// }


function getDataNews(){

    $.ajax({
        url:'https://newsapi.org/v2/top-headlines?/',
        type:'get',
        datatype: 'json',
        data:{
            'q':'covid',
            'apiKey': '9418a9ea424f4762a1e91cd6fb359a1f'            
        },
        success: function(result){
            let berita = result.articles;
            // console.log(berita);
            $.each(berita,function(i,data){
                $('#berita_g').append(`
                <div class="col-3 mt-2">
                <!-- Simple Card -->
                <div class="card shadow-sm border-0">
                    <img class="card-img-top" src="`+data.urlToImage+`" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">`+data.title+`</h5>
                        <p class="card-text text-muted">
                            `+data.description+`
                        </p>
                        <a target="_blank" rel="noopener noreferrer" href="`+data.url+`" class="btn btn-dark btn-round">Read More</a>
                    </div>
                </div>
            </div>
                `);

            });
        }
    });
}

getDataNews();

$.ajax({
    'url': "https://covid-19.dataflowkit.com/v1",
    'method': "GET",
    'contentType': 'application/json'
}).done( function(data) {
        //delete data[223];    
        $.fn.dataTable.ext.errMode = 'none';                    
     $('#example').dataTable( {
        "aaData": data,
        "columns": [
            { "data": "Country_text" },
            { "data": "New Cases_text" },
            { "data": "New Deaths_text" },
            { "data": "Total Cases_text" },
            { "data": "Total Deaths_text" },
            { "data": "Total Recovered_text" },
            { "data": "Last Update" }
        ],
        aaSorting: [[1, 'desc']]
    });    
    document.getElementById("ksb_g").innerHTML = formatNumber(data[0]["New Cases_text"]);
    document.getElementById("kmf_g").innerHTML = formatNumber(data[0]["Total Cases_text"]);
    document.getElementById("smb_g").innerHTML = formatNumber(data[0]["Total Recovered_text"]);
    document.getElementById("dth_g").innerHTML = formatNumber(data[0]["Total Deaths_text"]);
    document.getElementById("updated").innerHTML = data[0]["Last Update"];
});


$.ajax({
    'url': "https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi",
    'method': "GET",
    'contentType': 'application/json'
}).done( function(data) {
        //delete data[223];            
   //     $.fn.dataTable.ext.errMode = 'none';                    
     $('#table_idn').dataTable( {
        "aaData": data,
        "columns": [
            { "data": "provinsi" },
            { "data": "kasus" },
            { "data": "dirawat" },
            { "data": "sembuh" },
            { "data": "meninggal" }
        ],
        aaSorting: [[1, 'desc']]
    });    
    // document.getElementById("ksb_g").innerHTML = formatNumber(data[0]["New Cases_text"]);
    // document.getElementById("kmf_g").innerHTML = formatNumber(data[0]["Total Cases_text"]);
    // document.getElementById("smb_g").innerHTML = formatNumber(data[0]["Total Recovered_text"]);
    // document.getElementById("dth_g").innerHTML = formatNumber(data[0]["Total Deaths_text"]);
    // document.getElementById("updated").innerHTML = data[0]["Last Update"];
});


$.ajax({
    'url': "https://apicovid19indonesia-v2.vercel.app/api/indonesia/more",
    'method': "GET",
    'contentType': 'application/json'
}).done( function(data) {
    //console.log(data["total"]["positif"])
    result = data["total"]
     document.getElementById("kmf_idn").innerHTML = formatNumber(result["positif"]);
     document.getElementById("prw_idn").innerHTML = formatNumber(result["dirawat"]);
     document.getElementById("smb_idn").innerHTML = formatNumber(result["sembuh"]);
     document.getElementById("dth_idn").innerHTML = formatNumber(result["meninggal"]);
     document.getElementById("updated_idn").innerHTML = result["lastUpdate"];
});

function getDataNewsIDN(){

    $.ajax({
        url:'https://newsapi.org/v2/top-headlines?/',
        type:'get',
        datatype: 'json',
        data:{
            'country' : 'id',            
            'q':'covid',
            'apiKey': '9418a9ea424f4762a1e91cd6fb359a1f'            
        },
        success: function(result){
            let berita = result.articles;   
            // console.log(berita);
            $.each(berita,function(i,data){
                $('#berita_idn').append(`
                <div class="col-3 mt-2">
                <!-- Simple Card -->
                <div class="card shadow-sm border-0">
                    <img class="card-img-top" src="`+data.urlToImage+`" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">`+data.title+`</h5>
                        <p class="card-text text-muted">
                            `+data.description+`
                        </p>
                        <a target="_blank" rel="noopener noreferrer" href="`+data.url+`" class="btn btn-dark btn-round">Read More</a>
                    </div>
                </div>
            </div>
                `);

            });
        }
    });
}

getDataNewsIDN();

$.ajax({
    'url': "https://vaksincovid19-api.vercel.app/api/vaksin",
    'method': "GET",
    'contentType': 'application/json'
}).done( function(data) {
    //console.log(data["total"]["positif"])
     //console.log(data["totalsasaran"]);
     document.getElementById("vaksin_1").innerHTML = formatNumber(data["vaksinasi1"]);
     document.getElementById("vaksin_2").innerHTML = formatNumber(data["vaksinasi2"]);
     document.getElementById("sasaran").innerHTML = formatNumber(data["totalsasaran"]);
     document.getElementById("pk").innerHTML = formatNumber(data["sasaranvaksinsdmk"]);
     document.getElementById("lu").innerHTML = formatNumber(data["sasaranvaksinlansia"]);
     document.getElementById("pp").innerHTML = formatNumber(data["sasaranvaksinpetugaspublik"]);
  
});







