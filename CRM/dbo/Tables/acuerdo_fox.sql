﻿CREATE TABLE [dbo].[acuerdo_fox] (
    [ID]           INT             IDENTITY (1, 1) NOT NULL,
    [CODIGO]       VARCHAR (50)    NULL,
    [REFERENCIA1]  VARCHAR (100)   NULL,
    [INMUEBLE]     VARCHAR (15)    NULL,
    [NEGOCIO]      VARCHAR (15)    NULL,
    [FECHANEGOCIO] VARCHAR (30)    NULL,
    [CONCEPTO]     TEXT            NULL,
    [FECHACUOTA]   VARCHAR (30)    NULL,
    [ANO]          VARCHAR (10)    NULL,
    [MES]          VARCHAR (10)    NULL,
    [DIA]          VARCHAR (10)    NULL,
    [VLRCUOTA]     DECIMAL (20, 2) NULL,
    [PAGOCUOTA]    DECIMAL (20, 2) NULL,
    [SALDOXCOBRAR] DECIMAL (20, 2) NULL,
    [FECHACARTERA] VARCHAR (30)    NULL,
    [CODCRM]       VARCHAR (15)    NULL,
    [CODIGOTAREA]  INT             NULL,
    CONSTRAINT [PK_acuerdo_fox] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_acuerdo_fox_negocio_fox] FOREIGN KEY ([CODCRM]) REFERENCES [dbo].[negocio_fox] ([CODIGOCRM]) ON DELETE CASCADE ON UPDATE SET NULL
);










GO


CREATE TRIGGER [dbo].[triggerAcFoxInsert] ON [dbo].[acuerdo_fox]


AFTER INSERT
	AS

	(SELECT FECHACARTERA  FROM INSERTED)



   
  BEGIN
    INSERT INTO tareas (CLIENTE,TRABAJADOR,CONCEPTO,NEGOCIO,FECHAINICIO,FECHAFIN,ESTADO)
	(SELECT 
	 CEDULA_P
	,USER_CARTERA
	,'Tarea de cartera cliente'
	,(SELECT REFERENCIA1 FROM INSERTED AS I)
	,(SELECT  convert(date, FECHACARTERA,104)  FROM INSERTED AS I)
	,(SELECT convert(date, FECHACARTERA,104)  FROM INSERTED AS I),'V' 
	 FROM negocio WHERE CODIGO_F = (SELECT I.CODCRM FROM INSERTED AS I))  

	UPDATE acuerdo_fox set CODIGOTAREA =(SELECT MAX(ID_TAREA) from tareas) where ID = (SELECT ID FROM INSERTED)
	END
GO


CREATE TRIGGER [dbo].[triggerAcFoxUpdate] ON [dbo].[acuerdo_fox]


AFTER UPDATE
	AS

  BEGIN
    UPDATE  tareas 
	

	SET
	 FECHAINICIO =((SELECT  convert(date, FECHACARTERA,104)  FROM INSERTED AS I)),
	 FECHAFIN =((SELECT  convert(date, FECHACARTERA,104)  FROM INSERTED AS I))

	 WHERE ID_TAREA = (SELECT CODIGOTAREA FROM INSERTED)
 


	
	END
GO


CREATE TRIGGER [dbo].[triggerAcFoxDelete] ON [dbo].[acuerdo_fox]


FOR DELETE
	AS

  BEGIN
    
	DELETE   tareas 
	WHERE ID_TAREA IN (SELECT CODIGOTAREA FROM DELETED)

	DELETE   pagos_fox 
	WHERE Referencia1 IN (SELECT REFERENCIA1 FROM DELETED)

  END