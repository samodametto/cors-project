# cors-project

O projeto tem como objetivo validar as requisições executadas diretamente em um browser, evitando possíveis erros de CORS não detectáveis em tempo de desenvolvimento e que não são reproduzíveis via Postman

# Execução

Basta abrir a raiz do projeto executando o comando ´ng serve´

# Utilização

O projeto contém campos simples para preenchimento de acordo com a requisição necessária

- Método
  Preencha com o método da requisição (POST, GET, PATCH, DELETE, etc)

- URL
  Preencha com a URL da requisição

- Headers
  Preencha com os headers da requisição, em formato JSON

- Body
  Preencha o body da requisição, em formato JSON

Após preencher os campos, clique sobre "Enviar requisição", esta será feita, exibindo o resultado abaixo, se a requisição foi ou não bem sucedida.

Em caso de erro, você pode acessar o console para verificar detalhes.
