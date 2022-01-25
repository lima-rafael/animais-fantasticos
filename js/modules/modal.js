export default class Modal {
  constructor(btnOpen, btnClose, containerModal){
    this.botaoAbrir = document.querySelector(btnOpen);
    this.botaoFechar = document.querySelector(btnClose);
    this.containerModal = document.querySelector(containerModal);

    //bind this para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.cliqueForaModal = this.cliqueForaModal.bind(this)
  }

  //abre ou fecha modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  //adciona o evento de toggleModal
  eventToggleModal(event){
    event.preventDefault();
    this.toggleModal();
  }

  //fecha o modal ao clicar do lado de fora
  cliqueForaModal(event) {
    if(event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  //adiciona os eventos aos elementos do modal
  addModalEvent(){
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click',this.cliqueForaModal);
  }

  init(){
    if(this.botaoAbrir && this.botaoFechar && this.containerModal){
      this.addModalEvent();
    }
    return this;
  }
}
