import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productModel.create(createProductDto);
    return product as Product;
  }

  async findAll() {
    const products = await this.productModel.find();
    return products as Product[];
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id);
    if (!product) throw new NotFoundException('Product Not Found!');
    return product as Product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      id,
      updateProductDto,
    );

    return updatedProduct;
  }

  async remove(id: string) {
    try {
      return await this.productModel.findByIdAndDelete(id);
    } catch (error) {
      return error;
    }
  }
}
