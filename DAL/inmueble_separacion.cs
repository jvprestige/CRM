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
    
    public partial class inmueble_separacion
    {
        public int ID_SEPARACION { get; set; }
        public string CLIENTE { get; set; }
        public string INMUEBLE { get; set; }
        public Nullable<System.DateTime> FECHASEPARACION { get; set; }
        public Nullable<System.DateTime> FECHAFINAL { get; set; }
        public string ESTADO { get; set; }
        public string ASESOR_T { get; set; }
    
        public virtual clientes clientes { get; set; }
        public virtual inmuebles inmuebles { get; set; }
    }
}
