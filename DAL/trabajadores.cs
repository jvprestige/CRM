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
    
    public partial class trabajadores
    {
        public trabajadores()
        {
            this.clientes = new HashSet<clientes>();
            this.historial_clientes = new HashSet<historial_clientes>();
            this.historial_clientes1 = new HashSet<historial_clientes>();
            this.proyectos_trabajador = new HashSet<proyectos_trabajador>();
            this.tareas = new HashSet<tareas>();
            this.tareas1 = new HashSet<tareas>();
        }
    
        public string T_CEDULA { get; set; }
        public string NOMBRES { get; set; }
        public string EMAIL { get; set; }
        public string TIPO { get; set; }
    
        public virtual ICollection<clientes> clientes { get; set; }
        public virtual ICollection<historial_clientes> historial_clientes { get; set; }
        public virtual ICollection<historial_clientes> historial_clientes1 { get; set; }
        public virtual ICollection<proyectos_trabajador> proyectos_trabajador { get; set; }
        public virtual ICollection<tareas> tareas { get; set; }
        public virtual ICollection<tareas> tareas1 { get; set; }
    }
}
