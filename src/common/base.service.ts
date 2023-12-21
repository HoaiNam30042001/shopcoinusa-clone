interface BaseServices {
  create(data: any): Promise<any>;
  update(id: any, data: any): Promise<any>;
  delete(id: any): Promise<any>;
  findById(id: any): Promise<any>;
  findAll(): Promise<any>;
}

export default BaseServices;
