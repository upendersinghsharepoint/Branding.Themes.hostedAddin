<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>
    <SharePoint:ScriptLink Name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
    <meta name="WebPartPageExpansion" content="full" />

    <!-- Add your CSS styles to the following file -->
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />
    <link href="../Content/bootstrap.min.css" rel="stylesheet" />

    <!-- Add your JavaScript to the following file -->
    <script type="text/javascript" src="../Scripts/App.js"></script>
    <script src="../Scripts/jquery-3.4.1.min.js"></script>
    <script src="../Scripts/bootstrap.bundle.min.js"></script>
    <script src="../Scripts/popper.min.js"></script>
    <script src="../Scripts/bootstrap.min.js"></script>

</asp:Content>



<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <div class="row col-lg-4 col-md-5 col-sm-6">
        <div class="card">
            <div class="card-header">Add Theme</div>
            <div class="btn-group">

                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select theme
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#" id="Add_Sounders_Rave_Gold">Sounders Rave Gold</a>
                    <a class="dropdown-item" href="#" id="Add_Sounders_Rave_Gold_1">Sounders Rave Gold 1</a>
                </div>
            </div>

        </div>
        <div class="card">
            <div class="card-header">Apply Theme</div>

            <div class="btn-group">

                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select theme
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#" id="Apply_Sounders_Rave_Gold">Sounders Rave Gold</a>
                    <a class="dropdown-item" href="#" id="Apply_Sounders_Rave_Gold_1">Sounders Rave Gold 1</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">Update Theme</div>

            <div class="btn-group">

                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select theme
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#" id="Update_Sounders_Rave_Gold">Sounders Rave Gold</a>
                    <a class="dropdown-item" href="#" id="Update_Sounders_Rave_Gold_1">Sounders Rave Gold 1</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">Delete Theme</div>

            <div class="btn-group">

                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select theme
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#" id="Delete_Sounders_Rave_Gold">Sounders Rave Gold</a>
                    <a class="dropdown-item" href="#" id="Delete_Sounders_Rave_Gold_1">Sounders Rave Gold 1</a>
                </div>
            </div>
        </div>
    </div>

</asp:Content>
