﻿CREATE VIEW [dbo].[VListadoEntegrasC]
AS
SELECT        dbo.INMUEBLES_ENTREGAS.ID_INMUEBLES_ENTREGAS, dbo.INMUEBLES_ENTREGAS.ID_ENTREGA, dbo.INMUEBLES_ENTREGAS.REFERENCIA_INMUEBLE, inm.MZA, inm.INMUEBLE, 
                         dbo.INMUEBLES_ENTREGAS.CONFIRMAOBRA, dbo.INMUEBLES_ENTREGAS.INSPECCIONCAL, dbo.INMUEBLES_ENTREGAS.ESTADOAVAL, dbo.INMUEBLES_ENTREGAS.RADICADOVENTA, 
                         dbo.INMUEBLES_ENTREGAS.ENTREGAOBRA, dbo.INMUEBLES_ENTREGAS.FECHACLIENTE, dbo.INMUEBLES_ENTREGAS.FECHAENTREGA, dbo.INMUEBLES_ENTREGAS.ESTADOENTREGA, 
                         dbo.bloques.NOMBRE_BLO, dbo.proyectos.NOMBRE_PROYEC, dbo.proyectos.ID_PROYEC, dbo.INMUEBLES_ENTREGAS.OBSERVACIONES, dbo.Entregas.CONSECUTIVO, 
                         dbo.INMUEBLES_ENTREGAS.FECHACONFIRMA, dbo.Aval.id AS IdAval, dbo.INMUEBLES_ENTREGAS.FECHAREG
FROM            dbo.INMUEBLES_ENTREGAS INNER JOIN
                         dbo.inmuebles AS inm ON inm.REFERENCIA = dbo.INMUEBLES_ENTREGAS.REFERENCIA_INMUEBLE INNER JOIN
                         dbo.bloques ON SUBSTRING(inm.REFERENCIA, 0, 7) = dbo.bloques.ID_BLOQUE INNER JOIN
                         dbo.proyectos ON dbo.bloques.BLOQUE_OBRA = dbo.proyectos.ID_PROYEC INNER JOIN
                         dbo.Entregas ON dbo.INMUEBLES_ENTREGAS.ID_ENTREGA = dbo.Entregas.ID_ENTREGAS LEFT OUTER JOIN
                         dbo.Aval ON dbo.Aval.ReferenciaInmueble = dbo.INMUEBLES_ENTREGAS.REFERENCIA_INMUEBLE
WHERE        (dbo.INMUEBLES_ENTREGAS.CONFIRMAOBRA = 1) AND (dbo.INMUEBLES_ENTREGAS.ESTADOENTREGA IS NULL)
GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 2, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VListadoEntegrasC';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane2', @value = N'        Width = 2340
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1245
         Width = 1500
         Width = 1275
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VListadoEntegrasC';




GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[41] 4[10] 2[31] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "INMUEBLES_ENTREGAS"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 317
               Right = 267
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "inm"
            Begin Extent = 
               Top = 6
               Left = 305
               Bottom = 136
               Right = 476
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "bloques"
            Begin Extent = 
               Top = 6
               Left = 514
               Bottom = 136
               Right = 684
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "proyectos"
            Begin Extent = 
               Top = 6
               Left = 722
               Bottom = 102
               Right = 909
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Entregas"
            Begin Extent = 
               Top = 6
               Left = 947
               Bottom = 136
               Right = 1117
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Aval"
            Begin Extent = 
               Top = 102
               Left = 722
               Bottom = 344
               Right = 952
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 21
         Width = 284
         Width = 1500
         Width = 1500
 ', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VListadoEntegrasC';



