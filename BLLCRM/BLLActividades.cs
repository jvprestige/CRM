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
  public  class BLLActividades
    {
         CRMEntiti bd = new CRMEntiti();
        string mensaje = null;
        /// <summary>
        /// Meotod para registrar los bancos en base de datos
        /// crm
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public int InserActividades(Actividades b)
            {
                try
                {
                    b.Usuario = Membership.GetUser().ToString();
                    bd.Actividades.Add(b);
                    bd.SaveChanges();
                    return 1;
                }
                catch (DbUpdateException)
                {
                    return 0;
                }
                catch (Exception)
                {
                    throw;
                }
            }

        public string UpdateActividades(List<Actividades> i)
        {

            try
            {
                foreach (var item in i)
                {
                
                var ctx = bd.Actividades.First(inm => inm.id == item.id);
                        
                    ctx.Nombre = item.Nombre;
                    ctx.Usuario = item.Usuario;
                    ctx.Descripcion = item.Descripcion;
                    ctx.Duracion = item.Duracion;
                    ctx.Simultaneo = item.Simultaneo;
                    ctx.Actividad_Dependiente = item.Actividad_Dependiente;
                    bd.SaveChanges();
                }
                return mensaje = "Las actividades se actualizaron de manera exitosa";
            }
           
            catch (Exception ex)
            {
                return mensaje = "No fue posible llevar  a cabo el proceso" + ex;
                throw;
            }
        }



        public int UpdateActividad(Actividades i)
        {

            try
            {
                

                    var ctx = bd.Actividades.First(inm => inm.id == i.id);

                    ctx.Nombre = i.Nombre;
                    ctx.Duracion = i.Duracion;
                    ctx.Descripcion = i.Descripcion;
                    ctx.Simultaneo = i.Simultaneo;
                    ctx.Actividad_Dependiente = i.Actividad_Dependiente;
                    bd.SaveChanges();
                
                return 1;
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }

        /// <summary>
        /// rertorna listado de bancos pertenecientes al proyecto
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public List<Actividades> ListActividades(int id)
            {

                try
                {
                    List<Actividades> lisb = bd.Actividades.Where(t => t.id == id).ToList();
                    //bd.compromisosxcuota.ToList();
                    List<Actividades> lisbcrm = new List<Actividades>();
                    if (lisb.Count.Equals(0))
                    {
                        return lisbcrm;
                    }
                    else
                    {
                        foreach (var item in lisb)
                        {
                            Actividades entb = new Actividades();
                            entb.id = item.id;
                            entb.Nombre = item.Nombre;
                            entb.Duracion = item.Duracion;
                            entb.Usuario = item.Usuario;
                            entb.Descripcion = item.Descripcion;
                            entb.Simultaneo = item.Simultaneo;
                            entb.Actividad_Dependiente = item.Actividad_Dependiente;
                            lisbcrm.Add(entb);
                        }
                        return lisbcrm;
                    }
                }
                catch (Exception)
                {

                    throw;
                }
            }

        /// <summary>
        /// rertorna listado de bancos pertenecientes al proyecto
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public List<Actividades> ListActividades()
        {

            try
            {
                List<Actividades> lisb = bd.Actividades.ToList();
                //bd.compromisosxcuota.ToList();
                List<Actividades> lisbcrm = new List<Actividades>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {

                     

                        Actividades entb = new Actividades();
                        entb.id = item.id;
                        entb.Nombre = item.Nombre;
                        entb.Duracion = item.Duracion;
                        entb.Usuario = item.Usuario;
                        entb.Descripcion = item.Descripcion;
                        entb.Simultaneo = item.Simultaneo;
                        entb.Actividad_Dependiente = item.Actividad_Dependiente;
                        lisbcrm.Add(entb);
                    }
                    return lisbcrm;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        

    }
}
