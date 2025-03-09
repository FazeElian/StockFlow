import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private readonly categoryRepository : Repository<Category>
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    // const category = new Category()
    // category.name = createCategoryDto.name
    // category.description = createCategoryDto.description
    return this.categoryRepository.save(createCategoryDto);
  }

  findAll() {
    // return `This action returns all categories`;
    // return this.categoryRepository.findBy({ id: 2 })
    return this.categoryRepository.find()
  }

  async findOne(id: number) {
    // return `This action returns a #${id} category`;
    const category = await this.categoryRepository.findOneBy({ id: id })

    // Check if the category exists (Exception)
    if (!category) {
      throw new NotFoundException("La categoría no existe")
    }
    return category
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
