﻿using DAL;

using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
    public class BLLActividadTramites
    {

        CRMEntiti bd = new CRMEntiti();
        string mensaje = null;
        /// <summary>
        /// Meotod para registrar los bancos en base de datos
        /// crm
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public int InsertActividadTramite(ActividadxTramite b)
        {
            try
            {

                b.Posicion = bd.ActividadxTramite.Max(t=>t.Posicion) + 1;
                var entidad = bd.ActividadxTramite.Add(b);
                var a = bd.SaveChanges();

                /*if (a > 0)
                {
                    var range = bd.ActividadxTramite.Where(t => t.Id_tramite == b.Id_tramite && t.Posicion > b.Posicion).ToList();
                    if (range.Count > 0)
                    {
                        foreach (var item in range)
                        {

                                item.Posicion = item.Posicion + 1;
                           
                        }
                        bd.SaveChanges();
                        var range1 = bd.ActividadxTramite.Where(t => t.Id_tramite == b.Id_tramite && t.Posicion == entidad.Posicion).FirstOrDefault();
                        range1.Posicion = entidad.Posicion + 1;
                        bd.SaveChanges();
                    }
                   
                }*/




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


        public int UpdatePosicionTramite(ActividadxTramite i)
        {

            try
            {


                /* var id = bd.ActividadxTramite.Where(t => t.Id == i.Id).FirstOrDefault();

                 if (id != null)
                 {
                    int IdPosicion = id.Id;
                     var range2 = bd.ActividadxTramite
                      .Where(t => t.Id == IdPosicion).FirstOrDefault();
                     range2.Posicion = i.Posicion + 1;
                     bd.SaveChanges();
                 }*/

                if (i.Posicion == 1) {

                    var range = bd.ActividadxTramite.Where(t => t.Id_tramite == i.Id_tramite && t.Posicion <= i.Posicion).ToList();
                    foreach (var item in range)
                    {

                        item.Posicion = i.Posicion + 1;
                        bd.SaveChanges();
                    }
                }
                else
                {
                    var range = bd.ActividadxTramite.Where(t => t.Id_tramite == i.Id_tramite && t.Posicion >= i.Posicion).ToList();
                    foreach (var item in range)
                    {

                        item.Posicion = i.Posicion + 1;
                        bd.SaveChanges();
                    }
                }

                var range1 = bd.ActividadxTramite
                .Where(t => t.Id == i.Id).FirstOrDefault();

                if (range1 != null)
                {
                    range1.Posicion = i.Posicion;
                    bd.SaveChanges();
                }
                


                /* var range = bd.ActividadxTramite
                     .Where(t => t.Id_tramite == i.Id_tramite
                      && t.Posicion > i.Posicion).ToList();

                 foreach (var item in range)
                 {


                 }*/

                /* var range = bd.ActividadxTramite.Where(t => t.Id_tramite == i.Id_tramite).ToList();


                 if (range.Count > 0)
                 {
                     foreach (var item in range)
                     {

                     if (item.Posicion == 1) {

                     }else if(i.Posicion == (item.Posicion - 1))
                             item.Posicion = item.Posicion + 1;

                     }
                     bd.SaveChanges();
                     var range1 = bd.ActividadxTramite.Where(t => t.Id_tramite == b.Id_tramite && t.Posicion == entidad.Posicion).FirstOrDefault();
                     range1.Posicion = entidad.Posicion + 1;
                     bd.SaveChanges();
                 }*/




                /* var ctx = bd.ActividadxTramite.First(inm => inm.Id == i.Id);
                     ctx.Posicion = i.Posicion;
                     bd.SaveChanges();*/

                return 1;
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }

        public int DeleteActividadTramite(int id)
        {

            try
            {
                var ctx = bd.ActividadxTramite.First(inm => inm.Id == id);
                bd.ActividadxTramite.Remove(ctx);
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

        /// <summary>
        /// rertorna listado de bancos pertenecientes al proyecto
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public List<ActividadxTramite> ListActividadTramite(int id)
        {

            try
            {
                List<ActividadxTramite> lisb = bd.ActividadxTramite.OrderBy(t => t.Posicion).Where(t => t.Id == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<ActividadxTramite> lisbcrm = new List<ActividadxTramite>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        ActividadxTramite entb = new ActividadxTramite();
                        entb.Id = item.Id;
                        entb.Id_Actividad = item.Id_Actividad;
                        entb.Id_tramite = item.Id_tramite;
                        entb.Posicion = item.Posicion;
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
        public List<ActividadxTramite> ListActividadTramite()
        {

            try
            {
                List<ActividadxTramite> lisb = bd.ActividadxTramite.ToList();
                //bd.compromisosxcuota.ToList();
                List<ActividadxTramite> lisbcrm = new List<ActividadxTramite>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        ActividadxTramite entb = new ActividadxTramite();
                        entb.Id = item.Id;
                        entb.Id_Actividad = item.Id_Actividad;
                        entb.Id_tramite = item.Id_tramite;
                        entb.Posicion = item.Posicion;
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
        public List<VActxtramite> ListActividadxTramite(int tramite)
        {

            try
            {
                List<VActxtramite> lisb = bd.VActxtramite.OrderBy(t => t.Posicion).Where(t => t.Id_tramite == tramite).ToList();
                //bd.compromisosxcuota.ToList();
                List<VActxtramite> lisbcrm = new List<VActxtramite>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        VActxtramite entb = new VActxtramite();
                        entb.Id = item.Id;
                        entb.Id_Actividad = item.Id_Actividad;
                        entb.Id_tramite = item.Id_tramite;
                        entb.Nombre = item.Nombre;
                        entb.Descripcion = item.Descripcion;
                        entb.Posicion = item.Posicion;
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
