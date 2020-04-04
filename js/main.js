var data =null;
var graph = null;
var allData = JSON.parse($('#allData').text());


var csv ="";

function custom(x, y) {
    return (-Math.sin(x/Math.PI) * Math.cos(y/Math.PI) * 10 + 10) * 1000;
}
function countProperties(obj) {
    var count = 0;

    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            ++count;
    }

    return count;
}

/* ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~
international Data
* ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~  */

var timeFormat = 'DD/MM/YYYY';
var mindate = Date("2020-03-19");
var worldoMeters = allData.worldoMeters;
var count = countProperties(worldoMeters);
var temp = [];


canada = [];
usa = [];
italy =[];
spain = [];
china = [];
uk = [];

canadaDeath = [];
usaDeath = [];
italyDeath =[];
spainDeath = [];
chinaDeath = [];
ukDeath = [];

for(var i=0; i < count; i++){

    var xval = worldoMeters[i].date;
    var xvals = xval.split('-');
    xval = xvals[0] + '-' + xvals[1] + '-' + xvals[2] + 'T' + xvals[3] + ':00:00';
    for(var j=0; j< worldoMeters[i].alldata.body.length; j++){
        switch(worldoMeters[i].alldata.body[j][0]){
            case 'Canada':
                canada[i]= { t: new Date(xval), y: parseInt(String(worldoMeters[i].alldata.body[j][1]).replace(",", ""))};
                canadaDeath[i]= { t: new Date(xval), y: parseInt(String(worldoMeters[i].alldata.body[j][3]).replace(",", ""))};
                break;
            case 'USA':
                usa[i]= {t: new Date(xval), y: parseInt(String(worldoMeters[i].alldata.body[j][1]).replace(",", ""))  };
                usaDeath[i]= {t: new Date(xval), y: parseInt(String(worldoMeters[i].alldata.body[j][3]).replace(",", ""))  };
                break;
            case 'Italy':
                italy[i]= {t: new Date(xval), y: parseInt(String(worldoMeters[i].alldata.body[j][1]).replace(",", ""))  };
                italyDeath[i]= {t: new Date(xval), y: parseInt(String(worldoMeters[i].alldata.body[j][3]).replace(",", ""))  };
                break;
            case 'Spain':
                spain[i]= {t: new Date(xval), y: parseInt(String(worldoMeters[i].alldata.body[j][1]).replace(",", ""))  };
                spainDeath[i]= {t: new Date(xval), y: parseInt(String(worldoMeters[i].alldata.body[j][3]).replace(",", ""))  };
                break;
            case 'China':
                china[i]= {t: new Date(xval), y: parseInt(String(worldoMeters[i].alldata.body[j][1]).replace(",", ""))};
                chinaDeath[i]= {t: new Date(xval), y: parseInt(String(worldoMeters[i].alldata.body[j][3]).replace(",", ""))};
                break;
            case 'UK':
                uk[i]= {t: new Date(xval), y: parseInt(String(worldoMeters[i].alldata.body[j][1]).replace(",", ""))};
                ukDeath[i]= {t: new Date(xval), y: parseInt(String(worldoMeters[i].alldata.body[j][3]).replace(",", ""))};
                break;
        }
    }
}
var canY=0;
percCanada = [];
percDeathCanada = [];
var usaY=0;
percUSA = [];
percDeathUSA = [];
var itaY=0;
percItaly = [];
percDeathItaly = [];
var spaY = 0;
percSpain = [];
percDeathSpain = [];
var ukY=0;
percUK= [];
percDeathUK= [];
percDeathChina= [];
for(i=0; i< count-1; i++){
    try{

        percDeathCanada[i] = {t: canada[i].t, y: 100*canadaDeath[i].y/canada[i].y};
        percDeathUSA[i] = {t: usa[i].t, y: 100*usaDeath[i].y/usa[i].y};
        percDeathItaly[i] = {t: italy[i].t, y: 100*italyDeath[i].y/italy[i].y};
        percDeathSpain[i] = {t: spain[i].t, y: 100*spainDeath[i].y/spain[i].y};
        percDeathChina[i] = {t: china[i].t, y: 100*chinaDeath[i].y/china[i].y};
        percDeathUK[i] = {t: uk[i].t, y: 100*ukDeath[i].y/uk[i].y};

        canY = canada[i+1].y - canada[i].y;
        //if(canY!=0){
            percCanada[i] = {t: canada[i].t, y: 100*canY/canada[i].y};
        //}
        usaY = usa[i+1].y - usa[i].y;
        //if(usaY!=0){
            percUSA[i] = {t: usa[i].t, y: 100*usaY/usa[i].y};
        //}
        itaY = italy[i+1].y - italy[i].y;
        //if(itaY!=0){
            percItaly[i] = {t: italy[i].t, y: 100*itaY/italy[i].y};
        //}
        spaY = spain[i+1].y - spain[i].y;
        //if(spaY!=0){
            percSpain[i] = {t: spain[i].t, y: 100*spaY/spain[i].y};
        //}
        ukY = uk[i+1].y - uk[i].y;
        //if(spaY!=0){
        percUK[i] = {t: uk[i].t, y: 100*ukY/uk[i].y};
        //}

    }catch(err){
        console.log(err);
    }
}


/* ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~
Provincial Data
* ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~  */

var healthCanada = allData.healthCanada;
var healthCanadaTables = allData.healthCanadaTables;
var count = countProperties(healthCanada);


alberta = [];
ontario = [];
bc = [];
quebec = [];
manitoba = [];
saskatchewan = [];

albertaDeath = [];
ontarioDeath = [];
bcDeath = [];
quebecDeath = [];
manitobaDeath = [];
saskatchewanDeath = [];



var tnot=[];

var dateCollection = new Date('2020-03-21');
var Tables = countProperties(healthCanadaTables);
var daysOfYear = [];
var counter = 0;
var countplus = false;
for (var d = new Date(2020, 0, 31); d <= dateCollection; d.setDate(d.getDate() + 1)) {
    countplus = false;
    console.log(d);
    for(var j=0; j< Tables; j++){
        try{
            Temp = healthCanadaTables[j][3].split('-');
            varDate = Temp[2]+'-'+Temp[1]+'-'+Temp[0]+'T00:00:00';
            var dTest =varDate.split('T')[0];//.toISOString().split('T')[0];
            var dOrig = d.toISOString().split('T')[0];
            var pTest =healthCanadaTables[j][1];

            tester = pTest + '|' +dTest;
            //console.log('|'+dOrig);
            //console.log(tester);
            switch(tester){
                case 'Alberta|'+ dOrig:
                    alberta[counter]= { t: new Date(String(d)), y: healthCanadaTables[j][4]};
                    albertaDeath[counter]= { t: new Date(String(d)), y: healthCanadaTables[j][6]};
                    countplus=true;
                    break;
                case 'Ontario|'+ dOrig:
                    ontario[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][4]};
                    ontarioDeath[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][6]};
                    countplus=true;
                    break;
                case 'British Columbia|'+ dOrig:
                    bc[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][4]};
                    bcDeath[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][6]};
                    countplus=true;
                    break;
                case 'British    Columbia|'+ dOrig:
                    bc[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][4]};
                    bcDeath[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][6]};
                    countplus=true;
                    break;
                case 'Manitoba|'+ dOrig:
                    manitoba[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][4]};
                    manitobaDeath[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][6]};
                    countplus=true;
                    break;
                case 'Quebec|'+ dOrig:
                    quebec[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][4]};
                    quebecDeath[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][6]};
                    countplus=true;
                    break;
                case 'Saskatchewan' | dOrig:
                    saskatchewan[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][4]};
                    saskatchewanDeath[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][6]};
                    countplus=true;
                    break;
            }
        }catch(err){
            //console.log(err);
        }
        if(!alberta[counter]){
            alberta[counter]={ t: new Date(String(d)), y: 0};
        }
        if(!ontario[counter]){
            ontario[counter]={ t: new Date(String(d)), y: 0};
        }
        if(!bc[counter]){
            bc[counter]={ t: new Date(String(d)), y: 0};
        }
        if(!manitoba[counter]){
            manitoba[counter]={ t: new Date(String(d)), y: 0};
        }
        if(!quebec[counter]){
            quebec[counter]={ t: new Date(String(d)), y: 0};
        }
        if(!saskatchewan[counter]){
            saskatchewan[counter]={ t: new Date(String(d)), y: 0};
        }
        if(!albertaDeath[counter]){
            albertaDeath[counter]={ t: new Date(String(d)), y: 0};
        }
        if(!ontarioDeath[counter]){
            ontarioDeath[counter]={ t: new Date(String(d)), y: 0};
        }
        if(!bcDeath[counter]){
            bcDeath[counter]={ t: new Date(String(d)), y: 0};
        }
        if(!manitobaDeath[counter]){
            manitobaDeath[counter]={ t: new Date(String(d)), y: 0};
        }
        if(!quebecDeath[counter]){
            quebecDeath[counter]={ t: new Date(String(d)), y: 0};
        }
        if(!saskatchewanDeath[counter]){
            saskatchewanDeath[counter]={ t: new Date(String(d)), y: 0};
        }
    }
    if(countplus){
        counter++;
    }
    daysOfYear.push(new Date(d));
}
for(i=0; i < 27; i++){
    try{
        countplus = false;
        xval = healthCanada[i].date;
        var xvals = xval.split('-');
        xval = xvals[0] + '-' + xvals[1] + '-' + xvals[2] + 'T' + xvals[3] + ':00:00';
        for(var j=0; j< healthCanada[i].alldata.body.length; j++){
            try{
                switch(healthCanada[i].alldata.body[j][0]){
                    case 'Alberta':
                        alberta[counter]= { t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][1]).replace(",", ""))};
                        albertaDeath[counter]= { t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][3]).replace(",", ""))};
                        countplus=true;
                        break;
                    case 'Ontario':
                        ontario[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][1]).replace(",", ""))  };
                        ontarioDeath[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][3]).replace(",", ""))  };
                        countplus=true;
                        break;
                    case 'British Columbia':
                        bc[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][1]).replace(",", ""))  };
                        bcDeath[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][3]).replace(",", ""))  };
                        countplus=true;
                        break;
                    case 'British    Columbia':
                        bc[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][1]).replace(",", ""))  };
                        bcDeath[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][3]).replace(",", ""))  };
                        countplus=true;
                        break;
                    case 'Manitoba':
                        manitoba[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][1]).replace(",", ""))  };
                        manitobaDeath[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][3]).replace(",", ""))  };
                        countplus=true;
                        break;
                    case 'Quebec':
                        quebec[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][1]).replace(",", ""))};
                        quebecDeath[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][3]).replace(",", ""))};
                        countplus=true;
                        break;
                    case 'Saskatchewan':
                        saskatchewan[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][1]).replace(",", ""))};
                        saskatchewanDeath[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][3]).replace(",", ""))};
                        countplus=true;
                        break;
                    default:

                        break;
                }
            }catch(err){
                console.log(err);
            }
        }
    }catch(err){
        console.log(err);
    }
    if(countplus){
        counter++;
    }
}
dateCollection = new Date('2020-04-02');
for ( d = new Date(2020, 2, 28); d <= dateCollection; d.setDate(d.getDate() + 1)) {
    countplus = false;
    console.log(d);
    for(var j=0; j< Tables; j++){
        try{
            Temp = healthCanadaTables[j][3].split('-');
            varDate = Temp[2]+'-'+Temp[1]+'-'+Temp[0]+'T00:00:00';
            var dTest =varDate.split('T')[0];//.toISOString().split('T')[0];
            var dOrig = d.toISOString().split('T')[0];
            var pTest =healthCanadaTables[j][1];

            tester = pTest + '|' +dTest;
            //console.log('|'+dOrig);
            //console.log(tester);
            switch(tester){
                case 'Alberta|'+ dOrig:
                    alberta[counter]= { t: new Date(String(d)), y: healthCanadaTables[j][4]};
                    albertaDeath[counter]= { t: new Date(String(d)), y: healthCanadaTables[j][6]};
                    countplus=true;
                    break;
                case 'Ontario|'+ dOrig:
                    ontario[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][4]};
                    ontarioDeath[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][6]};
                    countplus=true;
                    break;
                case 'British Columbia|'+ dOrig:
                    bc[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][4]};
                    bcDeath[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][6]};
                    countplus=true;
                    break;
                case 'British    Columbia|'+ dOrig:
                    bc[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][4]};
                    bcDeath[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][6]};
                    countplus=true;
                    break;
                case 'Manitoba|'+ dOrig:
                    manitoba[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][4]};
                    manitobaDeath[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][6]};
                    countplus=true;
                    break;
                case 'Quebec|'+ dOrig:
                    quebec[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][4]};
                    quebecDeath[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][6]};
                    countplus=true;
                    break;
                case 'Saskatchewan' | dOrig:
                    saskatchewan[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][4]};
                    saskatchewanDeath[counter]= {t: new Date(String(d)), y: healthCanadaTables[j][6]};
                    countplus=true;
                    break;
            }
        }catch(err){
            //console.log(err);
        }
        if(!alberta[counter]){
            alberta[counter]={ t: new Date(String(d)), y: alberta[counter-1].y};
        }
        if(!ontario[counter]){
            ontario[counter]={ t: new Date(String(d)), y: ontario[counter-1].y};
        }
        if(!bc[counter]){
            bc[counter]={ t: new Date(String(d)), y: bc[counter-1].y};
        }
        if(!manitoba[counter]){
            manitoba[counter]={ t: new Date(String(d)), y: manitoba[counter-1].y};
        }
        if(!quebec[counter]){
            quebec[counter]={ t: new Date(String(d)), y: quebec[counter-1].y};
        }
        if(!saskatchewan[counter]){
            saskatchewan[counter]={ t: new Date(String(d)), y: saskatchewan[counter-1].y};
        }
        if(!albertaDeath[counter]){
            albertaDeath[counter]={ t: new Date(String(d)), y: albertaDeath[counter-1].y};
        }
        if(!ontarioDeath[counter]){
            ontarioDeath[counter]={ t: new Date(String(d)), y: ontarioDeath[counter-1].y};
        }
        if(!bcDeath[counter]){
            bcDeath[counter]={ t: new Date(String(d)), y: bcDeath[counter-1].y};
        }
        if(!manitobaDeath[counter]){
            manitobaDeath[counter]={ t: new Date(String(d)), y: manitobaDeath[counter-1].y};
        }
        if(!quebecDeath[counter]){
            quebecDeath[counter]={ t: new Date(String(d)), y: quebecDeath[counter-1].y};
        }
        if(!saskatchewanDeath[counter]){
            saskatchewanDeath[counter]={ t: new Date(String(d)), y: saskatchewanDeath[counter-1].y};
        }
    }
    if(countplus){
        counter++;
    }
    daysOfYear.push(new Date(d));
}

for(i=47; i < count; i++){
    try{
        countplus=false;
        xval = healthCanada[i].date;
        var xvals = xval.split('-');
        xval = xvals[0] + '-' + xvals[1] + '-' + xvals[2] + 'T' + xvals[3] + ':00:00';
        for(var j=0; j< healthCanada[i].alldata.body.length; j++){
            try{
                switch(healthCanada[i].alldata.body[j][0]){
                    case 'Alberta':
                        alberta[counter]= { t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][1]).replace(",", ""))};
                        albertaDeath[counter]= { t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][3]).replace(",", ""))};
                        countplus=true;
                        //tnot1[i]=alberta[i].y;
                        break;
                    case 'Ontario':
                        ontario[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][1]).replace(",", ""))  };
                        ontarioDeath[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][3]).replace(",", ""))  };
                        countplus=true;
                        //tnot2[i]=ontario[i].y;
                        break;
                    case 'British Columbia':
                        bc[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][1]).replace(",", ""))  };
                        bcDeath[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][3]).replace(",", ""))  };
                        countplus=true;
                        //tnot3[i]=bc[i].y;
                        break;
                    case 'British    Columbia':
                        bc[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][1]).replace(",", ""))  };
                        bcDeath[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][3]).replace(",", ""))  };
                        countplus=true;
                        //tnot3[i]=bc[i].y;
                        break;
                    case 'Manitoba':
                        manitoba[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][1]).replace(",", ""))  };
                        manitobaDeath[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][3]).replace(",", ""))  };
                        countplus=true;
                        //tnot4[i]=manitoba[i].y;
                        break;
                    case 'Quebec':
                        quebec[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][1]).replace(",", ""))};
                        quebecDeath[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][3]).replace(",", ""))};
                        countplus=true;
                        //tnot5[i]=quebec[i].y;
                        break;
                    case 'Saskatchewan':
                        saskatchewan[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][1]).replace(",", ""))};
                        saskatchewanDeath[counter]= {t: new Date(xval), y: parseInt(String(healthCanada[i].alldata.body[j][3]).replace(",", ""))};
                        countplus=true;
                        //tnot6[i]=saskatchewan[i].y;
                        break;
                    default:

                        break;
                }
            }catch(err){
                console.log(err);
            }
        }
    }catch(err){
        console.log(err);
    }
    if(countplus){
        counter++;
    }
}
var albY=0;
percAlberta = [];
var ontY=0;
percOntario = [];
var bcY=0;
percBC = [];
var queY = 0;
percQuebec = [];
var manY=0;
percManitoba= [];
var sasY=0;
percSaskatchewan= [];

percDeathAlberta=[];
percDeathOntario=[];
percDeathBC=[];
percDeathQuebec=[];
percDeathManitoba=[];
percDeathSaskatchewan=[];

for(i=0; i< alberta.length-1; i++){

    try{
        albY = alberta[i+1].y - alberta[i].y;

        if(albY==0) {
            percAlberta[i] = {t: alberta[i].t, y: 0};
        }else{
            if(100*albY/alberta[i].y>100){
                percAlberta[i] = {t: alberta[i].t, y: 100};
            }else{
                percAlberta[i] = {t: alberta[i].t, y: 100*albY/alberta[i].y};
            }
        }

    }catch(err){
        console.log(err);
    }
    try{
                //}
        ontY = ontario[i+1].y - ontario[i].y;
        if(ontY==0) {
            percOntario[i] = {t: ontario[i].t, y: 0};
        }else{

            if(100*ontY/ontario[i].y>100){
                percOntario[i] = {t: ontario[i].t, y: 100};
            }else{
                percOntario[i] = {t: ontario[i].t, y: 100*ontY/ontario[i].y};
            }
        }
    }catch(err){
        console.log(err);
    }
    try{

        bcY = bc[i+1].y - bc[i].y;
        if(bcY==0) {
            percBC[i] = {t: bc[i].t, y: 0};
        }else{

            if(100*bcY/bc[i].y>100){
                percBC[i] = {t: bc[i].t, y: 100};
            }else{
                percBC[i] = {t: bc[i].t, y: 100*bcY/bc[i].y};
            }
        }
    }catch(err){
        console.log(err);
    }
    try{

        queY = quebec[i+1].y - quebec[i].y;
        if(queY!=0) {
            if(100 * queY / quebec[i].y>100){
                percQuebec[i] = {t: quebec[i].t, y: 100};
            }else{
                percQuebec[i] = {t: quebec[i].t, y: 100 * queY / quebec[i].y};
            }
        }else{
            percQuebec[i] = {t: quebec[i].t, y: 0};
        }
    }catch(err){
        console.log(err);
    }try{
        //}
        manY = manitoba[i+1].y - manitoba[i].y;
        if(manY!=0){
            if(100*manY/manitoba[i].y>100){
                percManitoba[i] = {t: manitoba[i].t, y: 100};
            }
            else if(100*manY/manitoba[i].y<0){
                percManitoba[i] = {t: manitoba[i].t, y: 0};
            }
            else{
                percManitoba[i] = {t: manitoba[i].t, y: 100*manY/manitoba[i].y};
            }
        }
        else{
            percManitoba[i] = {t: manitoba[i].t, y: 0};
        }

        //}
    }catch(err) {
        console.log(err);
    }try{
        //}
        sasY = saskatchewan[i+1].y - saskatchewan[i].y;
        if(sasY!=0){
            if(100*sasY/saskatchewan[i].y>100){
                percSaskatchewan[i] = {t: saskatchewan[i].t, y: 100};
            }
            else if(100*sasY/saskatchewan[i].y<0){
                percSaskatchewan[i] = {t: saskatchewan[i].t, y: 0};
            }
            else{
                percSaskatchewan[i] = {t: saskatchewan[i].t, y: 100*sasY/saskatchewan[i].y};
            }
        }
        else{
            percSaskatchewan[i] = {t: saskatchewan[i].t, y: 0};
        }

        //}
    }catch(err) {
        console.log(err);
    }




}

var config = {
    type: 'line',
    data: {
        labels: xvals,
        datasets: [
            {
                label: 'Canada Cases',
                borderColor: '#FF0000',
                backgroundColor: '#FFaf30',
                data: canada,
            },
            {
                label: 'USA Cases',
                //fill:false,
                borderColor: '#4383cc',
                backgroundColor: '#8ab2df',
                data: usa,
            },
            {
                label: 'Italy Cases',
                borderColor: '#a4c15b',
                backgroundColor: '#c6d899',
                data: italy,
            },
            {
                label: 'Spain Cases',
                borderColor: '#a39cbb',
                backgroundColor: '#b7afd2',
                data: spain,
            },
            {
                label: 'China Cases',
                borderColor: '#cc1a00',
                backgroundColor: '#ee5500',
                data: china,
            },
            {
                label: 'UK Cases',
                borderColor: '#dba9a9',
                backgroundColor: '#c06969',
                data: uk,
            }/*,
            {
                label: 'Ontario Deaths',
                borderColor: '#a52a2a',
                backgroundColor: '#7c2020',
                data: ontarioDeath,
            },
            {
                label: 'Total Deaths',
                borderColor: '#FF1a2a',
                backgroundColor: '#FF2020',
                data: totalDeath,
            }*/
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'WorldoMeters Tables Across Time'
        },
        tooltips: {
            mode: 'index',
        },
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                type: 'time',
                distribution: 'series',
                offset: true,
                ticks: {
                    major: {
                        enabled: true,
                        fontStyle: 'bold'
                    },
                    source: 'data',
                    autoSkip: true,
                    autoSkipPadding: 75,
                    maxRotation: 0,
                    sampleSize: 100
                },
                afterBuildTicks: function(scale, ticks) {
                    var majorUnit = scale._majorUnit;
                    var firstTick = ticks[0];
                    var i, ilen, val, tick, currMajor, lastMajor;

                    val = moment(ticks[0].value);
                    if ((majorUnit === 'minute' && val.second() === 0)
                        || (majorUnit === 'hour' && val.minute() === 0)
                        || (majorUnit === 'day' && val.hour() === 9)
                        || (majorUnit === 'month' && val.date() <= 3 && val.isoWeekday() === 1)
                        || (majorUnit === 'year' && val.month() === 0)) {
                        firstTick.major = true;
                    } else {
                        firstTick.major = false;
                    }
                    lastMajor = val.get(majorUnit);

                    for (i = 1, ilen = ticks.length; i < ilen; i++) {
                        tick = ticks[i];
                        val = moment(tick.value);
                        currMajor = val.get(majorUnit);
                        tick.major = currMajor !== lastMajor;
                        lastMajor = currMajor;
                    }
                    return ticks;
                }
            }],
            yAxes: [{
                stacked: false,
                scaleLabel: {
                    display: true,
                    labelString: 'Number of People.'
                }

            }]
        }
    }
};

var config2 = {
    type: 'line',
    data: {
        labels: xvals,
        datasets: [
            {
                label: 'Canada Percentage Changes',
                borderColor: '#FF0000',
                backgroundColor: '#FFaf30',
                data: percCanada,
            },
            {
                label: 'USA Percentage Changes',
                //fill:false,
                borderColor: '#4383cc',
                backgroundColor: '#8ab2df',
                data: percUSA,
            },
            {
                label: 'Italy Percentage Changes',
                borderColor: '#a4c15b',
                backgroundColor: '#c6d899',
                data: percItaly,
            },
            {
                label: 'Spain Percentage Changes',
                borderColor: '#a39cbb',
                backgroundColor: '#b7afd2',
                data: percSpain,
            },
            {
                label: 'UK Percentage Changes',
                borderColor: '#dba9a9',
                backgroundColor: '#c06969',
                data: percUK,
            }/*,
            {
                label: 'Ontario Deaths',
                borderColor: '#a52a2a',
                backgroundColor: '#7c2020',
                data: ontarioDeath,
            },
            {
                label: 'Total Deaths',
                borderColor: '#FF1a2a',
                backgroundColor: '#FF2020',
                data: totalDeath,
            }*/
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'WorldoMeters Percentages across Time.'
        },
        tooltips: {
            mode: 'index',
        },
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                type: 'time',
                distribution: 'series',
                offset: true,
                ticks: {
                    major: {
                        enabled: true,
                        fontStyle: 'bold'
                    },
                    source: 'data',
                    autoSkip: true,
                    autoSkipPadding: 75,
                    maxRotation: 0,
                    sampleSize: 100
                },
                afterBuildTicks: function(scale, ticks) {
                    var majorUnit = scale._majorUnit;
                    var firstTick = ticks[0];
                    var i, ilen, val, tick, currMajor, lastMajor;

                    val = moment(ticks[0].value);
                    if ((majorUnit === 'minute' && val.second() === 0)
                        || (majorUnit === 'hour' && val.minute() === 0)
                        || (majorUnit === 'day' && val.hour() === 9)
                        || (majorUnit === 'month' && val.date() <= 3 && val.isoWeekday() === 1)
                        || (majorUnit === 'year' && val.month() === 0)) {
                        firstTick.major = true;
                    } else {
                        firstTick.major = false;
                    }
                    lastMajor = val.get(majorUnit);

                    for (i = 1, ilen = ticks.length; i < ilen; i++) {
                        tick = ticks[i];
                        val = moment(tick.value);
                        currMajor = val.get(majorUnit);
                        tick.major = currMajor !== lastMajor;
                        lastMajor = currMajor;
                    }
                    return ticks;
                }
            }],
            yAxes: [{
                stacked: false,
                scaleLabel: {
                    display: true,
                    labelString: 'Percentage'
                }

            }]
        }
    }
};

var config6 = {
    type: 'line',
    data: {
        labels: xvals,
        datasets: [
            {
                label: 'Canada Deaths',
                borderColor: '#FF0000',
                backgroundColor: '#FFaf30',
                data: canadaDeath,
            },
            {
                label: 'USA Deaths',
                //fill:false,
                borderColor: '#4383cc',
                backgroundColor: '#8ab2df',
                data: usaDeath,
            },
            {
                label: 'Italy Deaths',
                borderColor: '#a4c15b',
                backgroundColor: '#c6d899',
                data: italyDeath,
            },
            {
                label: 'Spain Deaths',
                borderColor: '#a39cbb',
                backgroundColor: '#b7afd2',
                data: spainDeath,
            },
            {
                label: 'China Deaths',
                borderColor: '#cc1a00',
                backgroundColor: '#ee5500',
                data: chinaDeath,
            },
            {
                label: 'UK Deaths',
                borderColor: '#dba9a9',
                backgroundColor: '#c06969',
                data: ukDeath,
            }/*,
            {
                label: 'Ontario Deaths',
                borderColor: '#a52a2a',
                backgroundColor: '#7c2020',
                data: ontarioDeath,
            },
            {
                label: 'Total Deaths',
                borderColor: '#FF1a2a',
                backgroundColor: '#FF2020',
                data: totalDeath,
            }*/
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'WorldoMeters Deaths Across Time'
        },
        tooltips: {
            mode: 'index',
        },
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                type: 'time',
                distribution: 'series',
                offset: true,
                ticks: {
                    major: {
                        enabled: true,
                        fontStyle: 'bold'
                    },
                    source: 'data',
                    autoSkip: true,
                    autoSkipPadding: 75,
                    maxRotation: 0,
                    sampleSize: 100
                },
                afterBuildTicks: function(scale, ticks) {
                    var majorUnit = scale._majorUnit;
                    var firstTick = ticks[0];
                    var i, ilen, val, tick, currMajor, lastMajor;

                    val = moment(ticks[0].value);
                    if ((majorUnit === 'minute' && val.second() === 0)
                        || (majorUnit === 'hour' && val.minute() === 0)
                        || (majorUnit === 'day' && val.hour() === 9)
                        || (majorUnit === 'month' && val.date() <= 3 && val.isoWeekday() === 1)
                        || (majorUnit === 'year' && val.month() === 0)) {
                        firstTick.major = true;
                    } else {
                        firstTick.major = false;
                    }
                    lastMajor = val.get(majorUnit);

                    for (i = 1, ilen = ticks.length; i < ilen; i++) {
                        tick = ticks[i];
                        val = moment(tick.value);
                        currMajor = val.get(majorUnit);
                        tick.major = currMajor !== lastMajor;
                        lastMajor = currMajor;
                    }
                    return ticks;
                }
            }],
            yAxes: [{
                stacked: false,
                scaleLabel: {
                    display: true,
                    labelString: 'Number of People.'
                }

            }]
        }
    }
};

var config7 = {
    type: 'line',
    data: {
        labels: xvals,
        datasets: [
            {
                label: 'Canada Death %',
                borderColor: '#FF0000',
                backgroundColor: '#FFaf30',
                data: percDeathCanada,
            },
            {
                label: 'USA Death %',
                //fill:false,
                borderColor: '#4383cc',
                backgroundColor: '#8ab2df',
                data: percDeathUSA,
            },
            {
                label: 'Italy Death %',
                borderColor: '#a4c15b',
                backgroundColor: '#c6d899',
                data: percDeathItaly,
            },
            {
                label: 'Spain Death %',
                borderColor: '#a39cbb',
                backgroundColor: '#b7afd2',
                data: percDeathSpain,
            },
            {
                label: 'China Death %',
                borderColor: '#cc1a00',
                backgroundColor: '#ee5500',
                data: percDeathChina,
            },
            {
                label: 'UK Death %',
                borderColor: '#dba9a9',
                backgroundColor: '#c06969',
                data: percDeathUK,
            }/*,
            {
                label: 'Ontario Deaths',
                borderColor: '#a52a2a',
                backgroundColor: '#7c2020',
                data: ontarioDeath,
            },
            {
                label: 'Total Deaths',
                borderColor: '#FF1a2a',
                backgroundColor: '#FF2020',
                data: totalDeath,
            }*/
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Percentage of Deaths of Overall Cases'
        },
        tooltips: {
            mode: 'index',
        },
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                type: 'time',
                distribution: 'series',
                offset: true,
                ticks: {
                    major: {
                        enabled: true,
                        fontStyle: 'bold'
                    },
                    source: 'data',
                    autoSkip: true,
                    autoSkipPadding: 75,
                    maxRotation: 0,
                    sampleSize: 100
                },
                afterBuildTicks: function(scale, ticks) {
                    var majorUnit = scale._majorUnit;
                    var firstTick = ticks[0];
                    var i, ilen, val, tick, currMajor, lastMajor;

                    val = moment(ticks[0].value);
                    if ((majorUnit === 'minute' && val.second() === 0)
                        || (majorUnit === 'hour' && val.minute() === 0)
                        || (majorUnit === 'day' && val.hour() === 9)
                        || (majorUnit === 'month' && val.date() <= 3 && val.isoWeekday() === 1)
                        || (majorUnit === 'year' && val.month() === 0)) {
                        firstTick.major = true;
                    } else {
                        firstTick.major = false;
                    }
                    lastMajor = val.get(majorUnit);

                    for (i = 1, ilen = ticks.length; i < ilen; i++) {
                        tick = ticks[i];
                        val = moment(tick.value);
                        currMajor = val.get(majorUnit);
                        tick.major = currMajor !== lastMajor;
                        lastMajor = currMajor;
                    }
                    return ticks;
                }
            }],
            yAxes: [{
                stacked: false,
                scaleLabel: {
                    display: true,
                    labelString: 'Percentage'
                }

            }]
        }
    }
};

var config3 = {
    type: 'line',
    data: {
        labels: xvals,
        datasets: [
            {
                label: 'Alberta Cases',
                borderColor: '#FF0000',
                backgroundColor: '#FFaf30',
                data: alberta,
            },
            {
                label: 'Ontario Cases',
                borderColor: '#4383cc',
                backgroundColor: '#8ab2df',
                data: ontario,
            },
            {
                label: 'BC Cases',
                borderColor: '#a4c15b',
                backgroundColor: '#c6d899',
                data: bc,
            },
            {
                label: 'Quebec Cases',
                borderColor: '#a39cbb',
                backgroundColor: '#b7afd2',
                data: quebec,
            },
            {
                label: 'Manitoba Cases',
                borderColor: '#dba9a9',
                backgroundColor: '#c06969',
                data: manitoba,
            },
            {
                label: 'Saskatchewan Cases',
                borderColor: '#a52a2a',
                backgroundColor: '#7c2020',
                data: saskatchewan,
            }/*,
            {
                label: 'Total Deaths',
                borderColor: '#FF1a2a',
                backgroundColor: '#FF2020',
                data: totalDeath,
            }*/
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Health Canada Tables Visualized across Time.'
        },
        tooltips: {
            mode: 'index',
        },
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                type: 'time',
                distribution: 'series',
                offset: true,
                ticks: {
                    major: {
                        enabled: true,
                        fontStyle: 'bold'
                    },
                    source: 'data',
                    autoSkip: true,
                    autoSkipPadding: 75,
                    maxRotation: 0,
                    sampleSize: 100
                },
                afterBuildTicks: function(scale, ticks) {
                    var majorUnit = scale._majorUnit;
                    var firstTick = ticks[0];
                    var i, ilen, val, tick, currMajor, lastMajor;

                    val = moment(ticks[0].value);
                    if ((majorUnit === 'minute' && val.second() === 0)
                        || (majorUnit === 'hour' && val.minute() === 0)
                        || (majorUnit === 'day' && val.hour() === 9)
                        || (majorUnit === 'month' && val.date() <= 3 && val.isoWeekday() === 1)
                        || (majorUnit === 'year' && val.month() === 0)) {
                        firstTick.major = true;
                    } else {
                        firstTick.major = false;
                    }
                    lastMajor = val.get(majorUnit);

                    for (i = 1, ilen = ticks.length; i < ilen; i++) {
                        tick = ticks[i];
                        val = moment(tick.value);
                        currMajor = val.get(majorUnit);
                        tick.major = currMajor !== lastMajor;
                        lastMajor = currMajor;
                    }
                    return ticks;
                }
            }],
            yAxes: [{
                stacked: false,
                scaleLabel: {
                    display: true,
                    labelString: 'Number of People.'
                }

            }]
        }
    }
};

var config4 = {
    type: 'line',
    data: {
        labels: xvals,
        datasets: [
            {
                label: 'Alberta Percentage Changes',
                borderColor: '#FF0000',
                backgroundColor: '#FFaf30',
                data: percAlberta,
            },
            {
                label: 'Ontario Percentage Changes',
                //fill:false,
                borderColor: '#4383cc',
                backgroundColor: '#8ab2df',
                data: percOntario,
            },
            {
                label: 'BC Percentage Changes',
                borderColor: '#a4c15b',
                backgroundColor: '#c6d899',
                data: percBC,
            },
            {
                label: 'Quebec Percentage Changes',
                borderColor: '#a39cbb',
                backgroundColor: '#b7afd2',
                data: percQuebec,
            },
            {
                label: 'Manitoba Changes',
                borderColor: '#dba9a9',
                backgroundColor: '#c06969',
                data: percManitoba,
            },
            {
                label: 'Saskatchewan Changes',
                borderColor: '#a52a2a',
                backgroundColor: '#7c2020',
                data: percSaskatchewan,
            }/*,
            {
                label: 'Ontario Deaths',
                borderColor: '#a52a2a',
                backgroundColor: '#7c2020',
                data: ontarioDeath,
            },
            {
                label: 'Total Deaths',
                borderColor: '#FF1a2a',
                backgroundColor: '#FF2020',
                data: totalDeath,
            }*/
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Percentage Changes By Province (TRUNCATED AT 100%)'
        },
        tooltips: {
            mode: 'index',
        },
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                type: 'time',
                distribution: 'series',
                offset: true,
                ticks: {
                    major: {
                        enabled: true,
                        fontStyle: 'bold'
                    },
                    source: 'data',
                    autoSkip: true,
                    autoSkipPadding: 75,
                    maxRotation: 0,
                    sampleSize: 100
                },
                afterBuildTicks: function(scale, ticks) {
                    var majorUnit = scale._majorUnit;
                    var firstTick = ticks[0];
                    var i, ilen, val, tick, currMajor, lastMajor;

                    val = moment(ticks[0].value);
                    if ((majorUnit === 'minute' && val.second() === 0)
                        || (majorUnit === 'hour' && val.minute() === 0)
                        || (majorUnit === 'day' && val.hour() === 9)
                        || (majorUnit === 'month' && val.date() <= 3 && val.isoWeekday() === 1)
                        || (majorUnit === 'year' && val.month() === 0)) {
                        firstTick.major = true;
                    } else {
                        firstTick.major = false;
                    }
                    lastMajor = val.get(majorUnit);

                    for (i = 1, ilen = ticks.length; i < ilen; i++) {
                        tick = ticks[i];
                        val = moment(tick.value);
                        currMajor = val.get(majorUnit);
                        tick.major = currMajor !== lastMajor;
                        lastMajor = currMajor;
                    }
                    return ticks;
                }
            }],
            yAxes: [{
                stacked: false,
                scaleLabel: {
                    display: true,
                    labelString: 'Percentage'
                },
                ticks: {
                    suggestedMax: 100,    // minimum will be 0, unless there is a lower value.
                    // OR //
                    beginAtZero: true   // minimum value will be 0.
                }

            }]
        }
    }
};

var config5 = {
    type: 'line',
    data: {
        labels: xvals,
        datasets: [
            {
                label: 'Alberta Deaths',
                borderColor: '#FF0000',
                backgroundColor: '#FFaf30',
                data: albertaDeath,
            },
            {
                label: 'Ontario Deaths',
                borderColor: '#4383cc',
                backgroundColor: '#8ab2df',
                data: ontarioDeath,
            },
            {
                label: 'BC Deaths',
                borderColor: '#a4c15b',
                backgroundColor: '#c6d899',
                data: bcDeath,
            },
            {
                label: 'Quebec Deaths',
                borderColor: '#a39cbb',
                backgroundColor: '#b7afd2',
                data: quebecDeath,
            },
            {
                label: 'Manitoba Deaths',
                borderColor: '#dba9a9',
                backgroundColor: '#c06969',
                data: manitobaDeath,
            },
            {
                label: 'Saskatchewan Deaths',
                borderColor: '#a52a2a',
                backgroundColor: '#7c2020',
                data: saskatchewanDeath,
            }/*,
            {
                label: 'Total Deaths',
                borderColor: '#FF1a2a',
                backgroundColor: '#FF2020',
                data: totalDeath,
            }*/
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Deaths By Province'
        },
        tooltips: {
            mode: 'index',
        },
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                type: 'time',
                distribution: 'series',
                offset: true,
                ticks: {
                    major: {
                        enabled: true,
                        fontStyle: 'bold'
                    },
                    source: 'data',
                    autoSkip: true,
                    autoSkipPadding: 75,
                    maxRotation: 0,
                    sampleSize: 100
                },
                afterBuildTicks: function(scale, ticks) {
                    var majorUnit = scale._majorUnit;
                    var firstTick = ticks[0];
                    var i, ilen, val, tick, currMajor, lastMajor;

                    val = moment(ticks[0].value);
                    if ((majorUnit === 'minute' && val.second() === 0)
                        || (majorUnit === 'hour' && val.minute() === 0)
                        || (majorUnit === 'day' && val.hour() === 9)
                        || (majorUnit === 'month' && val.date() <= 3 && val.isoWeekday() === 1)
                        || (majorUnit === 'year' && val.month() === 0)) {
                        firstTick.major = true;
                    } else {
                        firstTick.major = false;
                    }
                    lastMajor = val.get(majorUnit);

                    for (i = 1, ilen = ticks.length; i < ilen; i++) {
                        tick = ticks[i];
                        val = moment(tick.value);
                        currMajor = val.get(majorUnit);
                        tick.major = currMajor !== lastMajor;
                        lastMajor = currMajor;
                    }
                    return ticks;
                }
            }],
            yAxes: [{
                stacked: false,
                scaleLabel: {
                    display: true,
                    labelString: 'Number of People.'
                }

            }]
        }
    }
};

window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
    var ctx2 = document.getElementById('canvas2').getContext('2d');
    window.myLine2 = new Chart(ctx2, config2);
    var ctx6 = document.getElementById('canvas6').getContext('2d');
    window.myLine2 = new Chart(ctx6, config6);
    var ctx7 = document.getElementById('canvas7').getContext('2d');
    window.myLine2 = new Chart(ctx7, config7);
    var ctx3 = document.getElementById('canvas3').getContext('2d');
    window.myLine2 = new Chart(ctx3, config3);
    var ctx4 = document.getElementById('canvas4').getContext('2d');
    window.myLine2 = new Chart(ctx4, config4);
    var ctx5 = document.getElementById('canvas5').getContext('2d');
    window.myLine2 = new Chart(ctx5, config5);
};


