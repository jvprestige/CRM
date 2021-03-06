﻿using BLLCRM;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace FormsAuthAd.Servicios
{
    /// <summary>
    /// Summary description for WDocumentos
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WDocumentos : System.Web.Services.WebService
    {
        BLLDocumentos cl = new BLLDocumentos();

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertDocumentos(Documento b)
        {
            return cl.InsertDocumentos(b);
        }
       
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int UpdateDocumento(Documento i)
        {
            return cl.UpdateDocumentos(i);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int DeleteDocumento(int c)
        {
            return cl.DeleteDocumento(c);
        }

         [WebMethod]
         [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
         public List<Documento> ListDocumentosID(int id)
         {
             return cl.ListDocumentosID(id);
         }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Documento> ListDocumentosActividad(int actividad)
        {
            return cl.ListDocumentosActi(actividad);
        }
        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }


    }
}
