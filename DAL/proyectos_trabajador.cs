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
    
    public partial class proyectos_trabajador
    {
        public int ID_PY { get; set; }
        public string TRABAJADOR { get; set; }
        public string PROYECTO { get; set; }
    
        public virtual proyectos proyectos { get; set; }
        public virtual trabajadores trabajadores { get; set; }
    }
}
