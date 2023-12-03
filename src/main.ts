//assertion sometimes we have the knowledge to determine the type of value and ts cant

const createElement = (a: number, b: number, c?: number): number | string => {
  if (c) {
    return "${a} + ${b} + ${c}";
  }
  return a + b;
};

const myElement: string = createElement(1, 2, 3) as string;

//but be carful we can do it wrong as below, so its your responsibility

const myElementTwo: Number = createElement(1, 2, 3) as number;

///with dom
const queryImg = document.querySelector("img") as HTMLImageElement;
const getImgById = document.getElementById("#img");

//now try queryImg.src it will show error or we must use optional chain
//so we will use as htmlImageElement
//another not there is something call not null assertion
