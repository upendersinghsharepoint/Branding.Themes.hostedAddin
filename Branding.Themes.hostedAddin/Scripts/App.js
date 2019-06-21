'use strict';

ExecuteOrDelayUntilScriptLoaded(initializePage, "sp.js");

function initializePage()
{
    var context = SP.ClientContext.get_current();
    var user = context.get_web().get_currentUser();
    var SPHostUrl;
    var SPAppWebUrl;

    var pal = {
        "palette": {
            "themePrimary": "#f3da1e",
            "themeLighterAlt": "#0a0901",
            "themeLighter": "#272305",
            "themeLight": "#494109",
            "themeTertiary": "#918211",
            "themeSecondary": "#d5bf1a",
            "themeDarkAlt": "#f4dd33",
            "themeDark": "#f5e251",
            "themeDarker": "#f8ea7e",
            "neutralLighterAlt": "#0b0b0b",
            "neutralLighter": "#151515",
            "neutralLight": "#252525",
            "neutralQuaternaryAlt": "#2f2f2f",
            "neutralQuaternary": "#373737",
            "neutralTertiaryAlt": "#595959",
            "neutralTertiary": "#c8c8c8",
            "neutralSecondary": "#d0d0d0",
            "neutralPrimaryAlt": "#dadada",
            "neutralPrimary": "#ffffff",
            "neutralDark": "#f4f4f4",
            "black": "#f8f8f8",
            "white": "#000000",
            "primaryBackground": "#000000",
            "primaryText": "#ffffff",
            "bodyBackground": "#000000",
            "bodyText": "#ffffff",
            "disabledBackground": "#151515",
            "disabledText": "#595959"
        }
    }
    var pal1 = {
        "palette": {
            "themePrimary": "#c50dae",
            "themeLighterAlt": "#fdf3fb",
            "themeLighter": "#f6d1f1",
            "themeLight": "#edabe5",
            "themeTertiary": "#dc61cb",
            "themeSecondary": "#cb25b5",
            "themeDarkAlt": "#b10c9b",
            "themeDark": "#950a83",
            "themeDarker": "#6e0860",
            "neutralLighterAlt": "#ebf8b0",
            "neutralLighter": "#e7f4ad",
            "neutralLight": "#deeaa6",
            "neutralQuaternaryAlt": "#ceda9b",
            "neutralQuaternary": "#c5d094",
            "neutralTertiaryAlt": "#bdc88e",
            "neutralTertiary": "#a8a8a8",
            "neutralSecondary": "#8c8c8c",
            "neutralPrimaryAlt": "#707070",
            "neutralPrimary": "#010101",
            "neutralDark": "#383838",
            "black": "#1c1c1c",
            "white": "#f1ffb5",
            "primaryBackground": "#f1ffb5",
            "primaryText": "#010101",
            "bodyBackground": "#f1ffb5",
            "bodyText": "#010101",
            "disabledBackground": "#e7f4ad",
            "disabledText": "#bdc88e"
        }
    }

    // This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
    $(document).ready(function () {
        //getUserName();
        //setURL();
        setTitle();
        $('#Add_Sounders_Rave_Gold').on('click', function () {
            
            addTheme(this.text, pal);            
        });
        $('#Add_Sounders_Rave_Gold_1').on('click', function () {
            
            addTheme(this.text, pal1);            
        });
        $('#Apply_Sounders_Rave_Gold').on('click', function () {
                        
            applyTheme(this.text, pal);
        });
        $('#Apply_Sounders_Rave_Gold_1').on('click', function () {
            
            applyTheme(this.text, pal1);
        });
        $('#Update_Sounders_Rave_Gold').on('click', function () {
            updateTheme(this.text,pal);
        });
        $('#Update_Add_Sounders_Rave_Gold_1').on('click', function () {
            updateTheme(this.text,pal1);
        });
    });

    function setURL() {
        var params = document.URL.split("?")[1].split("&");
        for (var i = 0; i < params.length; i = i + 1) {
            var param = params[i].split("=");
            switch (param[0]) {
                case "SPAppWebUrl":
                    SPAppWebUrl = decodeURIComponent(param[1]);
                    console.log(SPAppWebUrl);
                    break;
                case "SPHostUrl":
                    SPHostUrl = decodeURIComponent(param[1]);
                    console.log(SPHostUrl);
                    break;
            }
        }
    }

    // This function prepares, loads, and then executes a SharePoint query to get the current users information
    function getUserName() {
        context.load(user);
        context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
    }
    function setTitle() {
        context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
    }
    function addTheme(themeName,pallette) {
        RestRequest("/_api/thememanager/AddTenantTheme", { name: themeName, themeJson: JSON.stringify(pallette) });
    }
    function applyTheme(themeName,pallette) {
        RestRequest("/_api/thememanager/ApplyTheme", { name: themeName, themeJson: JSON.stringify(pallette) });
    }
    function updateTheme(themeName,pallette) {
        RestRequest("/_api/thememanager/UpdateTenantTheme", { name: themeName, themeJson: JSON.stringify(pallette) })
    }
    function deleteTheme(themeName) {
        RestRequest("/_api/thememanager/DeleteTenantTheme", { name: themeName });
    }
    function RestRequest(url, params) {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState != 4) // Loaded
                return;
            console.log(req.responseText);
        };
        // Prepend web URL to url and remove duplicated slashes.
        var webBasedUrl = (_spPageContextInfo.webServerRelativeUrl + "//" + url).replace(/\/{2,}/, "/");
        req.open("POST", webBasedUrl, true);
        req.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        req.setRequestHeader("ACCEPT", "application/json; odata.metadata=minimal");
        req.setRequestHeader("x-requestdigest", _spPageContextInfo.formDigestValue);
        req.setRequestHeader("ODATA-VERSION", "4.0");
        req.send(params ? JSON.stringify(params) : void 0);
    }

    // This function is executed if the above call is successful
    // It replaces the contents of the 'message' element with the user name
    function onGetUserNameSuccess() {
        $('#DeltaPlaceHolderSiteName').text('Webcom SharePoint Branding');
    }

    // This function is executed if the above call fails
    function onGetUserNameFail(sender, args) {
        alert('Failed to get user name. Error:' + args.get_message());
    }
}
