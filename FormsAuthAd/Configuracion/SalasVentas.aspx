﻿<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="SalasVentas.aspx.cs" Inherits="FormsAuthAd.Configuracion.SalasVentas" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">
     <div id="wrapper">
    <!---Contenedor-->
    <div class="content animate-panel">
        <div class="row">
            <!---Panel Informacion General--->
            <div class="col-lg-3" ></div>
            <div class="col-lg-6" id="Principal">
                <div class="panel panel-danger">
                    <div class="panel-heading hbuilt">
                        <div class="pull-right">
                        </div>
                        Crear Sala de ventas
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="form-group col-lg-12">
                                <label>Nombre de sala</label>
                                <input type="text" value="" id="Txtsala" class="form-control">
                            </div>
<%--                            <div class="form-group col-lg-6">
                                <label>Telefono</label>
                                <input type="text" value="" id="TxtTel" class="form-control">
                            </div>--%>
                        </div>
                        <div class="text-right m-t-xs">
                            <button class="btn btn-danger" type="button" id="BtnGuardar"><i class="fa fa-check"></i>Guardar Sala de venta</button>
                        </div>
                        </div>
                </div>
            </div>
               <div class="col-lg-12" >
                <div class="panel panel-danger">
                    <div class="panel-heading hbuilt">
                        <div class="pull-right">
                        </div>
                        Sala de ventas
                    </div>
                    <div class="panel-body" id="salas">
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
    <script src="../vendor/jquery/dist/jquery.min.js"></script>
    <script src="../vendor/jquery-ui/jquery-ui.min.js"></script>
    <script src="../BLLscripts/BLLSala_Ventas.js"></script>
    <script src="../BLLscripts/BLLUtilidades.js"></script>
    <script src="js/Salaventas.js"></script>
</asp:Content>
