import { Injectable } from '@nestjs/common';
import {
  DynamoDBClient,
  ReturnValue,
  UpdateItemCommand,
  UpdateItemCommandInput,
} from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
  GetCommand,
  DeleteCommand,
  // UpdateCommand,
} from '@aws-sdk/lib-dynamodb';

@Injectable()
export class BookService {
  private readonly docClient: DynamoDBDocumentClient;
  private readonly tableName = 'Books2';

  constructor() {
    const client = new DynamoDBClient({
      region: 'us-east-1',
      endpoint: 'http://localhost:4566', // LocalStack endpoint
    });
    this.docClient = DynamoDBDocumentClient.from(client);
  }

  async create(createBookDto: { id: string; Title: string; Author: string }) {
    const { id, Title, Author } = createBookDto;
    const params = {
      TableName: this.tableName,
      Item: { id, Title, Author },
    };

    try {
      await this.docClient.send(new PutCommand(params));
      return { message: 'Book created' };
    } catch (error) {
      throw new Error(`Error creating book: ${error.message}`);
    }
  }

  async findAll() {
    const params = {
      TableName: this.tableName,
    };

    try {
      const data = await this.docClient.send(new ScanCommand(params));
      return data.Items;
    } catch (error) {
      throw new Error(`Error fetching books: ${error.message}`);
    }
  }

  async findOne(id: string) {
    const params = {
      TableName: this.tableName,
      Key: { id },
    };

    try {
      const data = await this.docClient.send(new GetCommand(params));
      if (data.Item) {
        return data.Item;
      } else {
        throw new Error('Book not found');
      }
    } catch (error) {
      throw new Error(`Error fetching book: ${error.message}`);
    }
  }

  // async update(id: string, updateBookDto: { Title?: string; Author?: string }) {
  //   const { Title, Author } = updateBookDto;
  //   const params = {
  //     TableName: this.tableName,
  //     Key: { id },
  //     UpdateExpression: 'set Title = :t, Author = :a',
  //     ExpressionAttributeValues: {
  //       ':t': Title,
  //       ':a': Author,
  //     },
  //     ReturnValues: 'UPDATED_NEW',
  //   };

  //   try {
  //     const data = await this.docClient.send(new UpdateCommand(params));
  //     return { message: 'Book updated', data: data.Attributes };
  //   } catch (error) {
  //     throw new Error(`Error updating book: ${error.message}`);
  //   }
  // }

  async remove(id: string) {
    const params = {
      TableName: this.tableName,
      Key: { id },
    };

    try {
      await this.docClient.send(new DeleteCommand(params));
      return { message: 'Book deleted' };
    } catch (error) {
      throw new Error(`Error deleting book: ${error.message}`);
    }
  }
  async update(
    id: string,
    updateData: { Title?: string; Author?: string; PublicationYear?: number },
  ): Promise<{ message: string; data?: any }> {
    let updateExpression = 'set';
    const expressionAttributeValues: {
      [key: string]: { S: string } | { N: string };
    } = {};

    if (updateData.Title) {
      updateExpression += ' Title = :t,';
      expressionAttributeValues[':t'] = { S: updateData.Title };
    }
    if (updateData.Author) {
      updateExpression += ' Author = :a,';
      expressionAttributeValues[':a'] = { S: updateData.Author };
    }
    if (updateData.PublicationYear) {
      updateExpression += ' PublicationYear = :p,';
      expressionAttributeValues[':p'] = {
        N: updateData.PublicationYear.toString(),
      };
    }

    if (updateExpression === 'set') {
      throw new Error('No fields provided for update');
    }
    updateExpression = updateExpression.endsWith(',')
      ? updateExpression.slice(0, -1)
      : updateExpression;

    const params: UpdateItemCommandInput = {
      TableName: this.tableName,
      Key: { id: { S: id } },
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: ReturnValue.UPDATED_NEW,
    };

    try {
      const command = new UpdateItemCommand(params);
      const data = await this.docClient.send(command);

      const attributes = data.Attributes || {};
      return { message: 'Book updated', data: attributes };
    } catch (error) {
      console.error('Error updating book:', error);
      throw new Error(`Error updating book: ${error.message}`);
    }
  }
}
