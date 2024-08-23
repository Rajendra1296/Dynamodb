import {
  Controller,
  Post,
  Get,
  // Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createBookDto: { id: string; Title: string; Author: string },
  ) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBookDto: { Title?: string; Author?: string },
  ) {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
