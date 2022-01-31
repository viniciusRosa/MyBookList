import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Book from 'App/Models/Book'



export default class BooksController {

    public async index({ request }: HttpContextContract) {
        // const books = await Book.all()

        const page = request.input('page', 1)
        const limit = 10

        const books = await Database.from('books').paginate(page, limit)

        return books.toJSON();
    }

    public async create({ request }: HttpContextContract) {
        const { id, title, authors, publisher, description, imagelinks  } = request.body();

        const book = await Book.create({
            id,
            title,
            authors,
            publisher,
            description,
            imagelinks
        })

        console.log({status: 'ok'})

        return book;
    }

    public async delete({ request }: HttpContextContract) {
        const id = request.param('id');
        const book = await Book.findBy('id', id)
        await book?.delete();
    }

}
