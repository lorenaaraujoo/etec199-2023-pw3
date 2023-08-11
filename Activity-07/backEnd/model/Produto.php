<?php
    class Produto {
        public $codigo;
        public $nome;
        public $descricao;
        public $preco;
        public $fornecedor;
        public $url;

        public function __construct($codigo, $nome, $descricao, $preco, $fornecedor, $url) {
            $this->codigo = $codigo;
            $this->nome = $nome;
            $this->descricao = $descricao;
            $this->preco = $preco;
            $this->fornecedor = $fornecedor;
            $this->url = $url;
        }

        // Métodos de acesso (getters) para os atributos
        public function getCodigo() {
            return $this->codigo;
        }

        public function getNome() {
            return $this->nome;
        }

        public function getDescricao() {
            return $this->descricao;
        }

        public function getPreco() {
            return $this->preco;
        }

        public function getFornecedor() {
            return $this->fornecedor;
        }

        public function getUrl() {
            return $this->url;
        }

        // Métodos de modificação (setters) para os atributos
        public function setCodigo($codigo) {
            $this->codigo = $codigo;
        }

        public function setNome($nome) {
            $this->nome = $nome;
        }

        public function setDescricao($descricao) {
            $this->descricao = $descricao;
        }

        public function setPreco($preco) {
            $this->preco = $preco;
        }

        public function setFornecedor($fornecedor) {
            $this->fornecedor = $fornecedor;
        }

        public function setUrl($url) {
            $this->url = $url;
        }
    }

?>