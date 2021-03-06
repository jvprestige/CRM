﻿CREATE TABLE [dbo].[proyectos_trabajador] (
    [ID_PY]      INT          IDENTITY (1, 1) NOT NULL,
    [TRABAJADOR] VARCHAR (30) NULL,
    [PROYECTO]   VARCHAR (10) NULL,
    CONSTRAINT [PK__proyecto__8B63905CD2D41409] PRIMARY KEY CLUSTERED ([ID_PY] ASC),
    CONSTRAINT [FK__proyectos__PROYE__1D9B5BB6] FOREIGN KEY ([PROYECTO]) REFERENCES [dbo].[proyectos] ([ID_PROYEC]) ON DELETE CASCADE,
    CONSTRAINT [FK__proyectos__TRABA__1CA7377D] FOREIGN KEY ([TRABAJADOR]) REFERENCES [dbo].[trabajadores] ([T_CEDULA]) ON DELETE CASCADE ON UPDATE CASCADE
);

