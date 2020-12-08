import { Router } from '@angular/router';
import { Professor } from './../models/professor.model';
import { ProfessorService } from './../services/professor.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, Platform } from '@ionic/angular';

// import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
// import { File } from '@ionic-native/file/ngx';
// import { FilePath } from '@ionic-native/file-path/ngx';
// import { WebView } from '@ionic-native/ionic-webview/ngx';

import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-perfil-professor',
  templateUrl: './perfil-professor.page.html',
  styleUrls: ['./perfil-professor.page.scss'],
})
export class PerfilProfessorPage implements OnInit {

  public professor: Professor = {
    id: null,
    nome: '',
    materia: '',
    descricao: '',
    telefone: '',
    horario: '',
    dataCriacao: ''
    // foto: ''
  };

  // public imagemSelecionada = '';
  // public uriAquivoImagem = '';

  profForm: FormGroup;

  // constructor(private router: Router, private professorService: ProfessorService, public formBuilder: FormBuilder) { }
  constructor(private router: Router, private professorService: ProfessorService) { }

  ngOnInit() {
    // this.imagemSelecionada = './../assets/imgs/user.png';
  }

  cadastrar() {
    // this.professor.foto = this.imagemSelecionada;

    this.professorService.cadastrar({
      ...this.professor,
      dataCriacao: (new Date()).toString()
    }).then((data) => {
      console.log('Professor cadastrado', data);

      this.router.navigateByUrl('/home');
    }).catch();
  }

  // async exibirActionSheet() {

  //   const actionSheet = await this.actionSheet.create({
  //     header: 'Escolha uma das opções de captura de imagem',
  //     cssClass: 'my-custom-class',
  //     buttons: [
  //       {
  //         text: 'Câmera',
  //         // role: 'destructive',
  //         icon: 'camera',
  //         handler: () => {
  //           console.log('Câmera escolhida');
  //           this.obterFoto(this.camera.PictureSourceType.CAMERA);
  //         }
  //       },
  //       {
  //         text: 'Arquivo de imagem',
  //         icon: 'file-tray-full',
  //         handler: () => {
  //           console.log('Sistema de arquivos escolhido');
  //           this.obterFoto(this.camera.PictureSourceType.PHOTOLIBRARY);
  //         }
  //       },
  //       {
  //         text: 'Cancelar',
  //         role: 'cancel'
  //       }
  //     ]
  //   });
  //   await actionSheet.present();
  // }


  // obterFoto(sourceType: PictureSourceType) {
  //   let caminhoCorrigido, nomeUtilizado;


  //   const options: CameraOptions = {
  //     quality: 10,
  //     targetHeight: 200,
  //     targetWidth: 200,
  //     sourceType: sourceType,
  //     saveToPhotoAlbum: false,
  //     correctOrientation: true,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   };


  //   this.camera.getPicture(options).then((caminho) => {

  //     if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {

  //       this.filePath.resolveNativePath(caminho).then((caminhoArquivo) => {

  //         caminhoCorrigido = caminhoArquivo.substr(0, caminhoArquivo.lastIndexOf('/') + 1);
  //         nomeUtilizado = caminho.substr(caminho.lastIndexOf('/') + 1, caminho.lastIndexOf('?'));

  //         // this.copiarDiretorioLocal(caminhoCorrigido, nomeUtilizado, this.criarNomeImagem());
  //         this.uriAquivoImagem = caminhoCorrigido + nomeUtilizado;
  //         this.imagemSelecionada = this.caminhoParaImage(this.uriAquivoImagem);
  //       });

  //     } else {
  //       // caminhoCorrigido = caminho.substr(0, caminho.lastIndexOf('/')+1);
  //       // nomeUtilizado = caminho.substr(  caminho.lastIndexOf('/')+1,  caminho.lastIndexOf('?')  );
  //       caminhoCorrigido = caminho.substr(0, caminho.lastIndexOf('/') + 1);
  //       nomeUtilizado = caminho.substr(caminho.lastIndexOf('/') + 1);

  //       // this.copiarDiretorioLocal(caminhoCorrigido, nomeUtilizado, this.criarNomeImagem());

  //       this.uriAquivoImagem = caminhoCorrigido + nomeUtilizado;
  //       this.imagemSelecionada = this.caminhoParaImage(this.uriAquivoImagem);
  //     }

  //   });
  // }


  // copiarDiretorioLocal(caminho, nomeAtual, novoNomeParaArquivo) {


  //   this.file.copyFile(caminho, nomeAtual, this.file.dataDirectory, novoNomeParaArquivo).then((success) => {

  //     const caminhoArquivo = this.file.dataDirectory + novoNomeParaArquivo;
  //     const caminhoParaArquivoConvertido = this.caminhoParaImage(caminhoArquivo);
  //     this.imagemSelecionada = caminhoParaArquivoConvertido;

  //   }).catch((error) => {
  //     console.log(error);
  //   });


  // }

  // caminhoParaImage(caminhoImagem) {
  //   if (caminhoImagem == null) {
  //     return '';
  //   } else {
  //     const caminhoConvertido = this.webview.convertFileSrc(caminhoImagem);
  //     return caminhoConvertido;
  //   }
  // }


  // criarNomeImagem() {
  //   const d = new Date();
  //   const t = d.getTime();
  //   const nomeImage = t + '.jpg'
  //   return nomeImage;
  // }

}
