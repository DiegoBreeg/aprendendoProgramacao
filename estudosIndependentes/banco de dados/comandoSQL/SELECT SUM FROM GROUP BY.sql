SELECT ESTADO, SUM(LIMITE_DE_CREDITO)
FROM sucos_vendas.tabela_de_clientes
GROUP BY ESTADO
