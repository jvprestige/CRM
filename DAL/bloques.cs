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
    using System.Xml.Serialization;
    public partial class bloques
    {
        public bloques()
        {
            this.inmuebles = new HashSet<inmuebles>();
        }
    
        public string ID_BLOQUE { get; set; }
        public string BLOQUE_OBRA { get; set; }
        public string BLOQUE_CODI { get; set; }
        public string NOMBRE_BLO { get; set; }
    
        public virtual proyectos proyectos { get; set; }
        [XmlIgnore]
        public virtual ICollection<inmuebles> inmuebles { get; set; }
    }
}
