import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CepServiceService } from 'src/app/services/cep/cep-service.service';
import { FormBuilder, FormGroup, Validators } from '../../../../node_modules/@angular/forms';
import { Usuario } from '../../services/form/usuario';


@Component({
  selector: 'app-secao3',
  templateUrl: './secao3.component.html',
  styleUrls: ['./secao3.component.css']
})


export class Secao3Component implements OnInit {

  formularioDeUsuario!: FormGroup;

  @ViewChild('aviso') public aviso!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private cepsService: CepServiceService,
  ) { }

  ngOnInit(): void {
    this.criarFormularioDeUsuario();
  }

  consultaCep(valor: string) {
    if (valor.length == 8) {
      this.cepsService.buscar(valor).subscribe((res) => this.preencheForm(res))
    }
  }

  formSent() {
    this.aviso.nativeElement.classList.add('enviado')
    setTimeout(() => {
      this.aviso.nativeElement.classList.remove('enviado')
    }, 2000);
  }

  preencheForm(dados: any) {

    console.log(dados)

    this.formularioDeUsuario.patchValue({
      endereco: dados.logradouro,
      cidade: dados.localidade,
      estado: dados.uf,
    });
  }

  enviarDados() {

    console.log(this.formularioDeUsuario.value);

    const dadosFormulario = this.formularioDeUsuario.value;

    const usuario = new Usuario(

      dadosFormulario.nome,
      dadosFormulario.email,
      dadosFormulario.cep,
      dadosFormulario.endereco,
      dadosFormulario.cidade,
      dadosFormulario.estado,
      dadosFormulario.enderecoNumero,
      dadosFormulario.complemento,
      dadosFormulario.mensagem

    );

    this.formSent();

    this.formularioDeUsuario.reset();

  }

  criarFormularioDeUsuario() {
    this.formularioDeUsuario = this.fb.group({
      nome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100)
        ])
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      cep: ['',
        Validators.compose([
          Validators.required,
          Validators.maxLength(8),
          Validators.minLength(8)]),

      ],
      endereco: ['', Validators.compose([Validators.required])],
      cidade: ['', Validators.compose([Validators.required])],
      estado: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2)
      ])],
      enderecoNumero: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(6)])],
      complemento: [''],
      mensagem: [
        '',
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(250)
        ])
      ],
    });
  }

}