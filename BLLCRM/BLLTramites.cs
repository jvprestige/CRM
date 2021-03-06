﻿using DAL;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using Entity;
using System.Text;
using System.Threading.Tasks;
using Entity.VistaTramite;

namespace BLLCRM
{
  
    public  class BLLTramites
       
    {
        CRMEntiti bd = new CRMEntiti();
        string mensaje = null;
        /// <summary>
        /// Meotod para registrar los bancos en base de datos
        /// crm
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public int InsertTramites(Tramites b)
        {
                try
                {
                    bd.Tramites.Add(b);
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

        public string Actualizar(string b)
        {
            var bandera = 0;
            var bandera2 = 0;
            try
            {
                List<VInmueblesConTramites> vimp = bd.VInmueblesConTramites.OrderBy(l => l.INMUEBLE)
                    .Where(t => t.PROYECTO_INT == b && t.IdTramite == null).ToList();
                List<VInmueblesConTramites> Evimp = new List<VInmueblesConTramites>();
                if (vimp.Count().Equals(0))
                {

                    return "Todos los inmuebles ya tienen tramite";
                }
                else
                {
                    foreach (var item in vimp)
                    {
                        var tramite = bd.Tramites.Where(t => t.Banco == item.BANCO).First();
                        bandera = 0;
                        if (tramite != null)
                        {
                            Tramites_Inmueble tra = new Tramites_Inmueble();
                            tra.id_Tramite = tramite.id;
                            tra.Porcentaje = 0;
                            tra.Id_Inmueble = item.REFERENCIA;
                            var a = bd.Tramites_Inmueble.Add(tra);
                            int estado = bd.SaveChanges();

                            if (estado > 0)
                            {


                                var actividadesxtramite = bd.VActxtramite
                                    .Where(t => t.Id_tramite == tramite.id)
                                    .OrderBy(t => t.Posicion).ToList();

                                foreach (var actividad in actividadesxtramite)
                                {

                                    //sds
                                    Actividades_Inmueble actinmueble = new Actividades_Inmueble();
                                    actinmueble.IdTraInmueble = a.id;
                                    actinmueble.Nombre = actividad.Actividad;
                                    actinmueble.Descripcion = actividad.Descripcion;
                                    actinmueble.Duracion = actividad.Duracion;
                                    actinmueble.Simultaneo = actividad.Simultaneo;
                                    if (actinmueble.Simultaneo == 1)
                                    {
                                        if (bandera2 == 2)
                                        {
                                            bandera2 = 1;
                                        }
                                    }
                                    actinmueble.Posicion = actividad.Posicion;
                                    actinmueble.IdActividad = actividad.Id_Actividad;

                                    if (bandera == 1)
                                    {
                                        actinmueble.Estado = 1;
                                        actinmueble.FechaInicio = null;
                                        actinmueble.FechaFin = null;
                                        if (bandera2 == 1)
                                        {
                                            actinmueble.FechaInicio = DateTime.Now;
                                            actinmueble.Estado = 3;
                                            if (actividad.Duracion != null)
                                            {
                                                actinmueble.FechaFin = DateTime.Now.AddDays(Convert.ToDouble(actividad.Duracion));
                                            }
                                            bandera2 = 2;
                                        }
                                        else
                                        {
                                            bandera2 = 0;
                                        }

                                    }
                                    else
                                    {
                                        actinmueble.Estado = 3;
                                        actinmueble.FechaInicio = DateTime.Now;

                                        if (actividad.Duracion != null)
                                        {
                                            actinmueble.FechaFin = DateTime.Now.AddDays(Convert.ToDouble(actividad.Duracion));
                                        }
                                        bandera2 = 2;
                                    }

                                    actinmueble.ActividadDependiente = actividad.Actividad_Dependiente;

                                    bd.Actividades_Inmueble.Add(actinmueble);
                                    bd.SaveChanges();
                                    bandera = 1;

                                    
                                    
                                }
                               

                            }
                            else
                            {
                                return "Este banco no tiene tramites";
                            }
                           
                        }
                       
                        
                    }
                    // aca se registran los documentos
                    var documentosxactividad = bd.VDocumentosActividades.ToList();

                    foreach (var documento in documentosxactividad)
                    {
                        Documento_ActInmueble docuinmueble = new Documento_ActInmueble();
                        docuinmueble.IdActividad = documento.idactividad;
                        docuinmueble.Documento = null;
                        docuinmueble.Nombre = documento.Nombre;
                        docuinmueble.Fecha = null;
                        docuinmueble.Usuario = null;
                        bd.Documento_ActInmueble.Add(docuinmueble);
                        bd.SaveChanges();

                    }
                    return "Se han actualizado";
                }
            }

            catch (Exception ex)
            {
                return mensaje = "No fue posible llevar  a cabo el proceso" + ex;
                throw;
            }
        }

        public string UpdateTramites(Tramites i)
        {

            try
            {
                    var ctx = bd.Tramites.First(inm => inm.id == i.id);
                    ctx.Nombre = i.Nombre;
                    ctx.Banco = i.Banco;
                    bd.SaveChanges();
                
                return mensaje = "Los tramites se actualizaron de manera exitosa";
            }

            catch (Exception ex)
            {
                return mensaje = "No fue posible llevar  a cabo el proceso" + ex;
                throw;
            }
        }

        /// <summary>
        /// rertorna listado de bancos pertenecientes al proyecto
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public List<Tramites> ListTramites(int id)
            {

                try
                {
                    List<Tramites> lisb = bd.Tramites.Where(t => t.id == id).ToList();
                    //bd.compromisosxcuota.ToList();
                    List<Tramites> lisbcrm = new List<Tramites>();
                    if (lisb.Count.Equals(0))
                    {
                        return lisbcrm;
                    }
                    else
                    {
                        foreach (var item in lisb)
                        {
                            Tramites entb = new Tramites();
                            entb.id = item.id;
                            entb.Nombre = item.Nombre;
                            entb.Banco = item.Banco;
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
 
        public List<VTramiteBanco> ListTramites()
        {

            try
            {
                var query = from Tramites in bd.Tramites
                            join bancos in bd.bancos on Tramites.Banco equals bancos.ID_BANCO
                            select new { id = Tramites.id, Ntramite = Tramites.Nombre, nbanco = bancos.NOMBRE_BANCO, idbanco = bancos.ID_BANCO };
                //List<Tramites> lisb = bd.Tramites.ToList();

                


                //bd.compromisosxcuota.ToList();
                List<VTramiteBanco> lisbcrm = new List<VTramiteBanco>();
                //if (query.Count.Equals(0))
                //{
                //    return lisbcrm;
                //}
                //else
                //{
                    foreach (var item in query)
                    {
                        VTramiteBanco entb = new VTramiteBanco();
                        entb.id = item.id;
                        entb.Nombre = item.Ntramite;
                        entb.Banco = item.nbanco;
                        entb.idbanco = item.idbanco;
                        lisbcrm.Add(entb);
                    }
                    return lisbcrm;
               // }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public List<VInmueblesConTramites> LisNegociosTramites( string b)
        {
            try
            {
                List<VInmueblesConTramites> vimp = bd.VInmueblesConTramites.OrderBy(l => l.INMUEBLE).Where(t =>  t.PROYECTO_INT == b).ToList();
                List<VInmueblesConTramites> Evimp = new List<VInmueblesConTramites>();
                if (vimp.Count().Equals(0))
                {

                    return Evimp;
                }
                else
                {
                    foreach (var item in vimp)
                    {
                        VInmueblesConTramites Vim = new VInmueblesConTramites();
                        Vim.IdTraInmueble = item.IdTraInmueble;
                        Vim.REFERENCIA = item.REFERENCIA;
                        Vim.PROYECTO_INT = item.PROYECTO_INT;
                        Vim.INMUOBRA = item.INMUOBRA;
                        Vim.INMUEBLE = item.INMUEBLE;
                        Vim.ID_NEGOCIO = item.ID_NEGOCIO;
                        Vim.PROPIETARIO = item.PROPIETARIO;
                        Vim.CEDULA_P = item.CEDULA_P;
                        Vim.BANCO = item.BANCO;
                        Vim.Tramite = item.Tramite;
                        Vim.IdTramite = item.IdTramite;
                        Vim.IdBanco = item.IdBanco;
                        Evimp.Add(Vim);
                }
                    return Evimp;
                }

            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
