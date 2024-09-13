import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './model-driven.component.html',
  styleUrl: './model-driven.component.scss',
})
export class ModelDrivenComponent {
  frm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ['Batuhan'],
      surname: ['Şahin'],
      email: ['batuhan.sahin@yahoo.com'],
      tel: ['0530 2913'],
      address: formBuilder.group({
        county:[""],
        city:[""],
        address:[""],
      })
    });
  }

  Ok(){
    this.frm.get("name").setValue('Mr. Sahin')
  }
}

// formGroup
// Formun kurulmasını sağlayan temel directive'dir.
//Form elemanlarının component class'ındaki model ile senkronize olmasını sağlar.
//Bunun için parametre olarak component class'ında tanımlanmış olan FormGroup nesnesini alarak çalışma sergiler.

// formControlName
// FormGroup nesnesi içerisindeki herhangi bir FormControl'ü form elemanlarından birine bağlamak ve senkronizasyonu sağlamak için kullanılan directive'dir.
// İlgili FormControl nesnesine bağlanan form elemanının değeri değiştikçe ilgili nesnenin de değeri otomatik olarak güncellenecektir.

// Model-Driven Forms yaklaşımıyla form oluşturmak için öncelikle gerekli form directive'leri
// ve yapılan banndıran ReactiveFormsModule isimli modülü uygulamada ilgili modüle import ediniz.
// Ardından oluşturulacak formun öncelikle modelini oluşturunuz ve gerekli FormControl'leri tanımlayınız.
// Bunun için FormBuilder nesnesinden istifade edebilirsiniz.
// Devamında ise html kısmında formu bütünsel olarak tasarlayınız ve 'form' etiketini formGroup directive'i ile oluşturulan model'e,
// form kontrollerini ise modeldeki ilgi FormControl'lerine formControlName directive aracılığıyla bağlayınız(binding)
// Nihai olarak, kullanıcı tarafından doldurulan bu modelin gönderilebilmesi için ngSubmit event'ine bir fonksiyon tanımlayınız.
