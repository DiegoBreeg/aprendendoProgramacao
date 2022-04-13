SELECT * FROM sucos_vendas.tabela_de_produtos

SELECT NOME_DO_PRODUTO, PRECO_DE_LISTA,
CASE
	WHEN PRECO_DE_LISTA >=12 THEN 'PRODUTO CARO'
    WHEN PRECO_DE_LISTA >= 7 AND PRECO_DE_LISTA < 12 THEN 'PRODUTO ACESSÍVEL'
    ELSE 'PRODUTO BARATO'
END AS 'STATUS DO PREÇO DO PRODUTO'
FROM tabela_de_produtos;