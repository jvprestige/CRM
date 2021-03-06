﻿<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ConfigTramites.aspx.cs" Inherits="FormsAuthAd.TramitesVenta.ConfigTramites" %>

<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">
    <div id="wrapper">

        <div class="content animate-panel" style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
            <div class="row">
                <!---Panel Informacion General--->
                <div class="col-lg-7" id="Principal">
                    <div class="hpanel">
                        <div class="panel-tools">
                            <a class="showhide" style="background: #E50000"><i class="fa fa-chevron-up"></i></a>
                            <a class="Pcreartarea" style="background: #E50000"><i class="fa fa-times"></i></a>
                        </div>
                        <ul class="nav nav-tabs">
                            <div class="pull-right">


                                <button class="btn btn-danger btn-btn-circle" type="button" id="BtnSCliente">Nuevo</button>

                            </div>
                            <li class="active"><a data-toggle="tab" href="#tab-1">Parametrización</a></li>


                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane active">
                                <div class="panel-body" id="Tablatramites">
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div class="col-lg-5 scroll " id="Actividadesxtramite" style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">

                    <div class="panel panel-success">
                        <div class="panel-body">
                            <!---Panel de las tareas generadas por cada pago--->
                            <div class="hpanel" id="PanelTramites">
                                <div class="panel-heading hbuilt">
                                    <div class="panel-tools">
                                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                        <a class="Pcreartarea"><i class="fa fa-times"></i></a>
                                    </div>
                                    Crear tramite
                                </div>


                                <div class="Border no-padding">
                                    <div class="tab-content">
                                        <div class="p-m tab-pane active">

                                            <div class="row">
                                                <div class="col-lg-3 text-center">
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="row">
                                                        <div class="form-group col-lg-6">
                                                            <label>Nombre</label>
                                                            <input type="text" value="" id="TxtTramite" class="form-control">
                                                        </div>

                                                        <div class="form-group col-lg-12">
                                                            <label>Banco</label>
                                                            <select id="TxtBanco" class="form-control">
                                                            </select>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <button type="button" class="btn btn-success" id="BtnGuardarTramite">Guardar</button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="pull-right">
                            </div>

                            <div class="hpanel" id="PanelActividades">
                                <div class="panel-heading hbuilt">
                                    
                                     <label id="male"></label>
                                    <a class="Pcreartarea" id="BtnAgregar"><i class=" fa fa-plus-circle fa-7x btn-sm btn-success pull-right"></i></a>
                                   
                                </div>


                                <div class="Border no-padding">
                                    <div class="tab-content">
                                        <div id="datos" class="p-m tab-pane active">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                   <div class="col-lg-5 scroll " id="Actividadesxtramite2" style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">

                    <div class="panel panel-success">
                        <div class="panel-body">
                            <!---Panel de las tareas generadas por cada pago--->
                            <div class="hpanel" id="PanelTramites2">
                                <div class="panel-heading hbuilt">
                                    <div class="panel-tools">
                                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                        <a class="Pcreartarea"><i class="fa fa-times"></i></a>
                                    </div>
                                    Editar tramite
                                </div>


                                <div class="Border no-padding">
                                    <div class="tab-content">
                                        <div class="p-m tab-pane active">

                                            <div class="row">
                                                <div class="col-lg-3 text-center">
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="row">
                                                        <div class="form-group col-lg-6">
                                                            <label>Nombre</label>
                                                            <input type="text" value="" id="TxtTramite2" class="form-control">
                                                        </div>

                                                        <div class="form-group col-lg-12">
                                                            <label>Banco</label>
                                                            <select id="TxtBanco2" class="form-control">
                                                            </select>
                                                            <input type="hidden" value="" id="Txtid" class="form-control">
                                                            
                                                         </div>
                                                        <div class="form-group col-lg-12">
                                                            <button type="button" class="btn btn-success" id="BtnGuardarTramite2">Modificar</button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="pull-right">
                            </div>

                           
                        </div>
                    </div>

                </div>
            </div>

        </div>


    </div>

    

               <!--Modal actividades--->
    <div class="modal fade hmodal-success" id="ModalListActividades" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="color-line"></div>
                <div class="modal-header">
                    <h4 class="modal-title">Listado de actividades</h4>
                </div>
                <div class="modal-body">

                    <!--Empresas--->
                    <div id="TblListaActividades">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" id="BtnModalCrearActividad">Nueva</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal" id="BtnCerrar">Cerrar</button>

                </div>
            </div>
        </div>
    </div>


    <!--Modal posiciones--->
    <div class="modal fade hmodal-success" id="ModalPosicionActividades" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="color-line"></div>
                <div class="modal-header">
                    <h4 class="modal-title">Posicion de actividad</h4>
                </div>
                <div class="modal-body">

                    <div class="row">
                        <div class="col-lg-3 text-center">
                        </div>
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="form-group col-lg-12">
                                    <label>Posicion</label>
                                    <input type="number" min="1" value="" id="TxtPosicion" class="form-control">
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" id="BtnActualizarActividadXtramite">Guardar</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal" id="">Cerrar</button>

                </div>
            </div>
        </div>
    </div>


    <!--Modal crear actividades--->
    <div class="modal fade hmodal-success" id="ModalCrearActividades" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="color-line"></div>
                <div class="modal-header">
                    <h4 class="modal-title" id="titulo"></h4>
                </div>
                <div class="modal-body">
                    <!--Formulario de crear actividades--->
                    <div class="row">
                        <div class="col-lg-3 text-center">
                        </div>
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="form-group col-lg-12">
                                    <label>Nombre</label>
                                    <input type="text" value="" id="TxtNombre" class="form-control">
                                </div>
                                <div class="form-group col-lg-6">
                                    <label>Descripción</label>
                                    <textarea id="TxtDescripcion" class="form-control" rows="2" cols="3" maxlength="100"></textarea>
                                </div>
                                <div class="form-group col-lg-6">
                                    <label>Duración (Días)</label>
                                    <input type="number" min="1" value="" id="TxtDuracion" class="form-control">
                                </div>
                                <div class="form-group col-lg-6">

                                    <label>Simultaneo</label>
                                    <div class="row">
                                        <input type="radio" name="sex" id="Choose_Yes" class="" value="1">Si</input>
                                    </div>
                                    <div class="row">
                                        <input type="radio" name="sex" id="Choose_No" class="" value="0">No</input>
                                    </div>
                                </div>
                                <div class="form-group col-lg-12">
                                    <label>Actividad dependiente</label>
                                    <select id="Text9" class="form-control">
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="row" id="PanelDocumentos">
                        <div class="modal-header">
                            <h4 class="modal-title">Documentos</h4>
                        </div>

                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="pull-right">


                                        <button class="btn btn-success btn-btn-circle" type="button" id="BtnAddDocumento">+</button>

                                    </div>
                                </div>
                            </div>
                            <div id="TblListaDocumentos">
                            </div>
                        </div>
                    </div>


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" id="BtnEditarActividad">Editar Actividad</button>
                    <button type="button" class="btn btn-success" id="BtnCActividad">Crear Actividad</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal" id="BtnCancelar">Cerrar</button>

                </div>
            </div>
        </div>
    </div>



    <!--Modal documentos--->
    <div class="modal fade hmodal-success" id="ModalDocumentosActividades" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="color-line"></div>
                <div class="modal-header">
                    <h4 class="modal-title">Documento</h4>
                </div>
                <div class="modal-body">

                    <div class="row">
                        <div class="col-lg-3 text-center">
                        </div>
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="form-group col-lg-12">
                                    <label>Nombre del documento</label>
                                    <input type="text" value="" id="TxtDocumento" class="form-control">
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" id="BtnCrearDocumento">Guardar</button>
                    <button type="button" class="btn btn-success" id="BtnEditarDocumento">Actualizar</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal" id="">Cerrar</button>

                </div>
            </div>
        </div>
    </div>


 
            
    <style type="text/css">
        .scroll {
            height: 700px;
            overflow: scroll;
        }

        .Border {
            background: #fff;
            border: 1.5px solid #E50000;
            border-radius: 2px;
            padding: 10px;
            position: relative;
        }
    </style>
    <script src="../../vendor/jquery/dist/jquery.min.js"></script>
    <script src="../../vendor/jquery-ui/jquery-ui.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
    <link rel="stylesheet" href="../../vendor/sweetalert/lib/sweet-alert.css" />
    <link rel="stylesheet" href="../../vendor/toastr/build/toastr.min.css" />
    <link rel="stylesheet" href="../../styles_crm/static_custom.css">
    <script src="../../gmaps/gmap3.js"></script>

    <script src="../../vendor/sweetalert/lib/sweet-alert.min.js"></script>
    <script src="../../vendor/toastr/build/toastr.min.js"></script>
    <script src="../../vendor/moment/moment.js"></script>
    <script src="../../vendor/select2-3.5.2/select2.min.js"></script>
    <script src="../../vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
    <script src="../../vendor/bootstrap-datepicker-master/dist/js/bootstrap-datepicker.min.js"></script>

    <script src="../../BLLscripts/BLLUtilidades.js"></script>
    <script src="../../BLLscripts/BLLActividades.js"></script>
    <script src="../../BLLscripts/BLLConfigTramites.js"></script>
    <script src="../../BLLscripts/BLLDocumentosConfigTramite.js"></script>
    <script src="../../BLLscripts/BLLBancos.js"></script>
    <script src="js/ConfigTramite.js"></script>
    <script src="../../scripts_crm/bootstrap-datepicker.js"></script>
    <script src="../../scripts_crm/accounting.js"></script>
</asp:Content>
