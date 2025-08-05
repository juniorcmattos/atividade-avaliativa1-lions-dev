/*
Desafio Prático: Criação de um Sistema de Gerenciamento de Contatos
Parte 1: Aqui está um exemplo básico de como gerenciar contatos com Node.js:

    Funções necessárias:
Exibir menu, adicionar, listar, atualizar, remover contatos
*/

    const prompt = require('prompt-sync');

    let contatos = [
        { id: 1, nome: 'Junior', telefone: '93300-2221', email:'junior@example.com' },
        { id: 2, nome: 'Carlos', telefone: '93300-2222', email:'carlos@example.com' },
        { id: 3, nome: 'Mattos', telefone: '93300-2223', email:'mattos@example.com' }
        ];
    
    function exibirMenu() {
        console.log("\n--- Gerenciador de Contatos ---");
        console.log("1. Listar Contatos");
        console.log("2. Adicionar Novo Contato");
        console.log("3. Atualizar Contato");
        console.log("4. Remover Contato");
        console.log("5. Sair");
    }
    
    function listarContatos() {
        console.log("\n--- Lista de Contatos ---");
        if (contatos.length === 0) {
            console.log("Nenhum contato cadastrado.");
        } else {
            contatos.forEach((contato, numero) => {
                console.log(`${numero + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}`);
            });
        }
    }
    
    function adicionarContato() {
        const nome = prompt("Digite o nome do novo contato: ");
        const telefone = prompt("Digite o telefone do novo contato: ");
        
        contatos.push({ nome, telefone });
        console.log("Contato adicionado com sucesso!");
    }
    
    function atualizarContato() {
        listarContatos();
        if (contatos.length === 0) return;
    
        const numeroContato = parseInt(prompt("Digite o número do contato para atualizar: ")) - 1;
    
        if (numeroContato >= 0 && numeroContato < contatos.length) {
            const novoNome = prompt(`Digite o novo nome (atual: ${contatos[numeroContato].nome}): `);
            const novoTelefone = prompt(`Digite o novo telefone (atual: ${contatos[numeroContato].telefone}): `);
    
            contatos[numeroContato].nome = novoNome;
            contatos[numeroContato].telefone = novoTelefone;
            console.log("Contato atualizado com sucesso!");
        } else {
            console.log("Contato inválido.");
        }
    }
    
    function removerContato() {
        listarContatos();
        if (contatos.length === 0) return;
    
        const numeroContato = parseInt(prompt("Digite o número do contato para remover: ")) - 1;
    
        if (numeroContato >= 0 && numeroContato < contatos.length) {
            contatos.splice(numeroContato, 1);
            console.log("Contato removido com sucesso!");
        } else {
            console.log("Contato inválido.");
        }
    }
    
    function menu() {
            exibirMenu();
            const opcao = prompt("Escolha uma opção: ");
    
            switch (opcao) {
                case '1':
                    listarContatos();
                    break;
                case '2':
                    adicionarContato();
                    break;
                case '3':
                    atualizarContato();
                    break;
                case '4':
                    removerContato();
                    break;
                case '5':
                    console.log("Encerrando o gerenciador de contatos.");
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        }
    
    menu();
