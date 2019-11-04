import { Component } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/toPromise';

const baseApi = 'https://3000-bfba4571-8d46-46e0-b0bf-4d24f9b9aeea.ws-us02.gitpod.io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products = [];
  file = null;

  form = {
    product: '',
    description: '',
    fileId: undefined,
  }

  constructor(private http: Http) {
    this.listProducts();
  }


  async listProducts() {
    const productsList = await this.getProducts();

    for (let product of productsList) {
      product.price = await this.getPriceOfProduct(product);
      product.description = await this.getDescriptionOfProduct(product);
    }

    this.products = productsList;

  }

  async getProducts() {
    return (await this.http.get(`${baseApi}/products`).toPromise()).json();
  }

  async getPriceOfProduct(product) {
    const price = (await this.http.get(`${baseApi}/prices?productId=${product.id}`).toPromise()).json();

    return price[0]
  }

  async getDescriptionOfProduct(product) {
    const desc = (await this.http.get(`${baseApi}/descriptions?productId=${product.id}`).toPromise()).json();

    return desc[0]
  }

  async submitForm() {

    // upload do arquivo
    //  -> salva os dados dos campos com o id do arquivo no storage.

    if (this.file !== null) {
      this.form.fileId = await this.uploadFile(this.file);
      this.saveProduct(this.form);

    } else {
      this.saveProduct(this.form);
    }
  }

  async uploadFile(file) {

  }

  async saveProduct(product) {

  }
}
