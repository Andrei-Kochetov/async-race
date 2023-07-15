export function createElement(elem:string, className?: string[], inner?:string): HTMLElement{
    const element = document.createElement(elem);

    if(className){
      for(let i = 0; i < className.length; i++){
        element.classList.add(className[i]);
      }   
    }
    
    if(inner){
        element.innerHTML = inner;
    }

    
    return element;
}

export function createImgElement(className: string[],src: string){
    const element = document.createElement('img');

    for(let i = 0; i < className.length; i++){
        element.classList.add(className[i]);
    }
    
    if(src){
        element.src = src;
    }

    return element;
}