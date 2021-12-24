import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../../node_modules/@angular/forms';
import { Usuario } from '../form/usuario';


@Component({
  selector: 'app-secao3',
  templateUrl: './secao3.component.html',
  styleUrls: ['./secao3.component.css']
})

export class Secao3Component implements OnInit {

  formularioDeUsuario!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.criarFormularioDeUsuario();
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

    alert(`Olá ${usuario.nome}, suas informações foram enviadas com sucesso!`);

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
      email: ['', Validators.compose([Validators.email])],
      cep: ['', Validators.compose([Validators.required, Validators.maxLength(13)])],
      endereco: ['', Validators.compose([Validators.required])],
      cidade: ['', Validators.compose([Validators.required])],
      estado: ['', Validators.compose([Validators.required])],
      enderecoNumero: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(5)])],
      complemento: [''],
      mensagem: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(150)
        ])
      ],
    });
  }

}