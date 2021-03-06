﻿using DAL;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Security;


namespace BLLCRM
{
  public class BLLResponsableCalidad
    {
        CRMEntiti bd = new CRMEntiti();
        public int InserResponsableCalidad(ResponsableCalidad b)
        {
            try
            {
                
                bd.ResponsableCalidad.Add(b);
                bd.SaveChanges();
                return 1;
            }
            catch (DbUpdateException ex)
            {
                throw ex;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int UpdateResponsableCalidad(ResponsableCalidad i)
        {
            try
            {
                var ctx = bd.ResponsableCalidad.First(inm => inm.Id == i.Id);


              
                ctx.Usuario = i.Usuario;
                bd.SaveChanges();

                return 1;
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }
        public List<ResponsableCalidad> ListResponsableCalidad()
        {
            try
            {
                List<ResponsableCalidad> lisb = bd.ResponsableCalidad.ToList();
                //bd.compromisosxcuota.ToList();
                List<ResponsableCalidad> lisbcrm = new List<ResponsableCalidad>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        ResponsableCalidad entb = new ResponsableCalidad();
                        entb.Id = item.Id;
                        entb.Proyecto = item.Proyecto;
                        entb.Usuario = item.Usuario;
                    }
                    return lisb;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public int proyectosComparados()
        {
            var bandera = 0;
            try
            {
                List<proyectos> lisb = bd.proyectos.ToList();
                List<ResponsableCalidad> respon = bd.ResponsableCalidad.ToList();
                //bd.compromisosxcuota.ToList();
                  foreach (var item in lisb)
                    {

                        foreach (var item2 in respon)
                        {
                            if (item.NOMBRE_PROYEC == item2.Proyecto)
                            {
                                bandera = 1;
                            }

                        }
                        if (bandera == 0)
                        {
                            ResponsableCalidad b = new ResponsableCalidad();
                            b.Proyecto = item.NOMBRE_PROYEC;
                            bd.ResponsableCalidad.Add(b);
                            bd.SaveChanges();
                            
                        }
                        bandera = 0;
                    }
                    return 1;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
