import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public title: string;
  
  @column()
  public authors: string;

  @column()
  public publisher: string;

  @column()
  public description: string;

  @column()
  public imagelinks: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
