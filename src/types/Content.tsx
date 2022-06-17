export interface ContentFormInput {
  caption: string,
  description: string
};

export class Caption {
  constructor(private value: string){
    if (value.length > 32) {
      throw new Error("dummy!")
    }
  }
}

export class Description {
  constructor(private value: string){
    if (value.length > 256) {
      throw new Error("dummy!")
    };
  };
};


export class Content {
  constructor(
    private caption: Caption,
    private description: Description
  ){}

  static create(
    caption: string,
    description: string
  ) {
    return new Content(
      new Caption(caption),
      new Description(description)
    );
  }

  static createEmployee(name: string) { //staticメソッド
    return { name: name };
  }
}
