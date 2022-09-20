import { LightningElement } from "lwc";

export default class App extends LightningElement {
  /* objects com os campos do form com (key) */
  
  inputs = {
    firstName:" ",
    lastName:" ",
    phone:" "
  };
/* operador spread=espalhamento
sua função é expandir valores de um array ou object dentro de outro
 */

//array=[1,2,3];
//new=[];

  handleImputChage(event){
    //console.log("Valor do campo: " + event.detail.value);
    //console.log("valor do atributo name do campo" + event.target.name)

    let nameImput =  event.target.name;
    let value =  event.target.value;
//montando  o object com valores
      this.inputs = {
        ...this.inputs, [nameInput]:value
      };

      console.log(this.inputs);
    }

    onSpread(){
      this.new = [4,5,6,this.array];
      console.log(this.new);
      this.new = [4,5,6, ...this.array];
      console.log(this.new);
    }
}