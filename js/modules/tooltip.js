export default class Tooltip {
  constructor(tooltips){
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  //move a tooltip com base em seus estilos de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if(event.pageX + 240 > window.innerWidth){
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    }else{      
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // remove a tooltip e os eventos de onMouseMove e onMouseLeave
  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }
  

  //cria a criarTooltipBox no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  //cria a tooltip e adiciona os eventos de mousemove e mouseleave ao target
  onMouseOver(event) {
    //cria a tooltipBox e coloca em uma propriedade
    this.criarTooltipBox(event.currentTarget);

    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  //adciona os eventos de onMouseOver as tooltips
  addTooltipsEvent(){
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init(){
    if(this.tooltips.length){
      this.addTooltipsEvent();
    }
    return this;
  }
  
}

