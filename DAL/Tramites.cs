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
    
    public partial class Tramites
    {
        public Tramites()
        {
            this.ActividadxTramite = new HashSet<ActividadxTramite>();
            this.Tramites_Inmueble = new HashSet<Tramites_Inmueble>();
        }
    
        public int id { get; set; }
        public string Nombre { get; set; }
        public string Banco { get; set; }
    
        public virtual ICollection<ActividadxTramite> ActividadxTramite { get; set; }
        public virtual ICollection<Tramites_Inmueble> Tramites_Inmueble { get; set; }
    }
}
