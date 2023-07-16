export function createElement(elem:string, className?: string[], inner?:string, id?:number): HTMLElement | HTMLInputElement{
    const element = document.createElement(elem);

    if(className){
      for(let i = 0; i < className.length; i++){
        element.classList.add(className[i]);
      }   
    }
    
    if(inner){
        element.innerHTML = inner;
    }
    if(id){
        element.id = String(id);
    }
    
    return element;
}

export function createInputElement(elem:string, className?: string[], inner?:string, id?:number):HTMLInputElement{
    const element = document.createElement(elem);

    if(className){
      for(let i = 0; i < className.length; i++){
        element.classList.add(className[i]);
      }   
    }
    
    if(inner){
        element.innerHTML = inner;
    }
    if(id){
        element.id = String(id);
    }
    
    return element as HTMLInputElement;
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