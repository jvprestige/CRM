﻿CREATE TABLE [dbo].[bancos] (
    [ID_BANCO]     INT          IDENTITY (1, 1) NOT NULL,
    [NOMBRE_BANCO] VARCHAR (60) NULL,
    PRIMARY KEY CLUSTERED ([ID_BANCO] ASC)
);
