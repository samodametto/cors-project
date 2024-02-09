import {Component} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'; // Importe o módulo necessário

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MatFormFieldModule] // Adicione a importação do MatFormFieldModule
})

export class AppComponent {
  makeRequest() {
    const method = (<HTMLInputElement>document.getElementById('method-input')).value;
    const url = (<HTMLInputElement>document.getElementById('url-input')).value;
    const headers = JSON.parse((<HTMLTextAreaElement>document.getElementById('headers-input')).value);
    const body = JSON.parse((<HTMLTextAreaElement>document.getElementById('body-input')).value);
    const resultDiv = (<HTMLDivElement>document.getElementById('result'));

    const fetchHeaders = new Headers(headers);

    console.log(method)
    fetch(url, {
      method: `${method}`,
      headers: fetchHeaders,
      body: JSON.stringify(body)
  })
  .then(response => response.json())
  .then(data => {
      console.log('Resposta do servidor:', data);
      resultDiv.textContent = 'Resultado: \n  Sucesso \n  \n  \n' + JSON.stringify(data, null, 2);
  })
  .catch(error => {
      console.error('Erro na requisição:', error);
      resultDiv.textContent = 'FALHA';
  });
  }
}
