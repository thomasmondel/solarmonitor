/* 
 This file was generated by Dashcode.  
 You may edit this file to customize your widget or web page 
 according to the license.txt file included in the project.
 */


//
// Function: load()
// Called by HTML body element's onload event when the web application is ready to start
//
function load()
{
    dashcode.setupParts();
}

// ye gods this is an awful hack
var justZoomed = false;

var hideDetailImg = true;


//
// Function: itemClicked()
// Called when an item from the items list is selected to navigate to the detail view
//
function mainMenuSelect(event)
{
    var list = document.getElementById("menu").object;
    var browser = document.getElementById('browser').object;
    var selectedObjects = list.selectedObjects();
    
    if (selectedObjects && (1 == selectedObjects.length)){
        // The Browser's goForward method is used to make the browser push down to a new level.
        // Going back to previous levels is handled automatically.
        var name = selectedObjects[0].valueForKey("name");
        if(name == "Full-Disk Images") {
            browser.goForward(document.getElementById('selectDetailWavelength'), selectedObjects[0].valueForKey("name"));
        }
        else if(name == "Active Regions") {
            browser.goForward(document.getElementById('activeRegions'), selectedObjects[0].valueForKey("name"));
        }
        else if(name == "Forecast") {
            browser.goForward(document.getElementById('forecastLevel'), selectedObjects[0].valueForKey("name"));
        }
        else if(name == "About") {
            browser.goForward(document.getElementById('aboutLevel'), selectedObjects[0].valueForKey("name"));
        }
        else if(name == "Search") {
            browser.goForward(document.getElementById('searchLevel'), selectedObjects[0].valueForKey("name"));
        }
    }    
}

function imageSourceSelect(event)
{
    var list = document.getElementById("sourceList").object;
    var browser = document.getElementById('browser').object;
    var ds = dashcode.getDataSource('imageDetail');
    var selectedObjects = list.selectedObjects();
    var type = selectedObjects[0].type;
    hideDetailImg = true;
    ds.setValueForKeyPath(type, 'parameters.type');
    browser.goForward(document.getElementById('detailLevel'), "Detail");
}


function testGotoDetail(event) {
    var browser = document.getElementById('browser').object;
    browser.goForward(document.getElementById('detailLevel'), "Detail");
}

function testGotoImage(event) {
    window.location = "http://solarmonitor.org/data/20100518/pngs/seit/seit_00171_fd_20100518_010014.png";
    
}
function testGotoMovie(event) {
    window.location = "http://10.0.2.1/seit.m4v";
}

function getDataSourcesForUpdate() {
    return [
        dashcode.getDataSource('imageDetail'),
        dashcode.getDataSource('imageSources'),
        dashcode.getDataSource('activeRegions'),
        dashcode.getDataSource('regionSources'),
        dashcode.getDataSource('regionDetail')
    ];
}

function viewFullRes(event)
{
    var browser = document.getElementById('browser').object;
    browser.goForward(document.getElementById('highDefLevel'), "High Definition");
    document.getElementById('stackLayout').style.overflow = "visible";
}

function imageDetailPrevWeek(event) {
    hideDetailImg = false;
    var ds = getDataSourcesForUpdate();
    var date = ds[0].valueForKeyPath('content.prevWeek');
    for(var i=0; i<ds.length; i++) {
        ds[i].setValueForKeyPath(date, 'parameters.date');
    }
    
}
function imageDetailPrevDay(event) {
    hideDetailImg = false;
    var ds = getDataSourcesForUpdate();
    var date = ds[0].valueForKeyPath('content.prevDay');
    for(var i=0; i<ds.length; i++) {
        ds[i].setValueForKeyPath(date, 'parameters.date');
    }
}   
function imageDetailPrevRot(event) {
    hideDetailImg = false;
    var ds = getDataSourcesForUpdate();
    var date = ds[0].valueForKeyPath('content.prevRot');
    for(var i=0; i<ds.length; i++) {
        ds[i].setValueForKeyPath(date, 'parameters.date');
    }
}
function imageDetailNextWeek(event) {
    hideDetailImg = false;
    var ds = getDataSourcesForUpdate();
    var date = ds[0].valueForKeyPath('content.nextWeek');
    for(var i=0; i<ds.length; i++) {
        ds[i].setValueForKeyPath(date, 'parameters.date');
    }
}
function imageDetailNextDay(event) {
    hideDetailImg = false;
    var ds = getDataSourcesForUpdate();
    var date = ds[0].valueForKeyPath('content.nextDay');
    for(var i=0; i<ds.length; i++) {
        ds[i].setValueForKeyPath(date, 'parameters.date');
    }
}
function imageDetailNextRot(event) {
    hideDetailImg = false;
    var ds = getDataSourcesForUpdate();  
    var date = ds[0].valueForKeyPath('content.nextRot');
    for(var i=0; i<ds.length; i++) {
        ds[i].setValueForKeyPath(date, 'parameters.date');
    }
}

function imageDetailNow(event) {
    var ds = getDataSourcesForUpdate();
    for(var i=0; i<ds.length; i++) {
        ds[i].setValueForKeyPath('default', 'parameters.date');
    }
    hideDetailImg = false;
}


booleanInvert = Class.create(DC.ValueTransformer,{
    transformedValue: function(value){
        // Insert Code Here
		return !value;
    }
    // Uncomment to support a reverse transformation
    
    ,
    reverseTransformedValue: function(value){
        return !value;
    }
   
});



function zoomHighDef(event)
{
    if(justZoomed) return;
    justZoomed = true;
    var parent = document.getElementById("image4");
    var image = document.getElementById("DC_img3");
    if(document.defaultView.getComputedStyle(image, "").getPropertyValue("width") == "320px") {
        image.style.width = "1500px";
        image.style.height = "1500px";
        parent.style.width = "1500px";
        parent.style.height = "1500px";
    } else {
        image.style.width = "320px";
        image.style.height = "320px";
        parent.style.width = "320px";
        parent.style.height = "320px";
    }
    setTimeout(function(){justZoomed = false;}, 1000);
}

function zoomRegionHighDef(event)
{
    if(justZoomed) return;
    justZoomed = true;
    var parent = document.getElementById("image6");
    var image = document.getElementById("DC_img5");
    if(document.defaultView.getComputedStyle(image, "").getPropertyValue("width") == "320px") {
        image.style.width = "1500px";
        image.style.height = "1500px";
        parent.style.width = "1500px";
        parent.style.height = "1500px";
    } else {
        image.style.width = "320px";
        image.style.height = "320px";
        parent.style.width = "320px";
        parent.style.height = "320px";
    }
    setTimeout(function(){justZoomed = false;}, 1000);
}

prettyDate = Class.create(DC.ValueTransformer,{
    transformedValue: function(value){
        var strDate = value.toString();
        var year = strDate.substr(0, 4);
        var month = strDate.substr(4, 2);
        var day = strDate.substr(6, 2);
        return year + "-" + month + "-" + day;
    }
    // Uncomment to support a reverse transformation
    /*
    ,
    reverseTransformedValue: function(value){
        return value;
    }
   */
});




shouldHideDetailImg = Class.create(DC.ValueTransformer,{
    transformedValue: function(value){
        // Insert Code Here
		return !value || !hideDetailImg;
    }
    // Uncomment to support a reverse transformation
    /*
    ,
    reverseTransformedValue: function(value){
        return value;
    }
   */
});


function activeRegionSelect(event)
{
    var browser = document.getElementById('browser').object;
    var detailARList1 = document.getElementById('detailARList1').object;
    var selectedObjects = detailARList1.selectedObjects();
    var regionSources = dashcode.getDataSource('regionSources');
    var regionDetail = dashcode.getDataSource('regionDetail');
    regionSources.setValueForKeyPath(selectedObjects[0].number, 'parameters.region');
    regionDetail.setValueForKeyPath(selectedObjects[0].number, 'parameters.region');
    browser.goForward(document.getElementById('selectActiveRegionWavelength'), selectedObjects[0].number);
}

function activeRegionSourceSelect(event)
{
    var browser = document.getElementById('browser').object;
    var sourceList1 = document.getElementById('sourceList1').object;
    var selectedObjects = sourceList1.selectedObjects();
    var regionDetail = dashcode.getDataSource('regionDetail');
    regionDetail.setValueForKeyPath(selectedObjects[0].type, 'parameters.type');
    browser.goForward(document.getElementById('regionDetailLevel'), selectedObjects[0].type);
}


addNOAA = Class.create(DC.ValueTransformer,{
    transformedValue: function(value){
        // Insert Code Here
		return "NOAA #" + value;
    }
    // Uncomment to support a reverse transformation
    /*
    ,
    reverseTransformedValue: function(value){
        return value;
    }
   */
});



function viewRegionFullRes(event)
{
    var browser = document.getElementById('browser').object;
    browser.goForward(document.getElementById('regionHighDef'), "High Definition");
    document.getElementById('stackLayout').style.overflow = "visible";

}


function openSettings(event)
{
    var browser = document.getElementById('browser').object;
    browser.goForward(document.getElementById('settingsLevel'), "Settings");
}


function saveSettings(event)
{
    var settingsList = document.getElementById('settingsList').object;
    var selectedObjects = settingsList.selectedObjects();
    var cookieString = selectedObjects.map(function(obj) { return obj.type }).join(",");
    alert(cookieString);
    
}


prefixSel = Class.create(DC.ValueTransformer,{
    transformedValue: function(value){
        // Insert Code Here
		return "sel_" + value;
    }
    // Uncomment to support a reverse transformation
    /*
    ,
    reverseTransformedValue: function(value){
        return value;
    }
   */
});


function dlHighDef(event)
{
    var ds = dashcode.getDataSource('imageDetail');
    window.open(ds.valueForKeyPath('content.fullRes'));
}


function dlRegionHighDef(event)
{
    var ds = dashcode.getDataSource('regionDetail');
    window.open(ds.valueForKeyPath('content.image'));
}
