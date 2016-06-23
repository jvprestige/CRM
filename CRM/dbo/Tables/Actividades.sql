﻿CREATE TABLE [dbo].[Actividades] (
    [id]                    INT           IDENTITY (1, 1) NOT NULL,
    [Nombre]                VARCHAR (100) NULL,
    [Usuario]               VARCHAR (200) NULL,
    [Duracion]              INT           NULL,
    [Descripcion]           VARCHAR (250) NULL,
    [Simultaneo]            INT           NULL,
    [Actividad_Dependiente] INT           NULL,
    CONSTRAINT [PK_Actividades] PRIMARY KEY CLUSTERED ([id] ASC)
);







