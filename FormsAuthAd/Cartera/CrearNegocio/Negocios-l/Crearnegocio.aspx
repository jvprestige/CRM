﻿<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Crearnegocio.aspx.cs" Inherits="FormsAuthAd.Cartera.Crearnegocio" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">

    <script src='<%= ResolveUrl("../../vendor/jquery/dist/jquery.min.js") %>'></script>
    <script src='<%= ResolveUrl("../../scripts/jquery-1.11.1.min.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxcore.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxdatatable.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxdata.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxgrid.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxgrid.pager.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxscrollbar.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxbuttons.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxlistbox.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxgrid.edit.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxinput.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxcalendar.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxdatetimeinput.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxgrid.selection.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxdropdownlist.js") %>'></script>

    <link rel="stylesheet" href="../../jqwidgets/styles/jqx.base.css" />
    <script src="../../../vendor/toastr/build/toastr.min.js"></script>
    <script src="../../../vendor/moment/moment.js"></script>
    <script src="../../../vendor/select2-3.5.2/select2.min.js"></script>
    <script src="../../../vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
    <script src="../../../vendor/bootstrap-datepicker-master/dist/js/bootstrap-datepicker.min.js"></script>
    <script src="../../../scripts_crm/accounting.js"></script>
    <script src="../../../BLLscripts/BLLUtilidades.js"></script>
    <script src="../../../scripts_crm/HttpBll.js"></script>
    <script src="../../../../BLLscripts/BLLActInmuebles.js"></script>
    <script src="../../../../BLLscripts/BLLInmuebles.js"></script>
    <script src="../../../../BLLscripts/BLLnegocio.js"></script>
    <script src="../js/GestCartera.js"></script>



</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">
    <div id="wrapper">
        <div class="content animate-panel">
            <!---Panel Informacion General--->
            <div class="col-lg-12" id="clientesnegocio">
                <div class="panel panel-success">
                    <div class="panel-heading hbuilt">
                        <div class="pull-right">
                            <div class="form-group">
                                <div class="col-sm-8">
                                </div>
                            </div>
                        </div>
                        Inmuebles separados
                    </div>
                    <div class="panel-body" id="sepraciones">
                    </div>
                </div>
            </div>
            <div class="row">
                <!---Panel Informacion General--->

                <div class="col-lg-10" id="Principal" style="padding-left: 18%">
                    <div class="hpanel">
                        <ul class="nav nav-tabs">
                            <li class="active"><a data-toggle="tab" href="#tab-1">Informacion de cliente</a></li>
                            <li class=""><a data-toggle="tab" href="#tab-2">Acuerdo de pago</a></li>
                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane active">
                                <div class="panel-body">
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div class="form-group col-lg-4">
                                                <label class="control-label">Clase de inmueble comprado seleccione</label>
                                            </div>
                                            <div class="form-group col-lg-2" style="display: none;">
                                                <label class="control-label">
                                                    <input type="checkbox" value="Manzana" id="checkmanzada" class="form-group-lg">
                                                    Manzana
                                                </label>
                                            </div>

                                            <div class="form-group col-lg-2" style="display: none;">
                                                <label class="control-label">
                                                    <input type="checkbox" value="Torre" id="checktorre" class="form-group-lg">
                                                    Torre
                                                </label>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-lg-4">
                                                    <div class="col-lg-12">
                                                        <label class="control-label">
                                                            <input type="checkbox" value="Casa" id="checkcasa" class="form-group-lg">
                                                            Casa
                                                        </label>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <label class="control-label">
                                                            <input type="checkbox" value="Apartamento" id="checkapartamento" class="form-group-lg">
                                                            Apartamento
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-lg-12">
                                            <div class="stats-title pull-left">
                                                <h4>Datos del Propietario</h4>
                                            </div>
                                        </div>
                                        <div class="form-group col-lg-3">
                                            <label>Cedula</label>
                                            <input type="text" value="" id="TxtIdentidad" class="form-control" maxlength="10" style="float: left">
                                        </div>
                                        <%--<div class="row">


                                        </div>--%>
                                        
                                        <div class="col-lg-1">
                                            
                                            <div style="float: left; padding-top: 20px"><a id="BtnDisponibilidad">
                                                <img src="../../images_crm/Buscar.png" style="float: left" /></a></div>
                                            <div style="float: left; padding-top: 20px">
                                                <a id="BtnAsociadoc">
                                                    <img src="../../images_crm/asociado.png" style="float: left" />
                                                </a>
                                            </div>
                                        </div>  
<%--                                        <div style="float: left; padding-top: 20px"><a id="BtnDisponibilidad">
                                            <img src="../../images_crm/Buscar.png" style="float: left" /></a></div>
                                        <div style="float: left; padding-top: 20px"><a id="BtnAsociadoc">
                                            <img src="../../images_crm/asociado.png" style="float: left" /></a></div>--%>
                                        <div class="form-group col-lg-8">
                                            <label>Propietario</label>
                                            <input type="text" value="" id="TxtNombres" class="form-control" name="" placeholder="Propietario" readonly="">
                                        </div>
                                        <div class="form-group col-lg-4">
                                            <label>Expedicion</label>
                                            <input type="text" value="" id="TextExpedicion" class="form-control" name="">
                                        </div>
                                        <div class="form-group col-lg-4">
                                            <label>Estado civil</label>
                                            <input type="text" value="" id="Textcivil" class="form-control" readonly="">
                                        </div>
                                        <div class="form-group col-lg-4">
                                            <label>Fecha de nacimiento</label>
                                            <input type="text" value="" id="Textnacimiento" class="form-control" name="">
                                        </div>
                                        <div class="form-group col-lg-4">
                                            <label>Lugar</label>
                                            <input type="text" value="" id="Textlugar" class="form-control" name="">
                                        </div>
                                        <div class="form-group col-lg-8">
                                            <label>Direccion de correspondencia</label>
                                            <input type="text" value="" id="Textdireccion" class="form-control" readonly="">
                                        </div>
                                        <div class="form-group col-lg-4">
                                            <label>Telefono</label>
                                            <input type="text" value="" id="Textphone" class="form-control" readonly="">
                                        </div>
                                        <div class="form-group col-lg-4">
                                            <label>Empresa donde labora</label>
                                            <input type="text" value="" id="TextEmp" class="form-control" readonly="">
                                        </div>
                                        <div class="form-group col-lg-4">
                                            <label>Cargo</label>
                                            <input type="text" value="" id="Textcargo" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-4">
                                            <label>Profesion</label>
                                            <input type="text" value="" id="Textprofesion" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-4">
                                            <label>Direccion</label>
                                            <input type="text" value="" id="TextdireccionE" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-4">
                                            <label>Antiguedad</label>
                                            <input type="text" value="" id="Textantiguedad" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-4">
                                            <label>Correo electronico</label>
                                            <input type="text" value="" id="Textcorreo" class="form-control" readonly="">
                                        </div>
                                        <div class="form-group col-lg-4">
                                            <label>Nombre de conyugue</label>
                                            <input type="text" value="" id="Textconyugue" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-4">
                                            <label>Cedula</label>
                                            <input type="number" value="" id="TextidentificacionC" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-2">
                                            <label>Telefono</label>
                                            <input type="number" value="" id="TexttelC" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-3">
                                            <label>Ingresos</label>
                                            <input type="number" value="" id="TextIngresos" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-1">
                                            <label>No De hijos</label>
                                            <input type="number" value="" id="TextNh" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-3">
                                            <label>Interes de compra</label>
                                            <input type="text" value="" id="TextInt" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-3">
                                            <label>Interes de compra</label>
                                            <input type="text" value="" id="TextPinteres" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-footer">
                                </div>
                            </div>
                            <!--tab2-->
                            <div id="tab-2" class="tab-pane" style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
                                <div class="panel-body" style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
                                    <div class="col-lg-12">
                                        <div class="row" style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
                                            <div class="form-group col-lg-12">
                                                <h3 id="Tvalor"></h3>
                                                <input class="control-label" id="Lvalor" type="text" />

                                            </div>
                                            <div class="form-group col-lg-3">
                                                <label class="control-label">Inicial</label>
                                                <input type="text" value="" id="Textinicial" class="form-control" name="">
                                            </div>
                                            <div class="form-group col-lg-3">
                                                <label class="control-label">Creditó</label>
                                                <input type="text" value="" id="Textcredito" class="form-control" name="" readonly="">
                                            </div>
                                            <div class="form-group col-lg-4">
                                                <label class="control-label">Banco</label>
                                                <select id="ComBancos" class="form-control">
                                                    <option></option>
                                                </select>
                                            </div>
                                            <div class="form-group col-lg-2">
                                                <label class="control-label">No cuota</label>
                                                <input type="number" value="" id="Textcuota" class="form-control" name="">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div id="jqxWidget" style="margin: 0 auto;">
                                                <%-- <button type="button" id="datos">aaaa</button>--%>
                                                <div id="dataTable"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="row" style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">

                                            <div class="form-group col-lg-4">
                                                <label class="control-label">Fecha de Escritura</label>
                                                <input type="text" value="" id="Textescritura" class="form-control" name="">
                                            </div>
                                            <div class="form-group col-lg-4">
                                                <label class="control-label">Fecha de Entrega</label>
                                                <input type="text" value="" id="Textentrega" class="form-control" name="">
                                            </div>
                                            <div class="form-group col-lg-4">
                                                <label class="control-label">Fecha de Subrogracion</label>
                                                <input type="text" value="" id="Textsubrogracion" class="form-control" name="">
                                            </div>
                                            <div class="form-group col-lg-6">
                                                <label class="control-label">Asesor que dio la información</label>
                                                <input type="text" value="" id="Textasesorinf" class="form-control" name="" readonly="">
                                            </div>
                                            <div class="form-group col-lg-6">
                                                <label class="control-label">Medio por el cual se entero del proyecto</label>
                                                <input type="text" value="" id="TextmedioInf" class="form-control" name="" readonly="">
                                            </div>
                                            <div class="form-group col-lg-6">
                                                <label class="control-label">Asesor de cartera</label>
                                                <select id="CmbAsesorCart" class="form-control">
                                                    <option></option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="panel-footer" id="button">
                                    <button class="btn btn-danger btn-btn-circle" type="button" id="BtnCrearH">Crear negocio</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade hmodal-danger" id="asociadoModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="color-line"></div>
                        <div class="modal-header">
                            <h5 class="modal-title">Persona Asociadas</h5>
                        </div>
                        <div class="modal-body" id="asociados">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade hmodal-danger" id="FechasPagos" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="color-line"></div>
                        <div class="modal-header">
                            <h5 class="modal-title"></h5>
                        </div>
                        <div class="modal-body" id="">
                            <div class="form-group">
                                <label class="control-label">Fecha Actual</label>
                                <input type="text" value="" id="fechAc" class="form-control" name="" readonly="">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Nueva fecha</label>
                                <input type="text" value="" id="nuevafc" class="form-control" name="">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-success" id="Btnfecha">Cambiar fecha</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</asp:Content>
