﻿<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Negocios.aspx.cs" Inherits="FormsAuthAd.Cartera.Negocios" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">

   

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">
    <div id="wrapper">

        <div class="content animate-panel"  style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">

            <div class="row">
                <div class="col-sm-4 text-center">
                                            <div class="pull-right">
                                           <div class="dt-buttons btn-group">
       
                                              <a class="btn btn-default buttons-copy buttons-html5 btn-sm" tabindex="0" aria-controls="example1">
                                               <span>MultiFox y CRM</span>
                                                   <img src='<%= ResolveUrl("../../images_crm/Fox.png") %>' style="width:20px;height:18px" /> 
                                              </a>
                                               <a class="btn btn-default buttons-csv buttons-html5 btn-sm" tabindex="0" aria-controls="example1">
                                               <span>Desistido</span>
                                                    <img src='<%= ResolveUrl("../../images_crm/PV.png") %>' style="width:15px;height:15px" /> 
                                               </a>
                                               <a class="btn btn-default buttons-pdf buttons-html5 btn-sm" tabindex="0" aria-controls="example1">
                                               <span>CRM pero no en MultiFox</span>
                                                    <img src='<%= ResolveUrl("../../images_crm/Espera.png") %>' style="width:15px;height:15px" />
                                               </a>
       
                                           </div>
                                    </div>
                               </div>
            </div>

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
                              
                                  <button class="btn btn-danger btn-btn-circle" type="button" id="BtnActualizar">Actualizar</button>
                                  <img src="../../Images/loading.gif" style="width:25px;height:25px" id="Cargando"/>
                            </div>
                            <li class="active"><a data-toggle="tab" href="#tab-1">NEGOCIOS</a></li>
                        </ul>
                        <div class="tab-content scroll2">
                            <div id="tab-1" class="tab-pane active">
                                 <div class="panel-body" id="TblNegocios">
                                 </div>
                            </div>
                        </div>
                    </div>
                    <div class="div" style="display:none">
                      <div class="hpanel">
                        <div class="panel-tools">
                            <a class="showhide" style="background: #E50000"><i class="fa fa-chevron-up"></i></a>
                            <a class="Pcreartarea" style="background: #E50000"><i class="fa fa-times"></i></a>
                        </div>
                        
                        <div class="tab-content">
                            <div class="tab-pane active">
                                 <div class="panel-body" id="TblAcuerdos">
                                 </div>
                            </div>
                        </div>
                          </div>
                    </div>
                </div>

                <!---Paneles derecha--->
                <div class="div" style="display:none">
                 <div class="col-lg-5 scroll " style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s; " id="panelderecha" >
                    <div class="panel panel-success">
                        <div class="panel-body">
                           <!---Panel de las tareas generadas por cada pago--->
                           <div class="hpanel" id="PanelTareas">
                               <div class="panel-heading hbuilt">
                                    <div class="panel-tools">
                                         <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                         <a class="Pcreartarea"><i class="fa fa-times"></i></a>
                                    </div>Tareas
                               </div>
                                  

                                <div class="Border no-padding">
                                    <div class="tab-content">
                                        <div id="clientesData" class="p-m tab-pane active">

                                        </div>

                                    </div>
                                </div>
                              </div>


                            <!---Panel de las tareas generadas por cada pago--->
                           <div class="hpanel" id="PanelNego">
                               <div class="panel-heading hbuilt">
                                    <div class="panel-tools">
                                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                        <a class="Pcreartarea"><i class="fa fa-times"></i></a>
                                    </div>
                                    Pagos Realizados
                               </div>

                                 <div class="Border no-padding">
                                    <div class="tab-content">
                                        <div id="pagosFox" class="p-m tab-pane active">

                                        </div>

                                    </div>
                                </div>
                          

                             <div>
                                  <button class="btn btn-success " type="button" id="BtnImprimirCuenta" style="display:none">Imprimir Compromisos</button>
                                  <button class="btn btn-success " type="button" id="BtnImprimir">Imprimir Estado de cuenta</button>
                              </div>
                           </div>
                         </div>
                     </div>
                 </div>
                </div>    
            </div>

              

                      <div  class="col-lg-5 scroll " style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s; display:none">
                        <div class="panel panel-success">
                        <div class="panel-body" id="oculto">
                     </div>
            </div>

     <!--Modal para cargar la imagen-->
    <div class="modal fade hmodal-danger" id="planos" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h5 class="modal-title">Cargar Imagen</h5>

                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row">
                                    <form method="POST" EncType="Multipart/Form-Data"> 
                                    <div class="form-group col-lg-12">
                                        <label></label>
                                        <input type='file' name='UploadFile' id="UploadFile"  accept='.pdf,.docx' class='form-control subirfile' title='Detalle de separacion'/>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-success RemoverP " type="button" id="RemoverP">Registrar</button>
                    </div>
                </div>
            </div>
        </div>
  
       <div class="modal fade hmodal-danger" id="infoTareas" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h5 class="modal-title">Detalles de Tarea</h5>

                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="form-group col-lg-12">
                                <label>Id de tarea</label>
                                <input type="text" value="" id="TxtIdTarea" class="form-control" readonly="">
                            </div>
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group col-lg-6">
                                        <label>Descricpion de Tarea</label>
                                        <textarea id="Txtdetalle" class="form-control" rows="2" cols="3" readonly=""></textarea>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Fecha de inicio tarea</label>
                                        <input id="fechainfo" type="text" value="" class="form-control" readonly="">
                                    </div>
                                     <div class="form-group col-lg-12">
                                        <label id="labelfin">Fecha de Finalizacion</label>
                                        <input id="Fechafin" type="text" value="" class="form-control" readonly="">
                                    </div>
                                    <div class="form-group col-lg-12">
                                        <label id="labelmotivo">descripcion</label>
                                        <textarea id="TxtMotivo" class="form-control" rows="2" cols="3"></textarea>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div style="border-top:solid;color:#E50000"><h4>Historial de tarea</h4></div>
                        <div id="TablaBitacoras">
                        </div>
                      </div>
                    <div class="modal-footer">
                        <button class="btn btn-success " type="button" id="BtnEditar">Editar</button>
                        <button class="btn btn-success " type="button" id="BtnPost">Posponer</button>
                        <button class="btn btn-primary " type="button" id="BtnTerminada">Completado</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>

                    </div>
                </div>
            </div>
        </div>
</div>

            
                </div>
            </div>
    

 
            
<style type="text/css">
    .scroll2 {
       height:300px;
       overflow-y: scroll;
       overflow-x:hidden;
    }
    .scroll {
        height:700px;
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
    <script src="../../scripts_crm/HttpBll.js"></script>
    <script src="../../BLLscripts/BLLUtilidades.js"></script>
   <script src="../../BLLscripts/BLLnegocio.js"></script>
    <script src="../../BLLscripts/BLLPagosFox.js"></script>
    <script src="../../BLLscripts/BLLAcuerdosFox.js"></script>
    <script src="../../BLLscripts/BLLTareas.js"></script>
    <script src="../../BLLscripts/BLLProyectos.js"></script>

  
    <script src="js/Cartera.js"></script>
    <script src="js/Negocios.js"></script>

    <script src="../../vendor/sweetalert/lib/sweet-alert.min.js"></script>
    <script src="../../vendor/toastr/build/toastr.min.js"></script>
    <script src="../../vendor/moment/moment.js"></script>
    <script src="../../vendor/select2-3.5.2/select2.min.js"></script>
    <script src="../../vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
    <script src="../../vendor/bootstrap-datepicker-master/dist/js/bootstrap-datepicker.min.js"></script>
    <script src="../../BLLscripts/BLLActInmuebles.js"></script>
   
    <script src="../../BLLscripts/BLLEmpresa.js"></script>
  
    <script src="../../BLLscripts/BLLSala_Ventas.js"></script>
    <script src="../../BLLscripts/BLLClientes.js"></script>

    <script src="../../scripts_crm/bootstrap-datepicker.js"></script>
    <script src="../../scripts_crm/accounting.js"></script>
</asp:Content>