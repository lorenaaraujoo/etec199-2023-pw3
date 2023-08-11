<?php
    require '../model/Produto.php';

    //Criar 10 instâncias de produtos
    $produto1 = new Produto('001', 'Camiseta Azul', 'Camiseta de algodão azul', 19.99, 'Fornecedor A', 'http://exemplo.com/camiseta-azul');
    $produto2 = new Produto('002', 'Calça Jeans', 'Calça jeans masculina', 49.99, 'Fornecedor B', 'http://exemplo.com/calca-jeans');
    $produto3 = new Produto('003', 'Tênis Esportivo', 'Tênis esportivo preto', 79.99, 'Fornecedor C', 'http://exemplo.com/tenis-esportivo');
    $produto4 = new Produto('004', 'Celular Smartphone', 'Smartphone Android', 399.99, 'Fornecedor D', 'http://exemplo.com/smartphone');
    $produto5 = new Produto('005', 'Mochila Escolar', 'Mochila escolar de nylon', 29.99, 'Fornecedor E', 'http://exemplo.com/mochila-escolar');
    $produto6 = new Produto('006', 'Relógio de Pulso', 'Relógio de pulso analógico', 59.99, 'Fornecedor F', 'http://exemplo.com/relogio-pulso');
    $produto7 = new Produto('007', 'Livro de Ficção', 'Livro de ficção científica', 12.99, 'Fornecedor G', 'http://exemplo.com/livro-ficcao');
    $produto8 = new Produto('008', 'Câmera Digital', 'Câmera digital de 16MP', 149.99, 'Fornecedor H', 'http://exemplo.com/camera-digital');
    $produto9 = new Produto('009', 'Fone de Ouvido', 'Fone de ouvido estéreo', 9.99, 'Fornecedor I', 'http://exemplo.com/fone-ouvido');
    $produto10 = new Produto('010', 'Tablet Android', 'Tablet Android de 10 polegadas', 149.99, 'Fornecedor J', 'http://exemplo.com/tablet-android');

    //Colocar os produtos em um array
    $produtosArray = array(
        $produto1,
        $produto2,
        $produto3,
        $produto4,
        $produto5,
        $produto6,
        $produto7,
        $produto8,
        $produto9,
        $produto10
    );

    //Converter o array para JSON
    $jsonProdutos = json_encode($produtosArray);
   
    //var_dump($produtosArray);
    // Exibir o JSON gerado
    
    echo $jsonProdutos;

?>