//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class INMUEBLES_ENTREGAS
    {
        public int ID_INMUEBLES_ENTREGAS { get; set; }
        public Nullable<int> ID_ENTREGA { get; set; }
        public string REFERENCIA_INMUEBLE { get; set; }
        public Nullable<System.DateTime> FECHAREG { get; set; }
        public Nullable<int> CONFIRMAOBRA { get; set; }
        public Nullable<System.DateTime> FECHACONFIRMA { get; set; }
        public string INSPECCIONCAL { get; set; }
        public Nullable<int> ESTADOAVAL { get; set; }
        public Nullable<System.DateTime> RADICADOVENTA { get; set; }
        public Nullable<System.DateTime> ENTREGAOBRA { get; set; }
        public Nullable<System.DateTime> FECHACLIENTE { get; set; }
        public Nullable<int> ESTADOENTREGA { get; set; }
        public Nullable<System.DateTime> FECHAENTREGA { get; set; }
        public string OBSERVACIONES { get; set; }
        public string DOCUMENTO { get; set; }
    
        public virtual Entregas Entregas { get; set; }
        public virtual inmuebles inmuebles { get; set; }
    }
}
